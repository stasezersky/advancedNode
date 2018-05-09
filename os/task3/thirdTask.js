const fs = require('fs')
const path = require('path')

const dirname = path.join(__dirname, 'files')
let currentFiles = []

try {
    currentFiles = fs.readdirSync(dirname)    
} catch (error) {
    console.log('no such dir');
}

const logWithTime = (message) => {
    console.log(`${new Date().toUTCString()}: ${message}`);
}

fs.watch(dirname, (event, file) => {
    if (event.toString() === 'rename') {
        const index = currentFiles.indexOf(file)
        console.log(index);        
        if (index >= 0) {
            logWithTime(`${file} was deleted`)
            currentFiles.splice(index,1)
            return
        } 
        logWithTime(`${file} was added`)
        currentFiles.push(file)
        return
    }
    //// doesn;t works with system modifications - vim and such
    logWithTime(`${file} was modified`)
})

