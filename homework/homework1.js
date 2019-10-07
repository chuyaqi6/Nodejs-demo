#!/usr/bin/node

const fs = require('fs'),
      par = process.argv[2],
      log = console.log;

const files = fs.readdirSync('./');
if(par === 'list'){
  log('[');
  for(var i=0;i<files.length;i++){
    log('{'+'"fileName":'+'"'+files[i]+'",'+'"fileSize":'+'"'+fs.statSync('./'+files[i]).size+'"'+'}');
  }
  log(']');
}else if(par === 'mkdir'){
  fs.exists('folder',function(exists){
    if(exists){
      log('该文件已存在！');            
    }
    else{
      fs.mkdirSync('folder');
    }
  })
}else{
  console.log('命令行参数错误！');
}
