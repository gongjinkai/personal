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
          //localStorage本地存储
    var students = {
        xiaowang: {
            name: "xiaowang",
            age: 15
        },
        xiaohong: {
            name: "xiaohong",
            age: 28
        }
    };
    students = JSON.stringify(students);
    console.log(students);
    localStorage.setItem("students",students); //将变量存到localStorage里

    var newStudents = localStorage.getItem("students");
    newStudents = JSON.parse(newStudents);
    console.log(newStudents);