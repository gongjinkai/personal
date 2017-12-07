/**
 *
 * @param time
 * @returns {string}
 * @constructor
 */


    function FormatDate(time){
        var now = time;
        var year = now.getFullYear();
        var month = now.getMonth();
        if(month < 10) {
            month= "0"+month;
        }
        var date = now.getDate();
        if(date < 10) {
            date= "0"+date;
        }
        var hours = now.getHours();
        if(hours < 10){
            hours= "0"+hours;
        }
        var minutes = now.getMinutes();
        if(minutes < 10){
            minutes= "0"+minutes;
        }
        var seconds = now.getSeconds();
        if(seconds < 10){
            seconds= "0"+seconds;
        }
        return year+"-"+month+"-"+date+" "+hours+":"+minutes;
    }