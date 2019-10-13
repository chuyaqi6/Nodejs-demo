#!/usr/bin/node

console.log('I am child process.PID:',process.pid);

process.on('message',(msg)=>{
  console.log('msg from father:',msg);
});

process.send('Hello! I am child process.PID:'+process.pid);
