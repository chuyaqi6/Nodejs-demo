#!/usr/bin/node

const http = require('http'),
      fs = require('fs'),
      qs = require('querystring'),
      log = console.log;

var items = [];

http.createServer((req,res)=>{
  log(req.headers);
  log('');
}).listen(8080);

function getHTML(){
  //read html file
  var html = fs.readFileSync('todo.html').toString('utf8');
  //write html file
  html = html.replace('%',items.map(function(item){return '<li>'+item+'</li>';}).join('\n'));
  //return html string
  return html;
}
