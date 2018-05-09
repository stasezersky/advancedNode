const fs = require('fs')

const readFilesArray = (file, cb = () => {}) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if(err) {
               reject(err)
               return cb(err)
            }
            const lines = data.toString().trim().split('\n')
            resolve(lines)
            cb(null, lines)
        })
    })
}



readFilesArray('./numbers')
    .then(lines => {
        const numbers = lines.map(Number)
        const oddNumbers = numbers.filter(number => number % 2 === 1)
        console.log('odd numbers count is: ', oddNumbers.length);
    })
    .catch(console.error);


readFilesArray('./numbers', (err, lines) => {
    if (err) throw err;

    const numbers = lines.map(Number)
    const oddNumbers = numbers.filter(number => number % 2 === 1)
    console.log('odd numbers count is: ', oddNumbers.length);

})

async function countOdd() {
    try {
        const lines = await readFilesArray('./numbers')
        const numbers = lines.map(Number)
        const oddNumbers = numbers.filter(number => number % 2 === 1)
        console.log('odd numbers count is: ', oddNumbers.length);
    } catch (error) {
        console.log(error);
    }
}

countOdd()