#!/usr/bin/node

const fs   = require('fs'),
      file = process.argv[2] || __filename;

try{
  fs.readFile(file,function(err,data){
    if(err){
      console.error(err.message);
      process.exit(1);
    }else{
      console.log(data.toString('utf8'));
    }
  });
}catch(e){
  console.error(e.message);
  process.exit(1);
}
