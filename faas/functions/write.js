'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var uuidgen = uuid.v4();
var sub = _defineProperty({}, uuidgen, {
  email: 'ybdaba@gmail.com',
  subAt: 12344385216,
  credit: 0
});

var subscribersRef = ref.child("subscribers");

subscribersRef.update(sub, function (error) {
  if (error) {
    console.log('problem with saving', sub);
  } else {
    console.log('save done');
  }
});