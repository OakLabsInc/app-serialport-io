
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')

var port = new SerialPort(process.env.SERIAL_DEVICE, {
    baudRate: 57600
});

const parser = port.pipe(new Readline({ detimiter: '\r', encoding: 'utf8' }))

port.on('data', data => console.log({ port: data.toString('utf8') }))
parser.on('data', data => console.log({ parser: data }))

function hexToString(str)
{
    const buf = new Buffer(str, 'hex');
    return buf.toString('utf8');
}