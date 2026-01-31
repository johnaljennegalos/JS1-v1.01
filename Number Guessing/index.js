let inputEl = document.getElementById('input')
let guessBtn = document.getElementById('guess-btn')
let randomNum = document.getElementById('random-num')
let resultEl = document.getElementById('result')
let resetBtn = document.getElementById('reset-btn')
let lifeEl =  document.getElementById('life')

let maxTries = 3
let tries = 0
let isPlaying = true

let random = Math.floor(Math.random() * 100 + 1)

function generateRandomNumber(){

    const value = inputEl.value.trim()

    if(value === ""){
        resultEl.textContent = "You must select a random number!"
        randomNum.textContent = "🔐"
        return
    }

    if(isNaN(value)){
        resultEl.textContent = "Input a number!"
        randomNum.textContent = "🔐"
        inputEl.value = ''
        return
    }


    console.log(random)

    const guess = Number(value)


    if(guess < random){
        resultEl.textContent = "Too low!"
        randomNum.textContent = "🔐"
        inputEl.value = ""
        tries++
        lifeEl.textContent = `Life: ${maxTries - tries}`
    } else if(guess > random){
        resultEl.textContent = "Too high!"
        randomNum.textContent = "🔐"
        inputEl.value = ""
        tries++
        lifeEl.textContent = `Life: ${maxTries - tries}`
    } else {
        resultEl.textContent = "You guess it!"
        randomNum.textContent = random
        isPlaying = false
    }
}

function reset(){

    isPlaying = true
    tries = 0
    lifeEl.textContent = "Life: 3"

    resetLogicUI()
}

function resetLogicUI(){
    let newRandom =  Math.floor(Math.random() * 100 + 1)
    random = newRandom

    randomNum.textContent = '🔐'
    inputEl.value = ''
    resultEl.textContent = ''

    inputEl.disabled = false

    resetBtn.textContent = 'Reset'
    resetBtn.style.backgroundColor = "#f59e0b"
}

guessBtn.addEventListener('click', () => {
    if (isPlaying === true){
        generateRandomNumber()
    }

    if(tries === 3){
        checkTries()
    }
})

function checkTries(){
    isPlaying = false
    resultEl.textContent = "Game Over!"
    resetBtn.style.backgroundColor = "red"
    inputEl.disabled = true
    resetBtn.textContent = "Guess again?"
}

resetBtn.addEventListener('click', reset)