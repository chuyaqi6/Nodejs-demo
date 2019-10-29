#!/usr/bin/node

const http = require('http'),
      fs   = require('fs');

http.createServer((req,res)=>{
  if(req.url == '/favicon.icn') return ;
  var fileName = __dirname + req.url;
  console.log(fileName);
  fs.createReadStream(fileName).pipe(res);
  /*
  res.end(fs.readFileSync(fileName).toString('utf8'));
  */
}).listen(8080);
