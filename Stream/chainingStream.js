const fs = require('fs');
const { Transform } = require('stream');

const readableStream = fs.createReadStream('student.txt', 'utf8');

const upperCaseStream = new Transform({
    transform(chunk, encoding, callback) {
        const result = chunk.toString().toUpperCase();
        callback(null, result);
    }
});

const writableStream = fs.createWriteStream('output.txt');

readableStream
    .pipe(upperCaseStream)
    .pipe(writableStream);

writableStream.on('finish', () => {
    console.log('Stream chaining completed successfully.');
});