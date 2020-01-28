'use strict';
const SerialPort = require('serialport')
const port = new SerialPort(process.env.SERIAL_DEVICE, {
  baudRate: 56700
})

// // Read data that is available but keep the stream in "paused mode"
// port.on('readable', function () {
//   console.log('Data:', port.read())
// })

var Readline = SerialPort.parsers.Readline;
var parser = new Readline()

// Switches the port into "flowing mode"
parser.on('data', function (data) {
  console.log('Data:', data.toString())
})

// // Pipe the data into another stream (like a parser or standard out)
// const lineStream = port.pipe(new Readline())