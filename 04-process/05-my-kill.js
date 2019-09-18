#!/usr/bin/node

var pid = process.argv[2];
    sng = process.argv[3];
    if(process.argv.length !== 4 || isNaN(Number(pid))){
      console.error('命令行参数错误！');
      process.exit(1);
    }
    process.kill(pid,sgn);
