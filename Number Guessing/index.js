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

function guessLogic(value){
    const guess = Number(value)


    if(guess < random){
        resultEl.textContent = "Too low!"
        defaultUI()
        tries++
        lifeEl.textContent = `Life: ${maxTries - tries}`
    } else if(guess > random){
        resultEl.textContent = "Too high!"
        defaultUI()
        tries++
        lifeEl.textContent = `Life: ${maxTries - tries}`
    } else {
        resultEl.textContent = "You guess it!"
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
    lifeEl.textContent = "Life: 3"
}

function resetLogicUI(){
    let newRandom =  Math.floor(Math.random() * 100 + 1)
    random = newRandom

    defaultUI()
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
        updateGameOverUI()
        setGameOverState()
    }
})

function updateGameOverUI(){
    resultEl.textContent = "Game Over!"
    resetBtn.style.backgroundColor = "red"
    resetBtn.textContent = "Guess again?"
}

function setGameOverState(){
    isPlaying = false
    inputEl.disabled = true
}

resetBtn.addEventListener('click', reset)