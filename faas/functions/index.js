const functions = require('firebase-functions')
const uuid = require('uuid')
const cors = require('cors')
const express = require('express')

var admin = require("firebase-admin")
var serviceAccount = require("./pKey.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coweb-bc478.firebaseio.com"
});

const db = admin.database();
const ref = db.ref("server")
const subscribersRef = ref.child("subscribers")
let subs

const app4 = express()
app4.use(cors({ origin: true }))
app4.get("*", (request, response) => {
  ref.on("value", function(snapshot) {
    subs = snapshot.val()
    response.send(subs)
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code)
  })
  // response.send("Hello from Express on Firebase with CORS!")
})

exports.api4 = functions.https.onRequest(app4)

// ref.on("child_changed", function(snapshot) {
//   let changedObj = snapshot.val();
//   console.log("updated entry" + JSON.stringify(changedObj));
// });
