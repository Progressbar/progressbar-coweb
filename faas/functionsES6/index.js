import * as functions from "firebase-functions"
const uuid = require('uuid')
const cors = require('cors')
const express = require('express')

const secrets = require('./secrets.json')
const api_key = secrets.mailgun.apiKey
const domain = secrets.mailgun.domain
const mailgun = require('mailgun-js')({
  apiKey: api_key,
  domain: domain
});

const admin = require("firebase-admin")
const serviceAccount = require("./pKey.json")

// const nodemailer = require('nodemailer')
// const gmailEmail = encodeURIComponent(functions.config().gmail.email);
// const gmailPassword = encodeURIComponent(functions.config().gmail.password);
// const gmailEmail = secrets.gmail.email
// const gmailPassword = secrets.gmail.pass
// const mailTransport = nodemailer.createTransport(
//     `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);
// const mailOptions = {
//   from: '"Spammy Corp." <ybdaba@gmail.com>',
//   to: 'ybdaba@gmail.com',
//   subject: ''
// }
// mailOptions.subject = 'Thanks and Welcome!'
// mailOptions.text = 'Thanks you for subscribing to our newsletter. You will receive our next weekly newsletter.'


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

  const data = {
    from: 'Progressbar Cowork noreply <no-reply@sandboxbf294a2369e74c3298b11770143c5d4a.mailgun.org>',
    to: 'ybdaba@gmail.com',
    subject: 'Progressbar Cowork e-mail verification',
    text: 'Hello, please confirm your email address'
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

export let newSub = functions.https.onRequest(app3)

const app4 = express()
app4.use(cors({
  origin: true
}))
app4.get("/:verificationHash", (req, res) => {

  res.json({
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
