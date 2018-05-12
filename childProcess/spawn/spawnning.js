// spawn method lunches a command in a new process - usually linux shell command - we can pass the linux command in the args

const { spawn } = require('child_process')

// the result here is a child process instance which implements eventEmmiter Api
const child = spawn('pwd')

// we can pass also arguments to the linux command as an array to the second argument of the spawn:
// const child = spawn('find', ['.', '-type', 'f'])

// in case error has occured - we will get exit code 1
// const child = spawn('find', ['asdad', '-type', 'f'])

// the spawn can also inherit the stdio of its parrent process when passing  third arg like that:
// in that case we don't need to tell it console.log - it willknow to use th console of the parrent
// const child = spawn('find', ['.', '-type', 'f'], {
//     stdio: 'inherit'
// })


// here we implement on-exit to the process and if it exited normaly the code will be 0 and signall will be null
child.on('exit', (code, signal) => {
    console.log(`child process exit with code: ${code}, signal: ${signal}`);
})

child.stdout.on('data', (data) => {
    console.log(`child process stdout:\n ${data}`);
    
})

child.stderr.on('data', (data) => {
    console.log(`child process stderr: ${data}`);

})
// other child process events: disconnect, error, message, close
// disconnect - called when parent calls manually the child.disconnect method which disconnects the child (and kills it?)
// error - when process can't be spawned or killed
// message - when child process uses process.send method - parent and child processes communicate with that 
// close - when standart i/o processes of a child get closed

// every child process has three i/o  streams: child.stdin, child.stdout, child.stderr - when these streams get closed the child triggers 'close' event
// meaning that if a stream gets closed the child send closed, but if child send exits event - the stream may still be opened because used by other process 

// #### in child process - stdin is a writable stream , and stdout and stderr are readable - which is inverse of what happens in normal process 
// the events we can listen to on these streams are regulat : for stdout and stderr - we have 'data' event which gets data input 
