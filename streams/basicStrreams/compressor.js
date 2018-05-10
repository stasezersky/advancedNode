// there is also an example of how to use crypto module to encrypt files while zipping them and decrypt them too 
// check out module 8.4
const fs =require('fs')
const zlib = require('zlib')
const file = process.argv[2]
// example of using both pipes and events 
fs.createReadStream(file)
    .pipe(zlib.createGzip())
    // progress indicator
    .on('data', ()=>{ console.log('.');
    })
    .pipe(fs.createWriteStream(file + '.gz'))
    // finish indicator
    .on('finish', () => { console.log('Done');
    })
