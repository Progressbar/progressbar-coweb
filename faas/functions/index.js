'use strict';

var _firebaseFunctions = require('firebase-functions');

var functions = _interopRequireWildcard(_firebaseFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var uuid = require('uuid');
var cors = require('cors');
var express = require('express');

var admin = require("firebase-admin");
var serviceAccount = require("./pKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coweb-bc478.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("server");
var subscribersRef = ref.child("subscribers");
var subs = void 0;

var getAllSubs = express();
getAllSubs.use(cors({ origin: true }));
getAllSubs.get("*", function (request, response) {
  ref.on("value", function (snapshot) {
    subs = snapshot.val();
    response.send(subs);
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});

exports.getAllSubs = functions.https.onRequest(getAllSubs);

// ref.on("child_changed", function(snapshot) {
//   let changedObj = snapshot.val();
//   console.log("updated entry" + JSON.stringify(changedObj));
// });