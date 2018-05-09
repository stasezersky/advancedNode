const server = require('http').createServer()

server.on('request', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain'})
    // process.stdout.write('first connection')
    res.write('Hi\n')
    
    setTimeout(() => {
        res.write('Hi again\n')
    }, 5000)
    setTimeout(() => {
        res.write('Hi again\n')
    }, 10000)
    // res.end('Hello World!\n')

})

server.timeout = 25000
server.listen(8000)