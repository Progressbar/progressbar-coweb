const functions = require('firebase-functions')
const uuidv4 = require('uuid/v4')
const cors = require('cors')
const express = require('express')
import isEmail from 'validator/lib/isEmail'
import normalizeEmail from 'validator/lib/normalizeEmail'

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
  ref.on("value", function (snapshot) {
    subs = snapshot.val()
    res.json({
      seats: {
        subscribers: Object.keys(subs.subscribers).length,
        free: 10,
        waitlist: 2,
        capacity: 14,
        allocatedDay: 0
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
  subscribersRef.on('value', function (data) {
    let dataRef = data.val()
    for (let uid of Object.keys(dataRef)) {
      emails.push(dataRef[uid].email)
    }

    let seenEmail = emails.find(x => x == normalizedEmail)

    if (seenEmail) {
      res.json({
        newSubscriberEmail: normalizedEmail,
        error: 'already requested mail',
        code: 'already requested mail'
      })
    }

    if (seenEmail === undefined) {
      subscribersRef.update(newSub, function (error) {
        if (error) {
          res.json({
            newSubscriberEmail: normalizedEmail,
            error: error,
            code: 'email not sent'
          })
        } else {
          // mailgun.messages().send(data, function (error, body) {
          //   if (error) {
          //     res.json({
          //       newSubscriberEmail: normalizedEmail,
          //       error: error,
          //       code: 'email not sent'
          //     })
          //   }
          //   if (!error) {
          res.json({
            newSubscriberEmail: normalizedEmail,
            code: 'email sent',
          })
          //   }
          // })
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
  ref.on("value", function (snapshot) {

  })
  res.json({
    verificationHash: req.params.verificationHash,
    code: 'confirmed'
  })
})

export let verify = functions.https.onRequest(app4)

// ref.on("child_changed", function(snapshot) {
//   let changedObj = snapshot.val();
//   console.log("updated entry" + JSON.stringify(changedObj));
// });
