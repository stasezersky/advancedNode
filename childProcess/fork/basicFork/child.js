// the child sees it gets a messages in the global process object and we tell it what to do with it
process.on('message', (msg) => {
    console.log('message from parent:', msg);
    
})

let counter = 0

setInterval(() => {
    // we tell here to send a message to the global process obj with the counter every second and the parent
    //process will recieve it
    process.send({ counter: counter++ })
},1000)
