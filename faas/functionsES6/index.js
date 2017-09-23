const functions = require('firebase-functions')
const uuidv4 = require('uuid/v4');
const cors = require('cors')
const express = require('express')

const secrets = require('./secrets.json')
const mailgun = require('mailgun-js')({
  apiKey: secrets.mailgun.apiKey,
  domain: secrets.mailgun.domain
})

const config = {
  baseWebUrl: "https://progressbar-cowork.netlify.com/",
  baseFaasUrl: "https://us-central1-coweb-bc478.cloudfunctions.net/"
}
const admin = require('firebase-admin')
const serviceAccount = require('./pKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coweb-bc478.firebaseio.com"
})

const db = admin.database();
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

  const hash = uuidv4()
  const data = {
    from: `Progressbar Cowork noreply <no-reply@${secrets.mailgun.domain}>`,
    to: 'ybdaba@gmail.com',
    subject: 'Progressbar Cowork e-mail verification',
    text: `Hello, please confirm your email address ${req.params.email} by clicking on link ${config.baseFaasUrl}/verify/${hash}`
  }

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      res.json({
        newSub: req.params.email,
        error: error,
        code: 'email not sent'
      })
    }
    if (!error) {
      res.json({
        newSub: req.params.email,
        code: 'email sent'
      })
    }
  })
})

export let newSubcriber = functions.https.onRequest(app3)

const app4 = express()
app4.use(cors({
  origin: true
}))
app4.get("/:verificationHash", (req, res) => {
  ref.on("value", function (snapshot) {

  })
  res.json({
    subscribersRef,
    verificationHash: req.params.verificationHash,
    code: 'confirmed'
  })
})

export let verify = functions.https.onRequest(app4)

// const app5 = express()
// app5.use(cors({ origin: true}))
//
// app5.get("/:email", (req,res) => {
//   mailTransport.sendMail(mailOptions).then(() => {
//       res.json({
//         newSub: req.params.email,
//         code: 'email sent'
//       })
//     }).catch(error => {
//       res.json({
//         newSub: req.params.email,
//         code: 'email not sent'
//         error: error
//       })
//     })
// })
//
// export let newSub2 = functions.https.onRequest(app5)

// ref.on("child_changed", function(snapshot) {
//   let changedObj = snapshot.val();
//   console.log("updated entry" + JSON.stringify(changedObj));
// });
