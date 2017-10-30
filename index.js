/*上下滚动*/
var list = document.getElementById('list');
var Prev = document.querySelector('.shangjian');
var Next = document.querySelector('.xiajian');
var left = 0;
var target = 0;
var timer = null;
Next.onclick = function  () {
    if (target <= -1200) {
        return
    } else {
        target -= 290;
    }
    sport(target);
};
Prev.onclick = function  () {
    if (target >= 0) {
        return
    } else{
        target += 290;
    }
    sport(target);
};
function sport(tar) {
    clearInterval(timer);
    timer = setInterval(autoPlay, 30);
    function autoPlay() {
        if (left == tar) {
            clearInterval(timer);
        } else {
            speed = (tar - left) / 7;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            left = left + speed;
            list.style.top = left + "px";
            console.log(list.style.top);
        }
    }
};
