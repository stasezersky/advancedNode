const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf-8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk!=null) {
        const buffer = Buffer.from([chunk]);
        console.log('toString ', buffer.toString() );
        console.log('decoder', decoder.write(buffer));        
    }
})