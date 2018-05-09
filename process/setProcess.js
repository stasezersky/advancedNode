process.on('exit', _ => {
    console.log('stas is exiting');
    console.log('new ideas for sync');
    
    
})


process.on('uncaughtException', err => {
    console.log('excpetion stas');
    // console.log(err);
})

process.stdin.resume()

console.log('stas');
