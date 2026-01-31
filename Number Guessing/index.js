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

    guessLogic(value)

}

const message = {
    tooLow: "Too Low!",
    tooHigh: "Too High!",
    guessed: "You guess it!",
    gameOver: "Game Over!",
    guessAgain: "Guess again?",
    reset: "Reset",
    life: "Life: 3"
}

function guessLogic(value){
    const guess = Number(value)


    if(guess < random){
        resultEl.textContent = message.tooLow
        defaultUI()
        tries++
        lifeEl.textContent = `Life: ${maxTries - tries}`
    } else if(guess > random){
        resultEl.textContent = message.tooHigh
        defaultUI()
        tries++
        lifeEl.textContent = `Life: ${maxTries - tries}`
    } else {
        resultEl.textContent = message.guessed
        randomNum.textContent = random
        isPlaying = false
    }
}

function defaultUI(){
    randomNum.textContent = "🔐"
    inputEl.value = ""
}

function reset(){
    defaultResetState()
    resetLogicUI()
}

function defaultResetState(){
    isPlaying = true
    tries = 0
    lifeEl.textContent = message.life
}

function resetLogicUI(){
    let newRandom =  Math.floor(Math.random() * 100 + 1)
    random = newRandom

    defaultUI()
    resultEl.textContent = ''

    inputEl.disabled = false

    resetBtn.textContent = message.reset
    resetBtn.style.backgroundColor = "#f59e0b"
}



guessBtn.addEventListener('click', () => {
    if (isPlaying === true){
        generateRandomNumber()
    }

    if(tries === 3){
        updateGameOverUI()
        setGameOverState()
    }
})

function updateGameOverUI(){
    resultEl.textContent = message.gameOver
    resetBtn.style.backgroundColor = "red"
    resetBtn.textContent = message.guessAgain
}

function setGameOverState(){
    isPlaying = false
    inputEl.disabled = true
}

resetBtn.addEventListener('click', reset)