const functions = require('firebase-functions');
const uuid = require('uuid')
const cors = require('cors')
const express = require('express')

const admin = require("firebase-admin");
const serviceAccount = require("./pKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coweb-bc478.firebaseio.com"
});

const db = admin.database();
const ref = db.ref("server")

let uuidgen = uuid.v4()
let sub = {
  [uuidgen]: {
    email: 'ybdaba@gmail.com',
    subAt: 12344385216,
    credit: 0
  }
}

const subscribersRef = ref.child("subscribers")

subscribersRef.update(sub, function(error) {
  if (error) {
    console.log('problem with saving', sub)
  } else {
    console.log('save done')
  }
})
