const SerialPort = require('serialport')
const port = new SerialPort(process.env.SERIAL_DEVICE)

port.on('readable', function () {
  console.log('readable data:', port.read().toString('utf8'))
})

// Switches the port into "flowing mode"
port.on('data', function (data) {
  console.log('data:', data.toString('utf8'))
})

// Pipe the data into another stream (like a parser or standard out)
// const lineStream = port.pipe(new Readline())

