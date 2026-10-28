const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello from Node.js\n');
writableStream.write('This is a writable stream program.\n');
writableStream.write('Data is written into the file.\n');

writableStream.end();

writableStream.on('finish', () => {
    console.log('Data written successfully.');
});

writableStream.on('error', (err) => {
    console.log('Error:', err.message);
});