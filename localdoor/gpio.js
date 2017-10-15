var Gpio = require('onoff').Gpio,
  led = new Gpio(23, 'out'),
  button = new Gpio(23, 'in', 'both');

 led.writeSync(value);
// button.watch(function(err, value) {
//
// });
