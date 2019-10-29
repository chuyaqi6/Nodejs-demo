#!/usr/bin/node

/*
 *  * console.log(process.argv.length);
 *  console.log(process.argv);*/

var fn = process.argv[2];

if(typeof(fn) === 'undefined' || fn === '-h' || fn === '--help' ){
  console.log('请输入少于3个的参数！');
}else{
  console.log(fn,'=',eval(fn));
}

