const year = 31536000;
const month = 2592000;
const week = 604800;
const day = 86400;
const hour = 3600;
const minute = 60;

var count;
count = setInterval(countDown, 1000);

function countDown () {
    const countdownDate = Math.floor(new Date("May 20, 2022 00:00:00").getTime() / 1000);
    const now = Math.floor(Date.now() / 1000); 
    let gap = countdownDate - now;
    let finalTime = '';

    if (gap >= year) {
        years = Math.floor(gap / year);
        if (years < 10) {
            finalTime = '0' + years + ' year' + (years == 1 ? '' : 's') + ', ';
        } else {
            finalTime = years + ' year' + (years == 1 ? '' : 's') + ', ';
        }
        gap = gap % year;
    }

    if (gap > month) {
        months = Math.floor(gap / month);
        if (months < 10) {
            finalTime += '0' + months + ' month' + (months == 1 ? '' : 's') + ', ';
        } else {
            finalTime += months + ' month' + (months == 1 ? '' : 's') + ', ';
        }
        gap = gap % month;
    }

    if (gap > week) {
        weeks = Math.floor(gap / week);
        if (weeks < 10) {
            finalTime += '0' + weeks + ' week' + (weeks == 1 ? '' : 's') + ', ';
        } else {
            finalTime += weeks + ' week' + (weeks == 1 ? '' : 's') + ', ';
        }
        gap = gap % week;
    }

    if (gap > day) {
        days = Math.floor(gap / day);
        if (days < 10) {
            finalTime += '0' + days + ' day' + (days == 1 ? '' : 's') + ', ';
        } else {
            finalTime += days + ' day' + (days == 1 ? '' : 's') + ', ';
        }
        gap = gap % day;
    }

    if (gap > hour) {
        hours = Math.floor(gap / hour);
        if (hours < 10) {
            finalTime += '0' + hours + ' hour' + (hours == 1 ? '' : 's') + ', ';
        } else {
            finalTime += hours + ' hour' + (hours == 1 ? '' : 's') + ', ';
        }
        gap = gap % hour;
    }

    if (gap > minute) {
        minutes = Math.floor(gap / minute);
        if (minute < 10) {
            finalTime += '0' + minutes + ' minute' + (minutes == 1 ? '' : 's') + ', ';
        } else {
            finalTime += minutes + ' minute' + (minutes == 1 ? '' : 's') + ', ';
        }
        gap = gap % minute;
    }

    if (gap > 0) {
        if (gap < 10) {
            finalTime += '0' + gap + ' second' + (gap == 1 ? '' : 's') + '';
        } else {
            finalTime += gap + ' second' + (gap == 1 ? '' : 's') + '';
        }
    }
    
    document.getElementById("graduation").innerHTML = finalTime; 
}