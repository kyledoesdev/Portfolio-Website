let time = setInterval(updateTime, 1000);

function updateTime() {
    let clock = new Date();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    let ampm = "AM";

    if (hours >= 12) {
        ampm = "PM";
        hours = hours - 12;
    }

    if (hours == 0) {
        hours = 12; //avoid 00 at midnight
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("my_clock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm;
}