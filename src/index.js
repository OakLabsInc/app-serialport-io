'use strict';
const SerialPort = require('serialport')
const port = new SerialPort(process.env.SERIAL_DEVICE)

// Read data that is available but keep the stream in "paused mode"
port.on('readable', function () {
  console.log('Data:', port.read())
})

// Switches the port into "flowing mode"
port.on('data', function (data) {
  console.log('Data:', data.toString())
})

// // Pipe the data into another stream (like a parser or standard out)
// const lineStream = port.pipe(new Readline())