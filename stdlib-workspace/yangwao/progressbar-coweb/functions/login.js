/**
 * A basic cowork login
 * @bg info
 * @param {string} email
 @ @returns {object}
 */
module.exports = (email = 'non', context, callback) => {
  const isEmail = require('validator/lib/isEmail')
  const normalizeEmail = require('validator/lib/normalizeEmail')
  const uuidv4 = require('uuid/v4')
  const mailgun = require('mailgun-js')({
    apiKey: process.env.mailgun_apiKey,
    domain: process.env.mailgun_domain
  })

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

  if (email === 'non') {
    callback(null, {
      code: 'non'
    })
  }

  if (!isEmail(email)) {
    callback(null, {
      error: 'not an email',
      code: 'Not an email'
    })
  }

  let normalizedEmail = normalizeEmail(email)
  if (email !== 'non') {
    const db = firebase.database()
    const ref = db.ref('server')
    const subscribersRef = ref.child('subscribers')

    subscribersRef.once('value', function (data) {
      let dataRef = data.val()
      let confirmSubArr = Object.entries(dataRef)
      let authSub = confirmSubArr.find(x => x[1].email === normalizedEmail)
      if (authSub === undefined) {
        callback(null, {
          code: 'Probably you are missing access rights'
        })
      }

      if (authSub) {
        authSub[1].loginCode = uuidv4()

        let subWithLoginCode = {
          [authSub[0]]: authSub[1]
        }
        subscribersRef.update(subWithLoginCode, function (err) {
          if (err) {
            console.log('err', err)
            callback(null, {
              code: 'Weird'
            })
          } else {
            const mailmsg = {
              from: `Progressbar Cowork noreply <no-reply@${process.env.mailgun_domain}>`,
              to: `ybdaba@gmail.com`,
              subject: 'Progressbar Cowork Email login',
              text: `Someone just requested login with this email, if it was you, click here #/login/${authSub[1].loginCode}`
            }

            mailgun.messages().send(mailmsg, function (error, body) {
              if (error) {
                console.log('mailgunErr', error)
                callback(null, {
                  code: 'Weird gun'
                })
              }

              if (!error) {
                callback(null, {
                  code: 'Email with login sent'
                })
              }
            })
          }
        })
      }
    })
  }
}
