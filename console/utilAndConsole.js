
// console.log example - uses util.format under the hood
console.log('one %s', 'thing');


// util.format example - used by the console log to format the string
console.log(require('util').format('one %s', 'thing'))

// uses utile.inspect to format the object as a string
console.log(require('util').inspect(module));

// util.inspect has "options" argument which placed as second arg - we can used it for depth of object - here is example of first depth (the outcome is the same but it is usable in other objects):
console.log(require('util').inspect(module), { depth: 0 } );

// if we wanna do same thing with "console." - we can use console.dir:
console.dir(module, { depth: 0})

// console.info = console.log
console.info('hello world')

// console.error same as console.log but writes to error ouput - need to feed it with new Error() so it print the stacktrace
// console.error(new Error('blah errro'))

//console.warn = console.error
// console.warn(new Error('blah errro'))

//console.assert writes Assertion Error to the console if equals false - but does nothing if equals true:
// console.assert(3 === '3')

//console.trace throws call stack of the place where the function was triggered:
console.trace('hellow')

//console.time and console.timeEnd is stat and stop timer which should get a unique same label
console.time("hi")
console.timeEnd("hi")

// utile.inherit was used before ES6 to inherit from father classes but ES6 has the "extends" keyword so it looks like java now: 
// util.inherit example:

// const EventEmitter = require('events');
// function CustomEmitter (){}
// const util = require('util')
// util.inherits(CustomEmitter, EventEmitter)
// CustomEmitter.prototype.write = function (data) {
//     this.emit('data', data)
// }

// new ES6 way of util.inherit: 

// const EventEmitter = require('events');
// class CustomEmitter extends EventEmitter {
//     constructor(){
//         super()
//     }
//     write(data){
//         this.emit('data', data)
//     }
// }
// instanciation of CustoEmmitter
// const stream = new CustomEmitter()
