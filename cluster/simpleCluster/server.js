const server = require('http')
const pid = process.pid
let userCount
server.createServer((req,res) => {
    for (let i = 0; i < 1e7; i++);
    res.write(`Handled by process ${pid}\n`)
    res.end(`User count is: ${userCount}`)    
}).listen(8000)

process.on('message', msg => {
    userCount = msg.userCount
})