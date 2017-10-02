/**
 * A basic email verification
 * @bg info
 * @param {string} hash came in email
 @ @returns {object}
 */
module.exports = (hash = 'non', context, callback) => {
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

  if (hash === 'non') {
    callback(null, {
      code: 'non'
    })
  }

  if (hash !== 'non') {
    const db = firebase.database()
    const ref = db.ref('server')
    const subscribersRef = ref.child('subscribers')

    subscribersRef.once('value', function (data) {
      let dataRef = data.val()
      let confirmSubArr = Object.entries(dataRef)
      let confirmSub = confirmSubArr.find(x => x[1].hash === hash)
      if (confirmSub === undefined) {
        callback(null, {
          code: 'Probably already confirmed email',
          hash
        })
      }

      if (confirmSub && confirmSub[0].length === 36) {
        let confirmedSub = {
          [confirmSub[0]]: {
            email: confirmSub[1].email,
            confirmed: true,
            createdAt: confirmSub[1].createdAt
          }
        }
        subscribersRef.update(confirmedSub, function (error) {
          if (error) {
            callback(null, {
              error: error,
              code: 'ayay'
            })
          }

          if (!error) {
            confirmedSub.code = 'Email has been confirmed'
            callback(null, confirmedSub, {
              'Set-Cookie': 'uuid=thisismynumber333; auth=thisismysecretcookie333; date=thisismysecretcookiedate333'
            })
          }
        })
      }
    })
  }
}
