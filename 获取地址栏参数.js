 function parseUrl(url){
        var obj = {};
        var keyvalue = [];
        var key = "";
        var value = "";
        var parseString = url.substring(url.indexOf("?")+1,url.length).split("&");
        for(var i in parseString){
            keyvalue = parseString[i].split("=");
            key = keyvalue[0];
            value = keyvalue[1];
            obj[key] = value
        }
        return obj;
    }