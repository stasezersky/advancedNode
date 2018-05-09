const http = require('http')

// complicated curl request

// const req = http.request({
//     hostname: 'www.google.com'
// }, (res) => {
//     console.log(res.statusCode);
//     console.log(res.headers);
//     res.on('data', (data) => { console.log(data.toString()); })
    
// })

// req.on('error', (err) => { console.log(err); })
// req.end()

// simple curl request 

const req = http.get(
    'http://www.google.com'
    , (res) => {
    console.log(res.statusCode);
    console.log(res.headers);
    res.on('data', (data) => { console.log(data.toString()); })

})

req.on('error', (err) => { console.log(err); })

console.log(req.agent);

