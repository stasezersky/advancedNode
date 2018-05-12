const cluster = require('cluster')
const os = require('os')

// mocking up a DB request that grows
const numOfUsers = () => {
    this.count = this.count || 5
    this.count = this.count * this.count
    return this.count
}


if(cluster.isMaster){
    const cpus = os.cpus().length
    console.log(`Forking for ${cpus} CPU's`);
    for (let i = 0; i < cpus; i++) {
        cluster.fork()        
    }
    const updateWorkers = () => {
        const userCount = numOfUsers()
        Object.values(cluster.workers).forEach(worker => {
        worker.send({ userCount })
        })
    }       
    updateWorkers()
    setInterval(updateWorkers, 10000 )
    
} else {
    require('./server')
}