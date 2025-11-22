let hourInput = document.getElementById('hour')
let minutesInput = document.getElementById('minutes')
let secondsInput = document.getElementById('seconds')
let errorMsg =  document.getElementById('error');
let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let clearBtn = document.getElementById('clear')

let hour = Number(hourInput.value);
let minutes = Number(minutesInput.value);
let seconds = Number(secondsInput.value);

function validateInput(){

    if(hour < 0){
        return;
    }

    if(minutes < 0 || minutes > 60){
        errorMsg.textContent = "Invalid Minutes";
        minutesInput.value = ""
    }

    if(seconds < 0 || seconds > 60){
        errorMsg.textContent = "Invalid Seconds";
        secondsInput.value = ""
    }
}

function convertToSeconds() {
    let totalSeconds =
}

startBtn.addEventListener('click', validateInput);