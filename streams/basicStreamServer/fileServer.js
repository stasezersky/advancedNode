const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req,res) => {
    // fs.readFile('bigFile', (err, data) => {
    //     if(err) throw err;
    //     res.end(data)
    // })
    let file = fs.createReadStream('bigFile')
    file.pipe(res)
})
server.listen(8000)