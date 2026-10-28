const fs = require('fs');

const readableStream = fs.createReadStream('student.txt', 'utf8');

readableStream.on('data', (chunk) => {
    console.log('Data received: ');
    console.log(chunk);
});

readableStream.on('end', () => {
    console.log('Finished reading the file. ');
});

readableStream.on('error', (err) => {
    console.log('Error: ',err.message);
});