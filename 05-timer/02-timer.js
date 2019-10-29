#!/usr/bin/node

console.log('start......');

const timeID = setInterval(loop,500);
//会创建一个内部定时器
timeID.unref();

function loop(){
  console.log('I will lppo forever!');
}

setTimeout(()=>{
  console.log('Game Over!');
},5000);
