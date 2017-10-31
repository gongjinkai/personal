    function Mathmethods () {
        //加
        this.add = function (a,b) {
            var num = a + b;
            console.log(num);
        }
        //减
        this.reduce = function (a,b) {
            var num = a - b;
            console.log(num);
        }
        //乘
        this.ride = function (a,b) {
            var num = a * b;
        }
        //除
        this.except = function (a,b) {
            var num = a / b;
        }
    }

    var a = new Mathmethods(); //实例化对象
    a.reduce(9,7)              //调用方法