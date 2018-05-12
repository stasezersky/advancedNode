const http = require('http')
const { fork } = require('child_process')
const server = http.createServer()

server.on('request', (req, res) =>{
    if (req.url === '/compute') {
        const forked = fork('child.js')
        forked.send('start')
        forked.on('message', sum => {
            res.end(`Sum is: ${sum}`)
        })
    } else {
        res.end('Ok')
    }
})

server.listen(8000)