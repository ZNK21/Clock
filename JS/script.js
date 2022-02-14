
$(function(){
    displayTime();
});
function zero(z) {
    if (z < 10) { z = "0" + z }
    return z;
}

function displayTime(){
    var time = new Date()
    var h = zero(time.getHours());
    var m = zero(time.getMinutes());
    var s = zero(time.getSeconds());
    var displayed = h + ":" + m + ":" + s;
    $(".display").text(displayed);
    setTimeout(() =>{displayTime();}, 1000)
}