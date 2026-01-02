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
let longBreakLeft = 600
let minutes
let seconds
let interval


focusBtn.addEventListener('click', () => {
    currentMode = 'focus'

    // focusBtn.style.backgroundColor = '#991b1b'
    timeEl.textContent = '25:00'
    FocusTimeLeft = 1500

    pauseBtn.disabled = true

    // shortBreakBtn.disabled = true
    // longBreakBtn.disabled = true
    // focusBtn.disabled = true
})

shortBreakBtn.addEventListener('click', () => {
    currentMode = 'shortBreak'
    // shortBreakBtn.style.backgroundColor = 'green'

    timeEl.textContent = '5:00'
    shortBreakLeft = 300

    pauseBtn.disabled = true
    // focusBtn.disabled = true
    // longBreakBtn.disabled = true
    // shortBreakBtn.disabled = true
})

longBreakBtn.addEventListener('click', () => {
    currentMode = 'longBreak'
    // longBreakBtn.style.backgroundColor = 'red'
    timeEl.textContent = '10:00'
    longBreakLeft = 300

    pauseBtn.disabled = true
    // focusBtn.disabled = true
    // shortBreakBtn.disabled = true
    // longBreakBtn.disabled = true
})

startBtn.addEventListener('click', () => {
    if (currentMode === 'focus') {
        if(!interval) {
            interval = setInterval(FocusTimer, 1000)
            focusBtn.style.backgroundColor = '#991b1b'
            startBtn.style.backgroundColor = 'white'
            startBtn.style.color = 'black'
            pauseBtn.style.backgroundColor = '#6b7280'
            pauseBtn.style.color = '#e5e7eb'
            shortBreakBtn.disabled = true
            longBreakBtn.disabled = true

            focusBtn.disabled = true
            pauseBtn.disabled = false

        }
    } else if(currentMode === 'shortBreak'){
        if(!interval){
            interval = setInterval(shortBreakTimer, 1000)
            shortBreakBtn.style.backgroundColor = 'green'
            startBtn.style.backgroundColor = 'white'
            startBtn.style.color = 'black'
            pauseBtn.style.backgroundColor = '#6b7280'
            pauseBtn.style.color = '#e5e7eb'
            focusBtn.disabled = true
            longBreakBtn.disabled = true

            pauseBtn.disabled = false
            shortBreakBtn.disabled = true
        }
    } else if(currentMode === 'longBreak'){
        if(!interval){
            interval = setInterval(longBreakTimer, 1000)
            longBreakBtn.style.backgroundColor = 'red'
            startBtn.style.backgroundColor = 'white'
            startBtn.style.color = 'black'
            pauseBtn.style.backgroundColor = '#6b7280'
            pauseBtn.style.color = '#e5e7eb'
            focusBtn.disabled = true
            shortBreakBtn.disabled = true

            pauseBtn.disabled = false
            longBreakBtn.disabled = true
        }
    } else {
        alert("Select a Mode")
    }
})

function longBreakTimer(){
    longBreakLeft = longBreakLeft - 1
    minutes = Math.floor(longBreakLeft / 60)
    seconds = longBreakLeft % 60
    timeEl.textContent = minutes + ':' + seconds.toString().padStart(2, "0")

    if(longBreakLeft === 0){
        clearInterval(interval)
        focusBtn.disabled = false
        shortBreakBtn.disabled = false
        longBreakBtn.disabled = false
        interval = null
    }
}

function shortBreakTimer(){
    shortBreakLeft = shortBreakLeft - 1
    minutes = Math.floor(shortBreakLeft / 60)
    seconds = shortBreakLeft % 60
    timeEl.textContent = minutes + ':' + seconds.toString().padStart(2, "0")

    if(shortBreakLeft === 0){
        clearInterval(interval)
        focusBtn.disabled = false
        shortBreakBtn.disabled = false
        longBreakBtn.disabled = false
        interval = null
    }
}

function FocusTimer(){
    FocusTimeLeft = FocusTimeLeft - 1
    minutes = Math.floor(FocusTimeLeft / 60)
    seconds = FocusTimeLeft % 60
    timeEl.textContent = minutes + ':' + seconds.toString().padStart(2, "0")

    if(FocusTimeLeft === 0){
        clearInterval(interval)
        focusBtn.disabled = false
        shortBreakBtn.disabled = false
        longBreakBtn.disabled = false
        interval = null
    }
}

pauseBtn.addEventListener('click', () => {
    pauseTimer()
})

function pauseTimer(){
    pauseBtn.style.backgroundColor = 'white'
    pauseBtn.style.color = 'black'
    startBtn.style.backgroundColor = '#6b7280'
    startBtn.style.color = '#e5e7eb'
    startBtn.textContent = 'RESUME'
    clearInterval(interval)
    interval = null
}

resetBtn.addEventListener('click', () => {
    resetTimer()
})

function resetTimer(){
    timeEl.textContent = '00:00'
    startBtn.style.backgroundColor = '#6b7280'
    startBtn.style.color = '#e5e7eb'
    focusBtn.style.backgroundColor = '#6b7280'
    shortBreakBtn.style.backgroundColor = '#6b7280'
    longBreakBtn.style.backgroundColor = '#6b7280'
    pauseBtn.style.backgroundColor = '#6b7280'
    pauseBtn.style.color = '#e5e7eb'
    clearInterval(interval)
    interval = null

    FocusTimeLeft = 1500
    shortBreakLeft = 300
    longBreakLeft = 600

    focusBtn.disabled = false
    shortBreakBtn.disabled = false
    longBreakBtn.disabled = false

    startBtn.textContent = "START"
}
