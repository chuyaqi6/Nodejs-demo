#!/usr/bin/node

const http = require('http'),
      items = ['吃饭','睡觉'],
      log = console.log;

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();

  switch(req.method){
    case 'GET':
      select(req,res);
      break;
    case 'POST':
      insert(req,res);
      break;
    case 'PUT':
      update(req,res);
      break;
    case 'DELET':
      remove(req,res);
      break;
    default:
      err(req,res);                                                               
  }
  //res.end('ok!');
}).listen(8080);

function insert(req,res){
  var item = '';
  req.on('data',(data)=>{
    item+=data;
  });
  req.on('end',()=>{
    if(typeof item !== 'undefined'){
      items.push();
      res.end('Insert OK!');
    }else{
      res.end('Insert Error!');
    }
  });
}
function update(req,res){
  //parse url get id,validate id,type and range
  //parse req get content,validate content now blank
  //modify items, items[id]=new content
  res.end(req.method);
}
function remove(req,res){
  var id = req.url.slice(1,req.url.length);
  //validata id(验证Id):1. type 2.range
  //del items[id]
  items.splice(id,1);      
  res.end('delete ok!');
}
function err(req,res){
  res.end(req.method);
}
function select(req,res){
  var data = JSON.stringify(items);
  res.setHeader('Content-Length',Buffer.byteLength(data));
  res.setHeader('Content-Type','text/plain ; charset =utf8 ');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(data);
}
