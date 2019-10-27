#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      path = require('path'),
      qs = require('querystring'),
      fs = require('fs'),
      log = console.log;

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  req.pipe(process.stdout);
  if(req.method === 'GET' && req.url === '/list/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    //res.end(fs.readFileSync('./chapterList.html').toString('utf8'));
    var data = fs.readFileSync('./chapterList.html').toString('utf8');
    res.end(data);
  }else{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Resource not found!');
  }
}).listen(8080);
