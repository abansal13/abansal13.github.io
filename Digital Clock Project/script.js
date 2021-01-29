window.onload = function() {
    setInterval(updateTime, 1000);
}

function updateTime() {
    const hourEL = document.querySelector("#hour");
    const minuteEL = document.querySelector("#minute");
    const secondEL = document.querySelector("#second");
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (hours >= 0 && hours <= 9) hours = "0" + hours;
    if (minutes >= 0 && minutes <= 9) minutes = "0" + minutes;
    if (seconds >= 0 && seconds <= 9) seconds = "0" + seconds;
    hourEL.innerHTML = hours;
    minuteEL.innerHTML = minutes;
    secondEL.innerHTML = seconds;
}