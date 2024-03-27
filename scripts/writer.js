const writerOn = new URLSearchParams(window.location.search).has('writer');
let myname = ["Kyle Evangelisto"];
let pos = 0;
let speed = !writerOn ? 85 : 35;
let fade = !writerOn ? 350 : 10;

writer = () => {
    document.getElementById("my-name").innerHTML = myname[0].substring(0, pos);

    if (pos++ != myname[0].length) {
        setTimeout(writer, speed);
    }

    if (pos == myname[0].length) {
        setTimeout(() => {
            Array.from(document.getElementsByClassName('custom-fade')).forEach(element => {
                element.style.opacity = "1";
            });
        }, fade);
    }
}

window.addEventListener("load", writer);