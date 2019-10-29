#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2],
      log = console.log;
if(process.argv.length !== 3) {
  console.error('命令行参数格式：cmd fileName');
  process.exit(1);
}
var buf = fs.readFileSync(file);
if(buf.toString('ascii',0,2) === 'BM'){
  log('width',buf.readInt32LE(0x12));
  log('height',buf.readInt32LE(0x16));
  log('deepth',buf.readUInt16LE(0x1c));
}
