const firebase = require('firebase-admin')
let serviceAccount = require("path/to/serviceAccountKey.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coweb-bc478.firebaseio.com"
})
