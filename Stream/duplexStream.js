const { Duplex } = require('stream');

const duplexStream = new Duplex({
    read(size) {
        this.push('Data from readable side\n');
        this.push(null);
    },

    write(chunk, encoding, callback) {
        console.log('Data received:', chunk.toString());
        callback();
    }
});

duplexStream.on('data', (chunk) => {
    console.log('Reading:', chunk.toString());
});

duplexStream.write('Data sent to writable side');

duplexStream.end();