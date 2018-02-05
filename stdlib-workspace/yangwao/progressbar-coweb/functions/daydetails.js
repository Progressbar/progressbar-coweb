/**
 * A basic status of progresssbar-cowork
 * @param {string} n Who you're saying hello to
 * @returns {object}
 */
const lib = require('lib')

module.exports = (day = 'non', context, callback) => {
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

  return lib[`${context.service.identifier}.config`]((err, config) => {
    if (err) {
      callback(null, { code: 'Config error' })
    }

    if (day.length < 13 || day.length > 13) {
      callback(null, {
        t2: 'illbeback'
      })
    }
    day = parseInt(day)
    const db = firebase.database()
    const ref = db.ref('server')

    ref.once('value', function (data) {
      let server = data.val()
      let todayOrder = Object.values(server.orders[day])
      // let now = Date.now()
      // let today = new Date(Date.UTC(new Date(now).getUTCFullYear(), new Date(now).getUTCMonth(), new Date(now).getUTCDate())).getTime()
      let dayDetail = []
      for (let d of todayOrder) {
        dayDetail.push(d.slice(-4))
      }

      const status = {
        dayDetail,
        config
      }
      callback(null, status)
    })
  })
}
