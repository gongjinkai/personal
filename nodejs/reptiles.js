var http = require("http");
//服务器上的jquery
var cheerio = require('cheerio');
var fs = require('fs');
var request = request('request');
//url地址
var url = "http://www.ygdy8.net/html/gndy/dyzz/index.html";

http.get(url,function(res){
    var html = "";
    res.on('data',function(data){
        html += data;
    });
    res.on('end',function(){
        pushData(html);
    })
})



function pushData(html) {
    var $ = cheerio.load(html);
    var read = $(".co_area2>.co_content2").text().trim();
    fs.writeFile('title.txt',read,function(err){
        if(err){
            return console.error(err);
        }
        console.log("数据写入成功！");
        console.log("读取写入的数据！");
    })
    console.log(read);
}
var requestData = {"name":"张三","age":14};
request({
   url:'http://127.0.0.1/get_user',
   method:'POST',
   json:true,
   headers:{
       "content-type": "application/json"
   },
   body:JSON.stringify(requestData)
},function(req,res,body){
    if(!error && res.statusCode == 200){
        console.log(body);
    }
});