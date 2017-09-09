const functions = require('firebase-functions');
const uuid = require('uuid')

var admin = require("firebase-admin");
var serviceAccount = require("./pKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coweb-bc478.firebaseio.com"
});

const db = admin.database();
const ref = db.ref("server")
const subscribersRef = ref.child("subscribers")

ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
