#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      qs = require('querystring'),
      items = ['eat'],
      log = console.log;

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();

  if(req.url === '/'){
    //200 OK
    res.writeHead(200,{
      'Content-Type':'text/html',
      'Content-Length':Buffer.byteLength(getHTML(),'utf8')
    });
    res.end(getHTML());
  }else{
    //404 not found
    //
    var it = qs.parse(url.parse(req.url).query);
    if(typeof it !== 'undefined'){
      items.push(it.item);
    }
    res.end(getHTML());
  }

  res.end('OK!');

}).listen(8080);

function getHTML(){
  return '<!DOCTYPE html><head><title>Document</title></head>'
              +'<body><h1>hello</h1>'
              +'<ul>'
              +items.map(function(item){return '<li>'+item+'</li>';}).join('\n')
              +'</ul>'+'<form method="GET" action="/">'
              +'<input type="text" name="item">'+'<input type="submit" value="Submit">'+'</form>'+'</body></html>';  
}
