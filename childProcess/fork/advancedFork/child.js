const longCompute = () => {
    let sum = 0
    for (let index = 0; index < 1e10; index++) {
        sum += index
    }
    return sum
}

process.on('message', msg => {
    const num = longCompute()
    process.send(num)
})
