const server = require('http').createServer()
const fs = require('fs')
const data = {}

server.on('request', (req, res) => {
    
    switch (req.url) {
    case '/api':
        res.writeHead(200, { 'content-type': 'application/json' })
        process.stdout.write('got a request')
        res.end(JSON.stringify(data))
        break;
    case '/about':
    case '/home':
        res.writeHead(200, { 'content-type': 'text/plain' })
        process.stdout.write('got a request')
        res.end(fs.readFileSync(`./files${req.url}.html`))
        break;
    case '/':
        res.writeHead(301, { 'Location': '/home' })
        res.end()

        break;
    default:
        res.writeHead(404)
        res.end()
        break;
    }


})

// server.timeout = 25000
server.listen(8000)