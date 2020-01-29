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

const SerialPort = require('serialport');
var Delimiter = SerialPort.parsers.Delimiter;

var port = new SerialPort(process.env.SERIAL_DEVICE, {
    baudRate: 57600
});

var parser = port.pipe(new Delimiter({delimiter: Buffer.from('EOL')}));
port.on('data', data => console.log({ port: data.toString('hex') }))
parser.on('data', data => console.log({ parser: data }))

