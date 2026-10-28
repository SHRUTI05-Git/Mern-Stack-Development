const { Transform } = require('stream');

const upperCaseStream = new Transform({
    transform(chunk, encoding, callback) {
        const result = chunk.toString().toUpperCase();
        callback(null, result);
    }
});

upperCaseStream.on('data', (chunk) => {
    console.log('Output:', chunk.toString());
});

upperCaseStream.write('hello node.js');
upperCaseStream.write('this is a transform stream');
upperCaseStream.end();