#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;

if(fs.existsSync(file)){
  var source = fs.createReadStream(file);

  source.pipe(process.stdout);
}else{
  console.error('%s is not exist!',file);
  process.exit();
}

//事件捕获异常
//source.on('error',function(err){
//  console.error(err.message);
//})
