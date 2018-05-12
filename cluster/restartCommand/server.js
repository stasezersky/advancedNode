const server = require('http')
const pid = process.pid

server.createServer((req,res) => {
    for (let i = 0; i < 1e7; i++);
    res.end(`Handled by process ${pid}\n`)  
}).listen(8000, () => { console.log(`Started process ${pid}`);
})

