
// must go to https:// - pay attnetion to that

const fs = require('fs')
const server = require('https')
        .createServer({
            key: fs.readFileSync('./key.pem'),
            cert: fs.readFileSync('./cert.pem'),
        });

server.on('request', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' })
    process.stdout.write('first connection')
    res.end('Hello World!\n')

})

server.listen(443);