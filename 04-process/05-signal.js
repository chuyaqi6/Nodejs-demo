#!/usr/bin/node

process.on('SIGINT',()=>{
  console.log('you press ctrl+C or kill -2');
  process.exit();
});
process.on('SIGINT',()=>{
  console.log('you press ctrl+Z');
  process.exit();
});
//未在后台运行的情况下，kill进程
process.stdin.resume();
