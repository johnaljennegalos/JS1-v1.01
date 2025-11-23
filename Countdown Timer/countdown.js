let hourInput = document.getElementById('hour')
let minutesInput = document.getElementById('minutes')
let secondsInput = document.getElementById('seconds')
let errorMsg =  document.getElementById('error');
let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')
let containerEl = document.getElementById('container');

let currentTotalSeconds = 0
let countdownInterval;

errorMsg.style.display = "none";

function validateInput(){

    let hour = Number(hourInput.value);
    let minutes = Number(minutesInput.value);
    let seconds = Number(secondsInput.value);

    if(hour < 0){
        errorMsg.style.display = "block";
        errorMsg.textContent = "Hours cannot be negative."
        return;
    }

    if(minutes < 0 || minutes > 59){
        errorMsg.style.display = "block";
        errorMsg.textContent = "Invalid Minutes";
        minutesInput.value = ""
        return
    }

    if(seconds < 0 || seconds > 59){
        errorMsg.style.display = "block";
        errorMsg.textContent = "Invalid Seconds";
        secondsInput.value = ""
        return
    }

    let totalSeconds = convertToSeconds(hour, minutes, seconds)
    currentTotalSeconds = totalSeconds
}

function convertToSeconds(h, m, s) {
    return (h * 3600) + (m * 60) + s
}

function startCountdown(){
    countdownInterval = setInterval(() => {
        let hour = Math.floor(currentTotalSeconds / 3600)
        let minutes = Math.floor((currentTotalSeconds % 3600) / 60)
        let seconds = currentTotalSeconds % 60

        hourInput.value = hour
        minutesInput.value = minutes
        secondsInput.value = seconds

        errorMsg.style.display = "none";

        currentTotalSeconds--


        if(currentTotalSeconds < 0) {
            clearInterval(countdownInterval)
            currentTotalSeconds = 0
            errorMsg.textContent = "Time Over"
            return
        }


    }, 1000)
}

startBtn.addEventListener('click', () => {
    validateInput()
    if(currentTotalSeconds > 0){
        startCountdown()
    }
})

stopBtn.addEventListener('click', () => {
    clearInterval(countdownInterval);
})

resetBtn.addEventListener('click', () => {
    clearInterval(countdownInterval);
    countdownInterval = null
    currentTotalSeconds = 0;

    hourInput.value = ""
    minutesInput.value = ""
    secondsInput.value = ""
})


containerEl.addEventListener('keydown', (e) => {

    if(e.key === 'Enter'){
        validateInput()

        if(currentTotalSeconds > 0){
            startCountdown()
        }
    }
})
