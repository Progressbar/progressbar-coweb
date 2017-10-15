// echo 23 > /sys/class/gpio/export
// echo out > /sys/class/gpio/gpio23/direction
// echo 1 > /sys/class/gpio23/value

var Gpio = require('onoff').Gpio,
  led = new Gpio(23, 'out'),
  button = new Gpio(23, 'in', 'both');

 led.writeSync(1);
// button.watch(function(err, value) {
//
// });
