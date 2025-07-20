let [seconds, minutes, hours] = [0, 0, 0];
let display = document.querySelector(".time");
let timer = null;
const laps = document.querySelector(".lap-times");

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    display.innerHTML =
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}

document.querySelector(".start").addEventListener("click", function () {
    if (timer !== null) {
        clearInterval(timer);
        this.innerText = "▶️ Start";
        timer = null;
    } else {
        timer = setInterval(stopwatch, 1000);
        this.innerText = "⏸️ Pause";
    }
});

document.querySelector(".reset").addEventListener("click", function () {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    display.innerHTML = "00:00:00";
    document.querySelector(".start").innerText = "▶️ Start";
    timer = null;
    laps.innerHTML = "";
});

document.querySelector(".lap").addEventListener("click", function () {
    if (timer !== null) {
        const lapTime = display.innerHTML;
        const li = document.createElement("li");
        li.textContent = `📌 ${lapTime}`;
        laps.appendChild(li);
    }
});
