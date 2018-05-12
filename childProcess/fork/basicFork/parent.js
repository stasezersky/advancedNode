const { fork } = require('child_process')

const forked = fork('child.js')
// we tell parent that when a message from child is recieved to log it out
forked.on('message', (msg) => {
    console.log('child: ', msg)
})
// we tell the parent to send message to child
forked.send('hello')