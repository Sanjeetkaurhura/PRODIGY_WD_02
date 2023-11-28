let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        document.getElementById("startStopBtn").innerText = "Start";
    } else {
        interval = setInterval(updateTime, 1000);
        document.getElementById("startStopBtn").innerText = "Stop";
    }
    isRunning = !isRunning;
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.querySelector(".display");
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("startStopBtn").innerText = "Start";
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}