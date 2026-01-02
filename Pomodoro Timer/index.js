let focusBtn = document.getElementById('focus-btn');
let shortBreakBtn = document.getElementById('shortBreak-btn');
let longBreakBtn = document.getElementById('longBreak-btn');
let timeEl =  document.getElementById('time');
let startBtn = document.getElementById('start-btn');
let pauseBtn = document.getElementById('pause-btn');
let resetBtn = document.getElementById('reset-btn');


let timeLeft = 1500
let minutes
let seconds
let interval


function timer(){
    timeLeft = timeLeft - 1
    minutes = Math.floor(timeLeft / 60)
    seconds = timeLeft % 60
    timeEl.textContent = minutes + ':' + seconds
}


startBtn.addEventListener('click', function(){
    interval = setInterval(timer, 1000)
})