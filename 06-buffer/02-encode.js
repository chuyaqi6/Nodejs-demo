#!/usr/bin/node

//基本身份验证
const log = console.log,
      usr = process.argv[2],
      pwd = process.argv[3];

if(process.argv.length !== 4){
  console.error('命令行参数的格式：cmd user_name password');
  process.exit(1);
}
log('usr:%s,pwd:%s',usr,pwd);
        
var str = usr + ':'+pwd;
var buf = new Buffer(str);
log('base64:%s',buf.toString('base64'));
