let focusBtn = document.getElementById('focus-btn');
let shortBreakBtn = document.getElementById('shortBreak-btn');
let longBreakBtn = document.getElementById('longBreak-btn');
let timeEl =  document.getElementById('time');
let startBtn = document.getElementById('start-btn');
let pauseBtn = document.getElementById('pause-btn');
let resetBtn = document.getElementById('reset-btn');

let currentMode
let FocusTimeLeft = 1500
let minutes
let seconds
let interval


focusBtn.addEventListener('click', () => {
    currentMode = 'focus'

    focusBtn.style.backgroundColor = '#991b1b'
    timeEl.textContent = '25:00'
})

startBtn.addEventListener('click', () => {
    if (currentMode === 'focus') {
        interval = setInterval(FocusTimer, 1000)
        startBtn.style.backgroundColor = 'white'
        startBtn.style.color = 'black'
    } else {
        alert("Select Focus Mode to start.")
    }
})

function FocusTimer(){
    FocusTimeLeft = FocusTimeLeft - 1
    minutes = Math.floor(FocusTimeLeft / 60)
    seconds = FocusTimeLeft % 60
    timeEl.textContent = minutes + ':' + seconds
}
