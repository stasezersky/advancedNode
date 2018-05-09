const qParser = require('querystring');

let parsed = qParser.parse('?isKing=true')

console.log(parsed);

let obj = {
    name: 'johny',
    lname: 'cash'
}

console.log(qParser.stringify(obj))
