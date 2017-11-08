/**
 * A basic cowork order
 * @bg info
 * @param {string} authToken
 @ @returns {object}
 */
const lib = require('lib')

module.exports = (authToken = 'non', context, callback) => {
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

  if (authToken === 'non') {
    callback(null, {
      code: 'non'
    })
  }

  return lib[`${context.service.identifier}.config`]((err, config) => {
    if (err) {
      callback(null, {
        code: 'Config error'
      })
    }

    if (authToken !== 'non') {
      const db = firebase.database()
      const ref = db.ref('server')
      const subscribersRef = ref.child('subscribers')
      const orders = ref.child('orders')

      subscribersRef.once('value', function (data) {
        let dataRef = data.val()
        let confirmSubArr = Object.entries(dataRef)
        let authSub = confirmSubArr.find(x => x[1].authToken === authToken)
        if (authSub === undefined) {
          callback(null, {
            code: 'Probably you are missing access rights'
          })
        }

        orders.once('value', function (orders) {
          let ordersBulk = orders.val()
          let now = Date.now()
          let today = new Date(Date.UTC(new Date(now).getUTCFullYear(), new Date(now).getUTCMonth(), new Date(now).getUTCDate())).getTime()
          let gotOrderToday = null
          if (ordersBulk[today].find(x => x === authSub[0])) {
            gotOrderToday = true
          }

          if (authSub) {
            callback(null, {
              code: authSub[1].email,
              credit: authSub[1].credit,
              gotOrderToday,
              config
            })
          }
        })
      })
    }
  })
}
