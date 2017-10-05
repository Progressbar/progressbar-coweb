/**
 * A basic email verification
 * @bg info
 * @param {string} loginCode came in email
 @ @returns {object}
 */
module.exports = (loginCode = 'non', context, callback) => {
  const validator = require('validator')
  const firebase = require('firebase-admin')
  const firebaseConfig = {
    type: process.env.firebase_type,
    project_id: process.env.firebase_project_id,
    private_key_id: process.env.firebase_private_key_id,
    private_key: process.env.firebase_private_key,
    client_email: process.env.firebase_client_email,
    client_id: process.env.firebase_client_id,
    auth_uri: process.env.firebase_auth_uri,
    token_uri: process.env.firebase_token_uri,
    auth_provider_x509_cert_url: process.env.firebase_auth_provider_x509_cert_url,
    client_x509_cert_url: process.env.firebase_client_x509_cert_url
  }
  if (firebase.apps.length === 0) {
    firebase.initializeApp({
      credential: firebase.credential.cert(firebaseConfig),
      databaseURL: 'https://coweb-bc478.firebaseio.com'
    })
  }

  if (loginCode === 'non') {
    callback(null, {
      code: 'non'
    })
  }

  if (!validator.isUUID(loginCode, 4)) {
    callback(null, {
      code: 'nope'
    })
  }

  if (loginCode !== 'non') {
    const db = firebase.database()
    const ref = db.ref('server')
    const subscribersRef = ref.child('subscribers')

    subscribersRef.once('value', function (data) {
      let dataRef = data.val()
      let confirmSubArr = Object.entries(dataRef)
      let authSub = confirmSubArr.find(x => x[1].loginCode === loginCode)
      if (authSub === undefined) {
        callback(null, {
          code: 'Probably already logged user',
          loginCode,
          logged: true
        })
      }

      if (authSub && authSub[0].length === 36) {
        authSub[1].loginCode = null

        let authedSub = {
          [authSub[0]]: authSub[1]
        }
        subscribersRef.update(authedSub, function (error) {
          if (error) {
            callback(null, {
              error: error,
              code: 'ayay'
            })
          }

          if (!error) {
            authedSub.code = 'You should be logged now'
            authedSub.logged = true
            callback(null, authedSub)
          }
        })
      }
    })
  }
}
