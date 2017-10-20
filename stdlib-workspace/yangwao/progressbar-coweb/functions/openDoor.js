/**
 * A basic cowork order
 * @bg info
 * @param {string} authToken
 @ @returns {object}
 */
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

  if (authToken !== 'non') {
    const db = firebase.database()
    const ref = db.ref('server')
    const orders = ref.child('orders')
    const subscribersRef = ref.child('subscribers')
    const localdoor = db.ref('localdoor')

    subscribersRef.once('value', function (data) {
      let dataRef = data.val()
      let confirmSubArr = Object.entries(dataRef)
      let authSub = confirmSubArr.find(x => x[1].authToken === authToken)
      if (authSub === undefined) {
        callback(null, {
          code: 'Probably you are missing access rights'
        })
      }

      if (authSub) {
        orders.once('value', function (data) {
          let ordersRef = data.val()
          let now = Date.now()
          let year = new Date(now).getUTCFullYear()
          let month = new Date(now).getUTCMonth()
          let day = new Date(now).getUTCDate()
          let dateToday = new Date(Date.UTC(year, month, day)).getTime()
          if (!ordersRef[dateToday]) {
            callback(null, {
              code: 'Not booked yet'
            })
          }

          if (ordersRef[dateToday]) {
            let orderDateToday = ordersRef[dateToday]
            let openDoor = orderDateToday.find(x => x === authSub[0])

            if (openDoor === undefined) {
              callback(null, {
                code: 'Missing access rights for this day'
              })
            }

            if (openDoor) {
              let openEvent = { [Date.now()]: authSub[0] }
              localdoor.update(openEvent, function (errorDoor) {
                if (errorDoor) {
                  callback(null, {
                    error: errorDoor,
                    code: 'whatever'
                  })
                }

                if (!errorDoor) {
                  callback(null, {
                    code: 'Smash the level'
                  })
                }
              })
            }
          }
        })
      }
    })
  }
}
