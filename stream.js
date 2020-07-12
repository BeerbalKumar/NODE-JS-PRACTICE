const fs = require("fs");

const readStream = fs.createReadStream('./file2.txt',{encoding:"utf8"});

readStream.on('data',(chunk)=>{
    console.log('________new Chunk_________');
    console.log(chunk);
})