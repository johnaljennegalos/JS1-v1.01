let hourInput = document.getElementById('hour')
let minutesInput = document.getElementById('minutes')
let secondsInput = document.getElementById('seconds')
let errorMsg =  document.getElementById('error');
let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let clearBtn = document.getElementById('clear')

let currentTotalSeconds = 0

function validateInput(){

    let hour = Number(hourInput.value);
    let minutes = Number(minutesInput.value);
    let seconds = Number(secondsInput.value);

    if(hour < 0){
        errorMsg.textContent = "Hours cannot be negative."
        return;
    }

    if(minutes < 0 || minutes > 59){
        errorMsg.textContent = "Invalid Minutes";
        minutesInput.value = ""
        return
    }

    if(seconds < 0 || seconds > 59){
        errorMsg.textContent = "Invalid Seconds";
        secondsInput.value = ""
        return
    }

    let totalSeconds = convertToSeconds(hour, minutes, seconds)
    currentTotalSeconds = totalSeconds

    startCountdown()
}

function convertToSeconds(h, m, s) {
    return (h * 3600) + (m * 60) + s
}

function startCountdown(){
    let countdownInterval = setInterval(() => {
        currentTotalSeconds--


        if(currentTotalSeconds <= 0) {
            clearInterval(countdownInterval)
            currentTotalSeconds = 0
            errorMsg.textContent = "Time Over"
            return
        }

        let hour = Math.floor(currentTotalSeconds / 3600)
        let minutes = Math.floor((currentTotalSeconds % 3600) / 60)
        let seconds = currentTotalSeconds % 60

        hourInput.value = hour
        minutesInput.value = minutes
        secondsInput.value = seconds

    }, 1000)
}