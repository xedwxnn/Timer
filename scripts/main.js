let hoursValueEl = document.getElementById("hoursValue");
let minutesValueEl = document.getElementById("minutesValue");
let secondsValueEl = document.getElementById("secondsValue");

let hoursFormatted = parseInt(hoursValueEl.innerText);
let minutesFormatted = parseInt(minutesValueEl.innerText);
let secondsFormatted = parseInt(secondsValueEl.innerText);

let timerInterval;
let isRunning = false;

let alertSound = new Audio('../assets/audios/alarma.mp3');

function moreTimeH() {
    hoursFormatted++;
    hoursValueEl.innerText = hoursFormatted.toString().padStart(2, '0');
}

function lessTimeH() {
    if(hoursFormatted > 0) {
        hoursFormatted--;
        hoursValueEl.innerText = hoursFormatted.toString().padStart(2, '0');
    }
}

function moreTimeM() {
    minutesFormatted++;
    minutesValueEl.innerText = minutesFormatted.toString().padStart(2, '0');
}

function lessTimeM() {
    if(minutesFormatted > 0) {
        minutesFormatted--;
        minutesValueEl.innerText = minutesFormatted.toString().padStart(2, '0');
    }
}

function moreTimeS() {
    secondsFormatted++;
    secondsValueEl.innerText = secondsFormatted.toString().padStart(2, '0');
}

function lessTimeS() {
    if(secondsFormatted > 0) {
        secondsFormatted--;
        secondsValueEl.innerText = secondsFormatted.toString().padStart(2, '0');
    }
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            if (hoursFormatted > 0 || minutesFormatted > 0 || secondsFormatted > 0) {
                secondsFormatted--;
                
                if (secondsFormatted < 0) {
                    secondsFormatted = 59;
                    minutesFormatted--;
                }

                if (minutesFormatted < 0) {
                    minutesFormatted = 59;
                    hoursFormatted--;
                }

                hoursValueEl.innerText = hoursFormatted.toString().padStart(2, '0');
                minutesValueEl.innerText = minutesFormatted.toString().padStart(2, '0');
                secondsValueEl.innerText = secondsFormatted.toString().padStart(2, '0');
            }
            
            else {
                clearInterval(timerInterval);
                isRunning = false;
                alertSound.play();
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
}

function clearTimer() {
    hoursFormatted = 0;
    minutesFormatted = 0;
    secondsFormatted = 0;

    hoursValueEl.innerText = hoursFormatted.toString().padStart(2, '0');
    minutesValueEl.innerText = minutesFormatted.toString().padStart(2, '0');
    secondsValueEl.innerText = secondsFormatted.toString().padStart(2, '0');
    
    pauseTimer();
}