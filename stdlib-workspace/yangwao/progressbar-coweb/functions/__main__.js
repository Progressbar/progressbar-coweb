/**
* A basic status of progresssbar-cowork
* @param {string} name Who you're saying hello to
* @returns {object}
*/
module.exports = (name = 'world', context, callback) => {
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
      databaseURL: "https://coweb-bc478.firebaseio.com"
    })
  }

  const db = firebase.database();
  const ref = db.ref('server')
  // const subscribersRef = ref.child('subscribers')

  ref.once('value', function (data) {
    let server = data.val()
    let seats = {
      subscribers: Object.keys(server.subscribers).length,
      free: 10,
      capacity: 10,
      allocatedToday: 0
    }
    let credited = 0
    let daysBooked = Object.keys(server.orders).length
    let orderSum = {}
    let ordersArr = Object.entries(server.orders)
    for (let n of ordersArr) {
      let month = new Date(parseInt(n[0])).getMonth()
      let day = new Date(parseInt(n[0])).getDate()
      Object.assign(orderSum, {[n[0]]: [n[1].length, month, day]})
    }
    let status = {
      orderSum,
      credited,
      daysBooked,
      seats,
      actions: {
        subscribtion: 0,
        orderDaypass: 0,
        orderFlex: 0,
        orderHomie: 0,
        orderLocker: 0,
        order247: 0
      }
    }
    callback(null, status);
  })
};
