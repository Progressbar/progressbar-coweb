import * as functions from "firebase-functions"
const uuid = require('uuid')
const cors = require('cors')
const express = require('express')

const secrets = require('./secrets.json')

const admin = require("firebase-admin")
const serviceAccount = require("./pKey.json")

const nodemailer = require('nodemailer')
const gmailEmail = secrets.gmail.email
const gmailPassword = secrets.gmail.pass
const mailTransport = nodemailer.createTransport(
    `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

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

const app5 = express()
app5.use(cors({ origin: true}))

app5.get("/:email", (req,res) => {
  let mailOpts = {
    from: '"Progressbar Cowork noreply" <ybdaba+noreply@gmail.com>',
    to: 'ybdaba@gmail.com',
    subject: 'Progressbar Cowork e-mail verification',
    text: 'Hello, please confirm your email address at'
  }

  mailTransport.sendMail(mailOpts).then(() => {
      res.json({
        newSub: req.params.email,
        code: 'email sent'
      })
    }).catch(error => {
      res.json({
        newSub: req.params.email,
        code: 'email not sent'
        error: error
      })
    })
})

export let newSub = functions.https.onRequest(app5)
