const displayTime = document.getElementById("timeDisplay");
let Timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function timeStart() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        Timer = setInterval(Update, 10); 
        isRunning = true;
    }
}

function timeStop() {
    if (isRunning) {
        clearInterval(Timer);
        elapsedTime = Date.now() - startTime; 
        isRunning = false;
    }
}

function timeReset() {
    clearInterval(Timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    displayTime.textContent = "00:00:00:00"; 
}

function Update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hrs = Math.floor(elapsedTime / (1000 * 60 * 60));
    let min = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let sec = Math.floor((elapsedTime / 1000) % 60);
    let mil = Math.floor((elapsedTime % 1000) / 10);

    hrs = String(hrs).padStart(2, "0");
    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    mil = String(mil).padStart(2, "0");

    displayTime.textContent = `${hrs}:${min}:${sec}:${mil}`;
}
