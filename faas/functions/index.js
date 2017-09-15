const functions = require('firebase-functions')
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

const getAllSubs = express()
getAllSubs.use(cors({ origin: true }))
getAllSubs.get("*", (request, response) => {
  ref.on("value", function(snapshot) {
    subs = snapshot.val()
    response.send(subs)
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code)
  })
})


exports.getAllSubs = functions.https.onRequest(getAllSubs)

// ref.on("child_changed", function(snapshot) {
//   let changedObj = snapshot.val();
//   console.log("updated entry" + JSON.stringify(changedObj));
// });
