const cluster = require('cluster')
const os = require('os')


if (cluster.isMaster) {
    const cpus = os.cpus().length
    console.log(`Forking for ${cpus} CPU's`);
    for (let i = 0; i < cpus; i++) {
        cluster.fork()
    }
    console.log(`Master is running on pid: ${process.pid}`);
    
    // this one restarts the slave if it crushed
    cluster.on('exit', (worker, code, signal) => {
        if(code !== 0 && !worker.exitedAfterDisconnect){
            console.log(`Worker ${worker.id} crashed. ` + `
            Starting a new worker...`);
            cluster.fork()
        }
    })
    // the SIGUSR2 is POSIX signal that sent to a process with the following terminal command: 
    // kill -SIGUSR2 <PID>
    // we will not use SIGUSR1 because node sends it to the debugger process and we want to avoid mistakes
    process.on('SIGUSR2', () => {
        const workers = Object.values(cluster.workers)
        const restartWorkers = (workerIndex) => {
            const worker = workers[workerIndex]
            if (!worker) return
            worker.on('exit', () => {
                if (!worker.exitedAfterDisconnect) return
                console.log(`Restarting worker: ${worker.process.pid}`);
                cluster.fork().on('listening', () => {
                    restartWorkers(workerIndex + 1)
                })
            })
            worker.disconnect();
        }
        restartWorkers(0)
    })
} else {
    require('./server')
}