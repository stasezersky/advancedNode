const { Readable }= require('stream')

// const inStream = new Readable()
// here we push data into the readble stream 
// inStream.push('ABCDEFGHIJKLMOPQRSTUVWXYZ')
// // here we push null to indicate the stream that it is finished to push and can close
// inStream.push(null)
// // here we are logging it to the proccess.stdout which is a writable stream 
// inStream.pipe(process.stdout)

// a better way is to use the read function to push event every time:
const inStream = new Readable({
    read(letter){
        setTimeout(()=>{
            // 90 is charcode for Z
            if(this.charCode > 90) {
                this.push(null)
                return
            }
            this.push(String.fromCharCode(this.charCode++))
        },200)
    }
})
//65 is charcode for A
inStream.charCode = 65
inStream.pipe(process.stdout)

