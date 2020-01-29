'use strict';

var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

var port = new SerialPort(process.env.SERIAL_DEVICE, {
  parser: serialport.parsers.Readline('\n'),
  baudrate: 57600
})

// Read data that is available but keep the stream in "paused mode"
port.on('readable', function () {
  console.log('Read Data:', port.read())
})

// Switches the port into "flowing mode"
port.on('data', function (data) {
  console.log('Data:', data)
})

// // Pipe the data into another stream (like a parser or standard out)
// const lineStream = port.pipe(new Readline())