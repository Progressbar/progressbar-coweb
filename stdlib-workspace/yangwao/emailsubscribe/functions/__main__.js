/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {string}
*/
let request = require('request')
module.exports = (email = 'noemail', context, callback) => {

  let rnd = Math.floor(Math.random()*10)
  let game
  let btc_eth

  if (rnd >= 5) {
    game = 'has won'
  }

  if (rnd <= 4 ) {
    game = 'has lost'
  }

  request
    .get('https://shapeshift.io/rate/btc_eth')
    .on('response', function(response) {
      console.log(response.body)
      btc_eth = response.body
    })
    .on('error', function(err) {
      console.log(err)
    })

  let subscriber = {
    email,
    subscribedAt: Date.now()
  }
  callback(null, `${subscriber.email} ${subscriber.subscribedAt}
  remoteAddr ${context.remoteAddress}
  http ${context.http.url} ${context.http.headers}
  url ${context.url}
  params ${context.params}
  player ${game} result was ${rnd}
  btc_eth rate ${btc_eth}`);
};
