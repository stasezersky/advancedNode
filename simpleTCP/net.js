process.stdout.write('\u001B[2J\u001B[0;0F')

const server = require('net').createServer()
let counter = 0
let sockets = {}

// good lib to work with timestamps - moments
function timestamp(){
    const now = new Date()
    return `${now.getHours()}:${now.getMinutes()}`
}

server.on('connection', socket => {
    socket.id = counter++
    console.log('Client connected')
    socket.write('Pease type in your name: \n')

    socket.on('data', data => {
        if (!sockets[socket.id]) {
            socket.name = data.toString().trim()
            sockets[socket.id] = socket
            socket.write(`Hello ${socket.name} \n`)
            return
        }
        console.log(`data sent from${socket.id}, ${socket.name}: `, data);
        Object.entries(sockets).forEach(([id, cs]) => {
            cs.write(`${socket.name} ${timestamp()}: `)
            cs.write(data)
        })
    })
    socket.setEncoding('utf8')
    socket.on('end', () => {
        delete sockets[socket.id]
        console.log(`client ${socket.id} disconnected`)
        Object.entries(sockets).forEach(([id, cs]) => {
            cs.write(`${socket.name}: disconnected `)

        })
    })
    
})

server.listen(8000, () =>  console.log('Server bound') )