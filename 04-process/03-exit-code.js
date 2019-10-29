#!/usr/bin/node

var n = process.argv[2];
if(typeof(n)==='undefined'){
  console.error('命令行参数不正确！');
  process.exit(1);
}else{
  console.log('退出码：',n);
  process.exit(n);
}
