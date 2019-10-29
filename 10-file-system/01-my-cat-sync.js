#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;

//异常处理（主动防御）
if(fs.existsSync(file)){
  console.log(fs.readFileSync(file).toString('utf8'));
}else{
  console.error('%s not exist!',file);
  process.exit(1);
}
