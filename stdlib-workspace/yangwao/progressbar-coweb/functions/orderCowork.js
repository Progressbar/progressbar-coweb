/**
 * A basic cowork order
 * @bg info
 * @param {string} authToken
 * @param {string} date
 * @param {string} plan
 @ @returns {object}
 */
const lib = require('lib')
module.exports = (authToken = 'non', date = 'non', plan = 'non', context, callback) => {
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
      callback(null, { code: 'Config error' })
    }

    let now = Date.now()
    let today = new Date(Date.UTC(new Date(now).getUTCFullYear(), new Date(now).getUTCMonth(), new Date(now).getUTCDate())).getTime()
    let isBadTimestamp = (isNaN(new Date(parseInt(date))) || date < today)
    let validPlan = config.allowedPlans.find(x => x === plan)
    if (isBadTimestamp) {
      callback(null, {
        code: 'badass'
      })
    }

    if (validPlan === undefined) {
      callback(null, {
        code: 'disabled'
      })
    }

    if (authToken !== 'non' && !isBadTimestamp && validPlan) {
      const db = firebase.database()
      const ref = db.ref('server')
      const orders = ref.child('orders')
      const subscribersRef = ref.child('subscribers')

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
          console.log(authSub[1])
          if (!authSub[1].credit === 0) {
            callback(null, {
              code: 'Not enough credit'
            })
          }

          if (authSub[1].credit > 0 && authSub[1].canOrder) {
            orders.once('value', function (data) {
              let ordersBulk = data.val()
              let orderDate = date

              console.log('orderDate', orderDate)
              let orderDay = ordersBulk[orderDate]
              let isFull = (orderDay && orderDay.length >= config.seatCapacity)

              if (isFull) {
                callback(null, {
                  code: 'Can\'t book, we are full'
                })
              }

              if (!isFull && ordersBulk[orderDate] && ordersBulk[orderDate].find(x => x === authSub[0])) {
                callback(null, {
                  code: 'Already got order for this date'
                })
                orderDay = null
              }

              if (!isFull && ordersBulk[orderDate] && !ordersBulk[orderDate].find(x => x === authSub[0])) {
                orderDay.push(authSub[0])
              }

              if (!isFull && ordersBulk[orderDate] === undefined) {
                orderDay = []
                orderDay.push(authSub[0])
              }

              if (orderDay) {
                let updOrder = {
                  [orderDate]: orderDay
                }

                orders.update(updOrder, function (errorOrder) {
                  if (errorOrder) {
                    callback(null, {
                      code: 'Something with order went wrong'
                    })
                  }

                  if (!errorOrder) {
                    authSub[1].credit = authSub[1].credit - config.orderPrices.day
                    subscribersRef.update({[authSub[0]]: authSub[1]}, function (errorUpd) {
                    })

                    callback(null, {
                      code: 'Order confirmed'
                    })
                  }
                })
              }
            })
          }

          if (!authSub[1].canOrder) {
            callback(null, {
              code: 'Can\'t order'
            })
          }
        }
      })
    }
  })
}
