#!/usr/bin/node

const http = require('http'),
      path = require('path'),
      fs = require('fs'),
      log = console.log;

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');
  
  res.write('<h1>你好</h1>');
  res.end();
  /*
  var file = __dirname + req.url;

  fs.readFile(file, (err, data) => {
    if(err) {
      log(err.message);
      res.statusCode = 404;
      res.end(err.message);                         
    }else {
      res.end(data);                  
    }   
  });*/
}).listen(8083);
