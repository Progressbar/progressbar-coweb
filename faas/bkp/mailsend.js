const secrets = require('./secrets.json')
const api_key = secrets.mailgun.apiKey
const domain = secrets.mailgun.domain
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

const data = {
  from: 'Progressbar Cowork noreply <no-reply@sandboxbf294a2369e74c3298b11770143c5d4a.mailgun.org>',
  to: 'ybdaba@gmail.com',
  subject: 'Progressbar Cowork e-mail verification',
  text: 'Hello, please confirm your email address'
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
