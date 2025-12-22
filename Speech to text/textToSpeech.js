let startBtn = document.getElementById('start-btn');
let resultText = document.getElementById('resultDisplay');

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new speechRecognition()

console.log(recognition)