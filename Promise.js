//传统ajax
var url = "http://127.0.0.1:8089";
var url1 = "http://127.0.0.1:8089/get_data";
var result,
    result1;
var xhr = new XMLHttpRequest();
xhr.open('get',url,true);
xhr.send();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.readstatus == 200){ //success
        result = xhr.response;
        console.log(result);
        //成功之后嵌套继续请求ajax
        //var xhr1 = new XMLHttpRequest();
        //xhr............
        //..........
        if(xhr.readyState == 4 && xhr.readstatus == 200){
            //然后再去请求ajax造成函数嵌套复杂
        }
    }
};


//用promise来处理ajax请求

function getData(url){
    return new Promise((resolve,reject) =>{
        var xhr = new XMLHttpRequest();
    xhr.open('get',url,true);
    xhr.onreadystatechange = function (){
        if(this.readyState == 4 && this.readystatus == 200){
            resolve(JSON.parse(responseText),this)
        }else{
            var resJson = { code: this.status, response: this.response };
            reject(resJson, this)
        }
    };
    xhr.send();
    })
}
getData(url)
    .then((res)=>{
    console.log(res);
})







