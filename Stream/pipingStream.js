const fs = require('fs');

const readableStream = fs.createReadStream('student.txt');

const writableStream = fs.createWriteStream('copy.txt');

readableStream.pipe(writableStream);

writableStream.on('finish', () => {
    console.log('File copied successfully using piping.');
});

readableStream.on('error', (err) => {
    console.log('Error:', err.message);
});

writableStream.on('error', (err) => {
    console.log('Error:', err.message);
});