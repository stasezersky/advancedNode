// we can pipe stdin, stdout, stderr of multiple processes into eachother

const { spawn } = require('child_process')

const findP = spawn('find', ['.', '-type', 'f'])
const wcP = spawn('wc',['-l'])

findP.stdout.pipe(wcP.stdin)

wcP.stdout.on('data', (data) => {
    console.log(`wc child process:\n${data}`);
    
})


