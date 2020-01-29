const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort(process.env.SERIAL_DEVICE)
const parser = new Readline()
port.pipe(parser)
parser.on('data', console.log)

