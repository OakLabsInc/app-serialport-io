'use strict';

var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

port port = new SerialPort(process.env.SERIAL_DEVICE, {
  parser: serialport.parsers.readline('\n'),
  baudrate: 57600
})

// Read data that is available but keep the stream in "paused mode"
port.on('readable', function () {
  console.log('Read Data:', port.read().toString('hex'))
})

// Switches the port into "flowing mode"
port.on('data', function (data) {
  console.log('Data:', data.toString('hex'))
})

// // Pipe the data into another stream (like a parser or standard out)
// const lineStream = port.pipe(new Readline())