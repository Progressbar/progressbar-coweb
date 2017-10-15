const firebase = require('firebase-admin')
let serviceAccount = require('./pKey.json')
let Gpio = require('onoff').Gpio
let led = new Gpio(23, 'out')

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://coweb-bc478.firebaseio.com'
})

const db = firebase.database()
const localdoor = db.ref('localdoor')
let doorLock = true

localdoor.on('child_added', function(data) {
  if (doorLock) {
    openDoor()
    console.log(`${Date()} openning for ${data.val()}`)
  }
}, function(error) {
  console.log(`err ${err.code}`)
})

function openDoor() {
  doorLock = false
  console.log(`openning door pin`)
  led.writeSync(1)
  setTimeout(function () {
    console.log(`closing door pin`)
    led.writeSync(0)
    doorLock = true
  }, 3000);
}
