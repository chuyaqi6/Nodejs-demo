#!/usr/bin/node

const fs = require('fs'),
      src = process.argv[2],
      dst = process.argv[3];

//src.pipe(dst)
//src:创建可读流
//dst:创建可写流
fs.createReadStream(src).pipe(fs.createWriteStream(dst));
