const fs = require('fs')
async function countOdd() {
    try {
        const lines = await fs.readFile('./numbers')
        const numbers = lines.map(Number)
        const oddNumbers = numbers.filter(number => number % 2 === 1)
        console.log('odd numbers count is: ', oddNumbers.length);
    } catch (error) {
        console.log(error);
    }
}

countOdd()