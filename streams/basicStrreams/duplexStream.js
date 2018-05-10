const { Duplex } = require('stream')

// duplex must implement both write with 3 args  and read with 1 arg
const streamer = new Duplex({
    write(chunk, encoding, cb) {
        console.log(chunk.toString());
        cb()
    },
    read(letter) {
        setTimeout(() => {
            // 90 is charcode for Z
            if (this.charCode > 90) {
                this.push(null)
                return
            }
            this.push(String.fromCharCode(this.charCode++))
        }, 200)
    }
})
streamer.charCode = 65
process.stdin.pipe(streamer).pipe(process.stdout)

