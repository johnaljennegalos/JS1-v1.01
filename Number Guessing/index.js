let inputEl = document.getElementById('input')
let guessBtn = document.getElementById('guess-btn')
let randomNum = document.getElementById('random-num')
let resultEl = document.getElementById('result')
let resetBtn = document.getElementById('reset-btn')
let lifeEl =  document.getElementById('life')

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
        tries++
    } else if(guess > random){
        resultEl.textContent = "Too high!"
        randomNum.textContent = "🔐"
        tries++
    } else {
        resultEl.textContent = "You guess it!"
        randomNum.textContent = random
        isPlaying = false
    }

    // if(Number(inputEl.value) < random){
    //     resultEl.textContent = 'Too low'
    // } else if(Number(inputEl.value) > random){
    //     resultEl.textContent = 'Too high'
    // } else if(isNaN(inputEl.value)){
    //   resultEl.textContent = 'Input a number!'
    //   randomNum.textContent = '0'
    // } else if(inputEl.value === ""){
    //     resultEl.textContent = 'Blank Input!'
    //     randomNum.textContent = '0'
    // }
    // else {
    //     resultEl.textContent = 'You Guess it!'
    // }
}

function reset(){
    randomNum.textContent = '0'
    inputEl.value = ''
    resultEl.textContent = ''
}

guessBtn.addEventListener('click', () => {
    if (isPlaying === true){
        generateRandomNumber()
    }

    if(tries === 3){
        isPlaying = false
        resultEl.textContent = "Game Over!"
    }
})

resetBtn.addEventListener('click', reset)