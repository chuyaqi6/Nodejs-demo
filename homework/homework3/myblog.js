const http = require('http'),
      url = require('url'),
      fs = require('fs'),
      path = require('path'),
      qs = require('querystring'),
      log = console.log;
      var chapterList = JSON.parse(fs.readFileSync('./js/data.js','utf8'));
      var userList = [{username: "admin", pwd: "admin"}];
var Id=0;
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');
  var file = __dirname;
  //请求文章列表页面
  if(req.url == '/list/'){
    file += '/chapterList.html';
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile(file,'utf-8',(err,data)=>{
      if(err){
        res.end('Page not found!');
      }else{
        res.end(data);
      }
    })
  }
  //请求登陆页面
  else if(req.url == '/login/'){
    var listPath = path.join(__dirname,'login.html');
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile(listPath,'utf-8',(err,data)=>{
      if(err){
        res.end('Page not found!');
      }else{
        res.end(data);
      }
    })
  }
  //阅读全文
  else if(url.parse(req.url).pathname === '/detail'){
    file += '/chapter.html';
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile(file,'utf-8',(err,data)=>{
        if(err){
            // console.error(message);
        }else{
            res.end(data);
        }
    })
  }
  else if(req.url === '/getDetail/'){
    res.writeHead(200,{'Content-Type':'text/json'});
    res.end(JSON.stringify(chapterList));
  }
  else if(req.url === '/displayDetail/'){
    var index = qs.parse(req.headers.referer.split('?')[1]).chapterId-1;
    res.writeHead(200,{'Content-Type':'text/json'});
    res.end(JSON.stringify(chapterList[index]));
  }
  //后台管理页面
  else if(url.parse(req.url).pathname === '/listmanager'){
    // console.log(req.url);
    // console.log(url.parse(req.url).pathname );
    if(url.parse(req.url,true).query.username == userList[0].username && url.parse(req.url,true).query.password == userList[0].password){
      var listPath = path.join(__dirname,'list.html');
      res.writeHead(200,{'Content-Type':'text/html'});
      fs.readFile(listPath,'utf-8',(err,data)=>{
        if(err){
          res.end('Page not found!');
        }else{
          res.end(data);
        }
      })
    }else{
      res.end('Page not found');
    }
  }
  //添加文章页面
  else if(req.url === '/addChapter/'){
    var listPath = path.join(__dirname,'addChapter.html');
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile(listPath,'utf-8',(err,data)=>{
      if(err){
        res.end('Page not found!');
      }else{
        res.end(data);
      }
    })
  }
  else if(req.url === '/display/'){
    res.write(JSON.stringify(chapterList));
    res.end();
  }
  else if(req.url === '/add'){
    var newlist = {};
    var data = '';
    req.addListener("data", function (postdata) {
      data += postdata;
      // log(qs.parse(data));
      var Data = qs.parse(data)
      var title=Data.title;
      var content=Data.content;

      newlist.chapterId = chapterList.length+1;
      newlist.chapterName = title;
      newlist.imgPath = "images/1442457564979540.jpeg";
      newlist.chapterDes = title;
      newlist.chapterContent = content;
      newlist.publishTimer = "2019-08-19";
      newlist.author = "admin";
      newlist.views = 1022;
      chapterList.push(newlist);
      process.on('SIGINT',()=>{
        fs.writeFileSync('./js/data.js',JSON.stringify(chapterList));
      })
    });
  }
  //加载css、js文件
  else if(req.url !== '/'){
    var file = __dirname;
    var listurls = req.url.split('/');
    for(var i=1;i<listurls.length;i++){
      if(listurls[i] === 'list' || listurls[i] === 'login'){
        continue;
      }
      else{
        file = file + '/'+listurls[i];
      }
    }
    fs.readFile(file, function(err, data) {
      if (err) {
        res.end('Page not found!');
      }else{
        res.writeHead(200,{'Content-type':"text/css"});
        res.end(data);
      }
    });
  }

}).listen(8083);