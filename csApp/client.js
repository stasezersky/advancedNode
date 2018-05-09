const EventEmmiter = require('events')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const client = new EventEmmiter()
const server = require('./server')(client)

server.on('response', (resp) => {
    // clears the terminal 
    process.stdout.write('\u001B[2J\u001B[0;0F')
    // prints out the resp
    process.stdout.write(resp)
    // prompts the user to write command
    process.stdout.write('\n\> ')
    
})

let command, args;
rl.on('line', (input) =>{
    [command, ...args] = input.split(' ')
    client.emit('command', command, args )
})