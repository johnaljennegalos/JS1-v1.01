let startBtn = document.getElementById('start-btn');
let resultText = document.getElementById('resultDisplay');

let isRecording = false
let speechObj = null

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new speechRecognition()

if(!recognition){
    startBtn.textContent = "Speech Recognition not enabled"
    startBtn.disabled = true
}

startBtn.addEventListener('click', (event)=>{
    isRecording = !isRecording
    isRecording ? startRecording() : stopRecording()
})

function startRecording(){
    startBtn.textContent = "Recording..."
    speechObj = new speechRecognition()
    speechObj.start()
    speechObj.onresult = transcribe
}

function transcribe(event){
    console.log(event)
}

function stopRecording(){
    speechObj.stop()
    speechObj = null
    startBtn.textContent = "Start"
}