import * as functions from "firebase-functions"
const uuid = require('uuid')
const cors = require('cors')
const express = require('express')

const admin = require("firebase-admin")
const serviceAccount = require("./pKey.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coweb-bc478.firebaseio.com"
});

const db = admin.database();
const ref = db.ref("server")
const subscribersRef = ref.child("subscribers")
let subs

const app1 = express()
getAllSubs.use(cors({ origin: true }))
getAllSubs.get("*", (request, response) => {
  ref.on("value", function(snapshot) {
    subs = snapshot.val()
    response.send(subs)
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code)
  })
})

export let getAllSubs = functions.https.onRequest(app1)

const app2 = express()
subscribers.use(cors({ origin: true }))
subscribers.get("*", (req, res) => {
  ref.on("value", function(snapshot) {
    subs = snapshot.val()
    res.json({subscribers: Object.keys(subs.subscribers).length})
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code)
  })
})

export let subscribers = functions.https.onRequest(app2)

// ref.on("child_changed", function(snapshot) {
//   let changedObj = snapshot.val();
//   console.log("updated entry" + JSON.stringify(changedObj));
// });
