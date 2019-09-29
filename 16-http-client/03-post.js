#!/usr/bin/node

const url = require('url'),
      addr = 'http://localhost:8080',
      http = require('http'),
      msg = process.argv[2];

var option = url.parse(addr);
option.method = 'POST';

var req = http.request(option,function(res){
  //打印开始
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  //打印响应头
  console.log(res.headers);
  console.log('');
  //打印响应体
  res.pipe(process.stdout);
});
req.end(msg);
