#!/usr/bin/node

const fs = require('fs');
// opt = process.argv[2],
// src = process.argv[3],
// lnk = process.argv[4];

switch(process.argv.length){
  case 4://hard link
    var src = process.argv[2],
        lnk = process.argv[3];
    
    fs.linkSync(src,lnk);
    break;
  case 5://soft link
    var opt = process.argv[2],
        src1 = process.argv[3],
        lnk2 = process.argv[4];
    if(opt !== '-s')errMsg();
    fs.symlinkSync(src1,lnk2);
    break;
  default://error
    errMsg();
}

function errMsg(){
  console.log('ERR:命令行语法错误！');
}

