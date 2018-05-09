const dgram = require('dgram')
const server = dgram.createSocket('udp4')



server.on('listening', () => { console.log('UDP server is listening');
})
server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port}: ${msg}`);
    
})
const PORT = 3333
const HOST = '127.0.0.1'

server.bind(PORT, HOST)
setInterval(() => {
    const client= dgram.createSocket('udp4')
/// can also send buffers instead of strings and cut them into peace
    client.send('Stas is the king', PORT, HOST, (err) => {
        if (err) throw err
        console.log('message sent');
        client.close()
    })}
,1000)