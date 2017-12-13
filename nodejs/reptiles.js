var http = require("http");
var cheerio = require('cheerio');
var fs = require('fs');
var iconv = require('iconv-lite');
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
        console.log("--------我是分割线-------------")
        console.log("读取写入的数据！");
    })
    console.log(read);
}