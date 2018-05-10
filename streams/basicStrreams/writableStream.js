const { Writable } = require('stream')
// we are init a writable stream that must have a write funct with 3 atrrs -> it is equal to console.log
const writeStream = new Writable({
    write(chunk, encoding, cb) {
        console.log(chunk.toString());
        cb()
    }
})

process.stdin.pipe(writeStream)

// this is equivalent to :
// process.stdin.pipe(process.stdout)