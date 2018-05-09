const EventEmmiter = require('events')
// const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

class Server extends EventEmmiter {
    constructor(client){
        super();
        process.nextTick(() => {
            this.emit('response', 'Type a command (type help to list commands)')
        })
        client.on('command', (command, args) => {
            switch (command){
                case 'help':
                case 'add':
                case 'ls':
                case 'delete':
                    this[command](args);
                    break;
                default:
                    this.emit('response', 'Unknown command')
            }
        })
    }
    help(){
        this.emit('response', `Available commands:
        add
        ls
        delete`)
    }
    add(args) {
        this.emit('response', args.join("...."))
    }
    ls() {
        this.emit('response', 'ls....')
    }
    delete() {
        this.emit('response', 'delete....')
    }
}
 

module.exports = (client) => new Server(client)