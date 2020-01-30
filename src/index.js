const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')

var port = new SerialPort(process.env.SERIAL_DEVICE, {
    baudRate: 57600
});
var output = ""
// Setup the parser for the expected output format
const parser = port.pipe(new Readline({ delimiter: '\r', encoding: 'utf8' }))

parser.on('data', data => {

    // only output or take action if the data has changed
    if (data !== output){
        // set new data output
        output = data
        console.log({ parser: output })
    }
    
})
