// const SerialPort = require('serialport')
// const port = new SerialPort(process.env.SERIAL_DEVICE)

// port.on('readable', function () {
//   console.log('readable data:', port.read().toString('hex'))
// })

// Switches the port into "flowing mode"
// port.on('data', function (data) {
//   console.log('data:', data.toString('hex'))
// })

// Pipe the data into another stream (like a parser or standard out)
// const lineStream = port.pipe(new Readline())

var SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')
var port = new SerialPort(process.env.SERIAL_DEVICE, {
    baudRate: 57600
});

const parser = port.pipe(new Readline({ encoding: 'hex' }))
port.on('data', data => console.log({ port: data.toString('hex') }))
parser.on('data', data => console.log({ parser: data }))

