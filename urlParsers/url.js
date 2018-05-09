const url = require('url')

const address = 'https://www.facebook.com/stash.asd?isKing=true#blahblah'

let parse = url.parse(address)
console.log(parse);


let parsedWithWueryObj = url.parse(address, true)
console.log(parsedWithWueryObj);
// console.log(parsedWithWueryObj.query.isKing);

let formated  = url.format({
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.facebook.com',
    port: null,
    hostname: 'www.facebook.com',
    hash: '#blahblah',
    search: '?isKing=true',
    query: 'isKing=true',
    pathname: '/stash.asd',
    path: '/stash.asd?isKing=true'
    // href: 'https://www.facebook.com/stash.asd?isKing=true#blahblah'
})


console.log(formated);
