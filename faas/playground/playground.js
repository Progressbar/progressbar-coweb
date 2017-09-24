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

let verHash = "a4286e82-3362-4a04-a446-c47fcc5e0edb"

subscribersRef.once('value', function (data) {
  let dataRef = data.val()
  let confirmSubId = Object.entries(dataRef).find(x => x[1].hash === verHash)[0]
  let confirmSubCred = Object.entries(dataRef).find(x => x[1].hash === verHash)[1]

  if (!confirmSubId) {
    console.log('nop')
    // res.json({
    //   code: 'nope'
    // })
  }

  if (confirmSubId.length === 36) {
    let confirmedSub = {
      [confirmSubId]: {
        email: confirmSubCred.email,
        confirmed: confirmSubCred.confirmed = true,
        createdAt: confirmSubCred.createdAt
      }
    }

    subscribersRef.update(confirmedSub, function (error) {
      if (error) {
        console.log('err')
        // res.json({
        //   error: error,
        //   code: 'error'
        // })
      } else {
        console.log('confr')
        // res.json({
        //   verificationHash: req.params.verificationHash,
        //   code: 'confirmed'
        // })
      }
    })
  }
})

// let normalizedEmail = 'oyoy@gmail.com'
//
// let newSub = {
//   [uuidv4()]: {
//     email: normalizedEmail,
//     createdAt: Date.now(),
//     hash: uuidv4(),
//   }
// }
//
// let instance = uuidv4()
// let emails = []
// subscribersRef.once('value', function (data) {
//   let dataRef = data.val()
//   for (let uid of Object.keys(dataRef)) {
//     emails.push(dataRef[uid].email)
//   }
//
//   let seenEmail = emails.find(x => x === normalizedEmail)
//
//   console.log(seenEmail, instance)
//
//   if (seenEmail) {
//     console.log('already', instance)
//     // res.json({
//     //   newSubscriberEmail: normalizedEmail,
//     //   error: 'already requested mail',
//     //   code: 'already requested mail'
//     // })
//   }
//
//   if (!seenEmail) {
//     subscribersRef.update(newSub, function (error) {
//       if (error) {
//         console.log('not sent')
//         // res.json({
//         //   newSubscriberEmail: normalizedEmail,
//         //   error: error,
//         //   code: 'email not sent'
//         // })
//       } else {
//         console.log('mail sent', instance)
//         // mailgun.messages().send(data, function (error, body) {
//         //   if (error) {
//         //     res.json({
//         //       newSubscriberEmail: normalizedEmail,
//         //       error: error,
//         //       code: 'email not sent'
//         //     })
//         //   }
//         //   if (!error) {
//         //     res.json({
//         //       newSubscriberEmail: normalizedEmail,
//         //       code: 'email sent',
//         //     })
//         //   }
//         // })
//       }
//     })
//   }
// })

// let enteredEmail = 'jaja@mailik.us'

// let emails = []
// subscribersRef.on('value', function(data) {
//   let dataRef = data.val()
//   for (let uid of Object.keys(dataRef)) {
//     console.log(dataRef[uid].email)
//     emails.push(dataRef[uid].email)
//   }
//
//   let seenEmail = emails.find(x => x == enteredEmail)
//
//   console.log(emails)
//   console.log(seenEmail)
// })
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
