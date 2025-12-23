let inputEl = document.getElementById('input')
let guessBtn = document.getElementById('guess-btn')
let randomNum = document.getElementById('random-num')
let resultEl = document.getElementById('result')
let resetBtn = document.getElementById('reset-btn')
let lifeEl =  document.getElementById('life')

function generateRandomNumber(){
    let random = Math.floor(Math.random() * 100 + 1)
    console.log(randomNum)

    randomNum.textContent = random

    const value = inputEl.value.trim()

    if(value === ""){
        resultEl.textContent = "You must select a random number!"
        randomNum.textContent = "0"
    }

    if(isNaN(value)){
        resultEl.textContent = "Input a number!"
        randomNum.textContent = "0"
        inputEl.value = ''
        return
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

guessBtn.addEventListener('click', generateRandomNumber)

resetBtn.addEventListener('click', reset)