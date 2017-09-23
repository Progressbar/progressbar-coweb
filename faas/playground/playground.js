const functions = require('firebase-functions')
const uuidv4 = require('uuid/v4')
const cors = require('cors')
const express = require('express')

const firebase = require("firebase-admin")
const serviceAccount = require("./pKey.json")

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://coweb-bc478.firebaseio.com"
})

const db = firebase.database();
const ref = db.ref("server")
const subscribersRef = ref.child("subscribers")

let newSub = {
  [uuidv4()]: {
    email: "jaja@mailik.us",
    createdAt: Date.now(),
    hash: uuidv4(),
  }
}

let enteredEmail = 'jaja@mailik.us'

let emails = []
subscribersRef.on('value', function(data) {
  let dataRef = data.val()
  for (let uid of Object.keys(dataRef)) {
    console.log(dataRef[uid].email)
    emails.push(dataRef[uid].email)
  }

  let seenEmail = emails.find(x => x == enteredEmail)

  console.log(emails)
  console.log(seenEmail)
})
// subscribersRef.update(newSub, function (error) {
//   if (error) {
//     console.log('firebase went wrong', newSub)
//   } else {
//     console.log('done')
//   }
// })

// ref.on("value", function(snapshot) {
//   subs = snapshot.val()
//   console.log(Object.keys(subs.subscribers))
//
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code)
// })
