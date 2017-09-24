require('core-js/fn/object/entries')
const functions = require('firebase-functions')
const uuidv4 = require('uuid/v4')
const cors = require('cors')
const express = require('express')
const isEmail = require('validator/lib/isEmail')
const normalizeEmail = require('validator/lib/normalizeEmail')

const secrets = require('./secrets.json')
const mailgun = require('mailgun-js')({
  apiKey: secrets.mailgun.apiKey,
  domain: secrets.mailgun.domain
})

const config = {
  baseWebUrl: "https://progressbar-cowork.netlify.com/",
  baseFaasUrl: "https://us-central1-coweb-bc478.cloudfunctions.net/"
}
const firebase = require('firebase-admin')
const serviceAccount = require('./pKey.json')

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://coweb-bc478.firebaseio.com"
})

const db = firebase.database();
const ref = db.ref("server")
const subscribersRef = ref.child("subscribers")
let subs

const app1 = express()
app1.use(cors({
  origin: true
}))
app1.get("*", (request, response) => {
  ref.on("value", function (snapshot) {
    subs = snapshot.val()
    response.send(subs)
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code)
  })
})

export let getAllSubs = functions.https.onRequest(app1)

const app2 = express()
app2.use(cors({
  origin: true
}))
app2.get("*", (req, res) => {
  ref.once("value", function (snapshot) {
    subs = snapshot.val()
    res.json({
      seats: {
        subscribers: Object.keys(subs.subscribers).length,
        free: 10,
        waitlist: 2,
        capacity: 14,
        allocatedToday: 0
      }
    })
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code)
  })
})

export let subscribers = functions.https.onRequest(app2)

const app3 = express()
app3.use(cors({
  origin: true
}))
app3.get("/:email", (req, res) => {

  if (!isEmail(req.params.email)) {
    res.json({
      error: 'not an email',
      code: 'not an email'
    })
  }

  let normalizedEmail = normalizeEmail(req.params.email)
  const hash = uuidv4()
  const data = {
    from: `Progressbar Cowork noreply <no-reply@${secrets.mailgun.domain}>`,
    to: 'ybdaba@gmail.com',
    subject: 'Progressbar Cowork Email Verification',
    text: `Hello,
      looks like somebody tried use your email as subscriber mail.
      If it was you, please confirm your email address ${normalizedEmail}
      by clicking on link ${config.baseFaasUrl}verify/${hash}

      If you did not request this email, please ignore it.

      [Humanoid] @ ${config.baseWebUrl}`
  }

  let newSub = {
    [uuidv4()]: {
      email: normalizedEmail,
      createdAt: Date.now(),
      hash: uuidv4(),
    }
  }

  let emails = []
  subscribersRef.once('value', function (data) {
    let dataRef = data.val()
    for (let uid of Object.keys(dataRef)) {
      emails.push(dataRef[uid].email)
    }

    let seenEmail = emails.find(x => x === normalizedEmail)

    if (seenEmail === normalizedEmail) {
      res.json({
        newSubscriberEmail: normalizedEmail,
        error: 'already requested mail',
        at: 0,
        code: 'Please confirm your email'
      })
    }

    if (seenEmail === undefined) {
      subscribersRef.update(newSub, function (err) {
        if (err) {
          res.json({
            newSubscriberEmail: normalizedEmail,
            error: err,
            at: 1,
            code: 'Error occured, try later'
          })
        } else {
          mailgun.messages().send(data, function (error, body) {
            if (error) {
              res.json({
                newSubscriberEmail: normalizedEmail,
                error: error,
                at: 2,
                code: 'Error occured, try later'
              })
            }
            if (!error) {
              res.json({
                newSubscriberEmail: normalizedEmail,
                at: 3,
                code: 'Email has been sent',
              })
            }
          })
        }
      })
    }
  })
})

export let newSubscriber = functions.https.onRequest(app3)

const app4 = express()
app4.use(cors({
  origin: true
}))
app4.get("/:verificationHash", (req, res) => {
  subscribersRef.once('value', function (data) {
    let dataRef = data.val()
    let confirmSubIdArr = Object.entries(dataRef)
    let confirmSubId = confirmSubIdArr.find(x => x[1].hash === req.params.verificationHash)[0]
    let confirmSubCredArr = Object.entries(dataRef)
    let confirmSubCred = confirmSubCredArr.find(x => x[1].hash === req.params.verificationHash)[1]

    res.json({
      out: [confirmSubIdArr, confirmSubId, confirmSubCred, confirmSubCredArr]
    })
    if (!confirmSubId) {
      res.json({
        code: 'nope'
      })
    }

    // if (confirmSubId.length === 36) {
    if (confirmSubId) {
      let confirmedSub = {
        [confirmSubId]: {
          email: confirmSubCred.email,
          confirmed: confirmSubCred.confirmed = true,
          createdAt: confirmSubCred.createdAt
        }
      }

      subscribersRef.update(confirmedSub, function (error) {
        if (error) {
          res.json({
            error: error,
            code: 'error'
          })
        } else {
          res.json({
            verificationHash: req.params.verificationHash,
            code: 'confirmed'
          })
        }
      })
    }
  })
})

export let verify = functions.https.onRequest(app4)
