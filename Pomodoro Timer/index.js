let focusBtn = document.getElementById('focus-btn');
let shortBreakBtn = document.getElementById('shortBreak-btn');
let longBreakBtn = document.getElementById('longBreak-btn');
let timeEl =  document.getElementById('time');
let startBtn = document.getElementById('start-btn');
let pauseBtn = document.getElementById('pause-btn');
let resetBtn = document.getElementById('reset-btn');

let currentMode
let FocusTimeLeft = 1500
let shortBreakLeft = 300
let minutes
let seconds
let interval


focusBtn.addEventListener('click', () => {
    currentMode = 'focus'

    focusBtn.style.backgroundColor = '#991b1b'
    timeEl.textContent = '25:00'
})

shortBreakBtn.addEventListener('click', () => {
    currentMode = 'shortBreak'
    shortBreakBtn.style.backgroundColor = 'green'

    timeEl.textContent = '5:00'
})

startBtn.addEventListener('click', () => {
    if (currentMode === 'focus') {
        interval = setInterval(FocusTimer, 1000)
        startBtn.style.backgroundColor = 'white'
        startBtn.style.color = 'black'
        pauseBtn.style.backgroundColor = '#6b7280'
        pauseBtn.style.color = '#e5e7eb'
    } else if(currentMode === 'shortBreak'){
        interval = setInterval(shortBreakTimer, 1000)
        startBtn.style.backgroundColor = 'white'
        startBtn.style.color = 'black'
        pauseBtn.style.backgroundColor = '#6b7280'
        pauseBtn.style.color = '#e5e7eb'
    }
})

function shortBreakTimer(){
    shortBreakLeft = shortBreakLeft - 1
    minutes = Math.floor(shortBreakLeft / 60)
    seconds = shortBreakLeft % 60
    timeEl.textContent = minutes + ':' + seconds
}

function FocusTimer(){
    FocusTimeLeft = FocusTimeLeft - 1
    minutes = Math.floor(FocusTimeLeft / 60)
    seconds = FocusTimeLeft % 60
    timeEl.textContent = minutes + ':' + seconds
}

pauseBtn.addEventListener('click', () => {
    pauseFocusTimer()
})

function pauseFocusTimer(){
    pauseBtn.style.backgroundColor = 'white'
    pauseBtn.style.color = 'black'
    startBtn.style.backgroundColor = '#6b7280'
    startBtn.style.color = '#e5e7eb'
    startBtn.textContent = 'RESUME'
    clearInterval(interval)
    interval = null
}
