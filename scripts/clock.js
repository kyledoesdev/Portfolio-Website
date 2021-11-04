var time;

time = setInterval(updateTime, 1000);

function updateTime() {
  var clock = new Date();
  clock.setHours(clock.getUTCHours() - 4); //-4 for EST (Philadelphia)
  var hours = clock.getHours();
  var minutes = clock.getMinutes();
  var seconds = clock.getSeconds();
  var ampm = "AM";

  if (hours > 12) {
    ampm = "PM";
    hours = hours - 12;
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