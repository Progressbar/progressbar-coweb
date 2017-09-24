/**
 * A basic Hello World function
 * @param {string} name Who you're saying hello to
 * @returns {object}
 */
module.exports = (name = 'world', context, callback) => {
  // // let lel = 'yy'
  // // let result = await `yy ${lel}`;
  const uuidv4 = require('uuid/v4')
  const firebase = require('firebase-admin')
  const serviceAccount = require('./pKey.json')
  // const serviceAccount = fs.readFileSync('functions/pkey.json')

  firebase.initializeApp({
    credential: firebase.credential.cert({}),
    databaseURL: "https://coweb-bc478.firebaseio.com"
  })
  firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://coweb-bc478.firebaseio.com"
  })

  const db = firebase.database();
  const ref = db.ref("server")
  const subscribersRef = ref.child("subscribers")

  subscribersRef.once('value', function (data) {
    let dataRef = data.val()
    let confirmSubIdArr = Object.entries(dataRef)
    let confirmSubId = confirmSubIdArr.find(x => x[1].hash === req.params.verificationHash)[0]
    let confirmSubCredArr = Object.entries(dataRef)
    let confirmSubCred = confirmSubCredArr.find(x => x[1].hash === req.params.verificationHash)[1]

    if (!confirmSubId) {
      callback(null, {
        code: 'nope'
      })
    }

    if (confirmSubId) {
      let confirmedSub = {
        [confirmSubId]: {
          email: confirmSubCred.email,
          confirmed: confirmSubCred.confirmed = true,
          createdAt: confirmSubCred.createdAt
        }
      }
    }

    subscribersRef.update(confirmedSub, function (error) {
      if (error) {
        callback(null, { code: 'ayay'})
      }

      let result = {
        code: 'ok',
        name: 'ss'

      }
      callback(null, result)
    })
  })
};
