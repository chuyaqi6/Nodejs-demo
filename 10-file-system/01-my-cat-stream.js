#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;

var source = fs.createReadStream(file);

source.pipe(process.stdout);

//事件捕获异常
source.on('error',function(err){
  console.error(err.message);
})
