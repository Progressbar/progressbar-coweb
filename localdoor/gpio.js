// echo 23 > /sys/class/gpio/export
// echo out > /sys/class/gpio/gpio23/direction
// echo 1 > /sys/class/gpio23/value

let Gpio = require('onoff').Gpio
let led = new Gpio(23, 'out')

led.writeSync(1);
