const fs = require('fs')
const EventEmmiter = require('events')

class WithTime extends EventEmmiter {
    execute(asyncFunct, ...args){
        console.time('execute: ')
        asyncFunct(...args, (err, data) => {
            if (err) {
                return this.emit('error', err)
            }
            this.emit('data', data)
            console.timeEnd('execute: ');
        })
    }

}

const withTime = new WithTime

withTime.on('data', (data) => {
    console.log(`data length: ${data.length}`);
    
})
withTime.on('error', (err) => {
    console.log(`error: ${err}`); 
})

withTime.execute(fs.readFile, __filename)
withTime.execute(fs.readFile, '')
