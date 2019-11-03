#!/usr/bin/node
const http = require('http'),
      fs = require('fs'),
      qs   = require('querystring');

http.createServer((req,res)=>{
    var file = __dirname;
    if(req.url === '/login' && req.method === 'GET'){
        file += '/login.html';
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile(file,'utf-8',(err,data)=>{
            if(err){
                res.end('Page not found!');
            }else{
            res.end(data);
            }
        })
    }
    if(req.method === 'POST'){
        var count = 1;
        var data = '';
        req.on('data', (chunk) => { data += chunk; });
        req.on('end',()=>{
            var account = qs.parse(data);
            if(account.user === 'zhangsan' && account.password === '123') {
                count = 1;
                if(typeof req.headers['cookie'] === 'undefined'){
                    count = 1;
                }else{
                    var pair = req.headers['cookie'].split('=');
                    count = Number(pair[1]) + 1;
                }
                res.setHeader('Set-cookie', `count=${count}; max-age=10000000`);
                res.end(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Document</title></head><body><h1>${account.user}你这是第 ${count} 次访问本网站！</h1></body></html>`);
            }else{
                res.end(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Document</title></head><body><h1>用户名或密码错误</h1></body></html>`);
            }
        })
    }
}).listen(8081)