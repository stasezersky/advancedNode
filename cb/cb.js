const fs = require('fs')

const readFilesArray = (file, cb) => {
    fs.readFile(file, (err,data) => {
        if (err){
            return cb(err)
        }

        const lines = data.toString().trim().split('\n')
        cb(null, lines)
    })
}

readFilesArray('./numbers', (err, lines) => {
    if (err) throw err;

    const numbers = lines.map(Number)
    const oddNumbers = numbers.filter(number => number%2 === 1)
    console.log('odd numbers count is: ', oddNumbers.length);
    
})