const { Transform } = require('stream')

//transform stream shoud implement only transform method with 3 args and it can also push data as read stream
// and must also call the cb
const transformer = new Transform({
    transform(chunk, encoding, cb){
        this.push(chunk.toString().toUpperCase())
        cb()
    }
})

process.stdin.pipe(transformer).pipe(process.stdout)