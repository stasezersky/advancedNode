const sl = (a,b) => {
    setTimeout(() => {
      console.log('hello i am set timeout');
    }, 0);
    setImmediate(() => {
        console.log('hello i am set immidiate');
    })
    process.nextTick(() => {
        console.log('hello I am next tick');
        
    })
}

sl(2,3)