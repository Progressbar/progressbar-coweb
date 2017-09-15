'use strict';

var functions = require('firebase-functions');
var uuid = require('uuid');
var cors = require('cors');
var express = require('express');

var admin = require("firebase-admin");
var serviceAccount = require("./pKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coweb-bc478.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("server");
var subscribersRef = ref.child("subscribers");
var subs = void 0;