const fs = require('fs');
const { encode } = require('punycode');

let informUs = (data) => {
    console.log(data.toString())

}

fs.createReadStream('./duplex_read.txt', {
    bufferSize: 4 * 1024
}).on('data', informUs)
    .pipe(fs.createWriteStream('./duplex_write.txt'));
    