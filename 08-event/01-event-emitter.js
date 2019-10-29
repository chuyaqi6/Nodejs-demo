#!/usr/bin/node

const EventEmitter = require('events').EventEmitter;

var e = new EventEmitter();

//emit属性用于触发一个事件
setInterval(function(){
  e.emit('hello');
},1000);
setTimeout(function(){
  e.emit('bye');
},5000);

//on属性用于绑定事件
e.on('hello',function(){
  console.log('hello world!');
});

e.on('bye',function(){
  console.log('goodbye!');
  process.exit();
});
