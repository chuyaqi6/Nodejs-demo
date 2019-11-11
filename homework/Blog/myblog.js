const express=require('express'),
      app=express(),
      url=require('url'),
      fs = require('fs');

app.use(express.static(__dirname));
var user,chapterList;
var file=__dirname;         
app.get('/login',(req,res)=> { 
  file+='/login.html'; 
  res.writeHead(200,{'Content-Type':'text/html'});
  fs.readFile(file,'utf-8',(err,data)=>{
    if(err){
      console.log(err);
    }
    else{
      res.end(data);
    }
  });  
});
fs.readFile(file+'/data.json',function(err,data){
  if(err){
    return console.error(err);
  }
  var datas = data.toString();
  datas = JSON.parse(datas);
  users=datas.users;
  chapterList=datas.chapterList;
})
app.get('/data',(req,res)=>{
  res.write(JSON.stringify(chapterList));
  res.end();
});
app.get('/list',(req,res)=>{
  let URL=url.parse(req.url,true);
  let username=URL.query.username;
  let pwd=URL.query.pwd;
  for(var i=0;i<users.length;i++){
    if(username===users[i].username&&pwd===users[i].password){
      file = __dirname + '/list.html';
      res.writeHead(200,{'Content-Type':'text/html'});
      fs.readFile(file,'utf-8',(err,data)=>{
        if(err){
          console.log(err);
        }
        else{
          res.end(data);
        }
      });
    }
    else{
      res.send('用户名或密码错误');
    }
  }    
}); 
app.listen('8080');
