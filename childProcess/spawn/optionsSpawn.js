const { spawn } = require('child_process')
// the spawn can also inherit the stdio of its parrent process when passing  third arg like that:
// in that case we don't need to tell it console.log - it willknow to use th console of the parrent
// const child = spawn('find', ['.', '-type', 'f'], {
//     stdio: 'inherit'
// })

// we can also use the shell and write full commands like in exec but without buffering the data and its done the followin way:
// const child = spawn('find . -type f', {
//     stdio: 'inherit',
//     shell: true
// })

// we can use cwd option to change working dir of the script:
// const child = spawn('find . -type f', {
//     stdio: 'inherit',
//     shell: true, 
//     cwd: '/Users/stasezersky/Documents/nodeApp/advancedNode/childProcess/'
// })

// we can change the working env - by default it is set to the env of the parrent process but we can remove it:
// const child = spawn('echo $HOME', {
//     stdio: 'inherit',
//     shell: true,
//     cwd: '/Users/stasezersky/Documents/nodeApp/advancedNode/childProcess/',
//     env: {}
// })

// we can set env variables the following way:
// const child = spawn('echo $HOME', {
//     stdio: 'inherit',
//     shell: true,
//     cwd: '/Users/stasezersky/Documents/nodeApp/advancedNode/childProcess/',
//     env: { HOME: 32 }
// })

// we can also detach a process from its parent and make him be the leader of a new process group
const child = spawn('node', ['timer.js'],{
    detached: true,
    // the stdio must be also independent of the parrent to keep the child process running
    stdio: 'ignore'
})
// if the unref method called - the parrent proces can exit indepndently of the child
child.unref()