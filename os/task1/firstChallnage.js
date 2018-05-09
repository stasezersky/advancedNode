const fs = require('fs')
const path = require('path')
const dir = path.join(__dirname,'files')

const files = fs.readdirSync(dir)

files.forEach(file => {
    let filePath = path.join(dir, file)
    fs.stat(filePath, (err,stats) => {
        if (err) throw err;

        fs.truncate(filePath, stats.size/2, (err) => {
            if (err) throw err;
        })
    })
});