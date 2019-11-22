$(document).ready(function() {
    $(document).bind("keyup", function(e) {
        if (e.key == " ") {
            lapbtn();
        }
    });
});

function updateTime() {
    centiseconds++;
    if (centiseconds == 100) {
        centiseconds = 0;
        seconds++;
    }
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    showTime();
}

function showTime() {
    if (minutes > 0){
        timeFormatted = minutes.toString() + ":" + seconds.toString() + "." + (centiseconds < 10 ? "0" + centiseconds.toString() : centiseconds.toString());
    }
    else {
        timeFormatted = seconds.toString() + "." + (centiseconds < 10 ? "0" + centiseconds.toString() : centiseconds.toString());
    }
    $("#stopwatch").text(timeFormatted);
}

var timer;
var centiseconds = 0;
var seconds = 0;
var minutes = 0;
var timeFormatted;
var encounters = 0;
function startbtn() {
    if ($("#start").text == "Start") {
        encounters = 0;
        $("#encounter").text(encounters);
    }

    if (!timer) {
        timer = setInterval(updateTime, 10);
        $("#start").text("Pause");
    }
    else {
        window.clearInterval(timer);
        $("#start").text("Resume");
    }

}
function lapbtn() {
    if (timer){
        window.clearInterval(timer);
        centiseconds = 0;
        seconds = 0;
        minutes = 0;
        showTime();
        timer = setInterval(updateTime, 10);
        encounters++;
        $("#encounter").text(encounters);
    }
}
function stopbtn() {
    if (timer){
        window.clearInterval(timer);
        timer = null;
        centiseconds = 0;
        seconds = 0;
        minutes = 0;
        showTime()
        $("#start").text("Start");
        encounters = 0;
        $("#encounter").text(encounters);
    }
}