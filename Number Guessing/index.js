let inputEl = document.getElementById('input')
let guessBtn = document.getElementById('guess-btn')
let randomNum = document.getElementById('random-num')
let resultEl = document.getElementById('result')

function generateRandomNumber(){
    randomNum = Math.floor(Math.random() * 100 + 1)
    return  randomNum;
}