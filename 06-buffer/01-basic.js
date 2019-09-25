#!/usr/bin/node

const log = console.log;
//初始化方法1
var buf1 = new Buffer(256);
log('buf1 length',buf1.length);
log('buf1',buf1);
//初始化第一个字节
buf1[0] = 0x11;//十六进制

//循环初始化
for(var i = 0;i<buf1.length;i++){
  buf1[i] = i;
}
log('buf1',buf1);

//buf1.fill(0,0,256);
//buf1切片操作
var buf2 = buf1.slice(246,256);
log('buf2',buf2);
log('buf2 length:',buf2.length);
log('buf2 JSON:',buf2.toJSON());
log('buf2 JSON:',JSON.stringify(buf2));

// fill(填充数，开始下标，结束下标)
//buf2填充操作
buf2.fill(0,0,10);
log('buf2',buf2);

//初始化方法2 数组初始化buf3
var arr = ['a',0xba,0x00,255,10,'cdf'];
var buf3 = new Buffer(arr);
log('buf3',buf3);
log('buf3 length:',buf3.length);

//初始化方法3 字符串初始化buf4
var buf4 = new Buffer('hello word!');
log('buf4',buf4);
log('buf4 length:',buf4.length);

//拷贝方法  4拷贝给3
buf4.copy(buf3,0,0,buf3.length);
log('buf3',buf3);
log('buf3 length:',buf3.length);

//长度问题
//var str = '你好 abcd';
//var buf5 = new buffer(str);
//log('buf5.length',buf5.length);
//log('str.length',str.length);
