const { spawn } = require('child_process')
// first we invoke a wc command in spawned process which sends 'data' event to the readable child.stdout
const child = spawn('wc')
// next we pipe redable process.stding into the writable child.stdin so at the end when we will invoke 'exit' event(by clicking ctrl+D not ctrl+C which causes interruption) the data will be passed into the wc command
process.stdin.pipe(child.stdin)
// then we say child process to log the data on 'data' event happened to the redable child.stdout
child.stdout.on('data', (data) => {
    console.log(`child process:\n ${data}`);
})