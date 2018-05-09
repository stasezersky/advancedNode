const dns = require('dns')

// lookup of ip adderesses using the libuv and not the network
// dns.lookup('pluralsight.com', (err, data) => {
//     console.log(data);
    
// })

//resolving ip addresses with the network methods and also gives you option to indicate which records you want A, MX ?
// dns.resolve('google.com', 'A' ,(err, data) => {
//     console.log(data);

// })


// reverses ip address to tthe http address
dns.reverse('54.213.172.37', (err, data) => {
    console.log(data);
    
})