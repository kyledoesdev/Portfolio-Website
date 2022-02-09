let myname = ["Kyle Evangelisto"];
let pos = 0;
let speed = 85;

writer = () => {
  document.getElementById("my-name").innerHTML = myname[0].substring(0, pos);

  if (pos++ != myname[0].length) {
    setTimeout(writer, speed);
  }
}

window.addEventListener("load", writer);