const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')

var port = new SerialPort(process.env.SERIAL_DEVICE, {
    baudRate: 57600
});

const parser = port.pipe(new Readline({ delimiter: '\r', encoding: 'utf8' }))
parser.on('data', data => console.log({ parser: data }))
