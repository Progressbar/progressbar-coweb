const functions = require('firebase-functions');
const uuid = require('uuid')

var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coweb-bc478.firebaseio.com"
});

const db = admin.database();
const ref = db.ref("server")

let uuidgen = uuid.v4()
let sub = {
  [uuidgen]: {
    email: 'ybdaba@gmail.com',
    subAt: 12344385216,
    credit: 0
  }
}

const subscribersRef = ref.child("subscribers")
// subscribersRef.update(sub)

subscribersRef.update(sub)
