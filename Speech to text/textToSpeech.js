let startBtn = document.getElementById('start-btn');
let stopBtn =  document.getElementById('stop-btn');
let resultText = document.getElementById('resultDisplay');

let isRecording = false
let speechObj = null

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

if(!speechRecognition){
    startBtn.textContent = "Speech Recognition not enabled"
    startBtn.disabled = true
}

startBtn.addEventListener('click', (event)=>{
    isRecording = !isRecording
    startRecording()
})

stopBtn.addEventListener('click', (event)=>{
    isRecording = false
    stopRecording()
})

function startRecording(){
    startBtn.textContent = "Recording..."
    speechObj = new speechRecognition()

    speechRecognition.interimResults = true
    speechRecognition.continuous = true

    speechObj.onresult = transcribe
    speechObj.start()
}

function transcribe(event){
    console.log(event)

    let finalTranscript = ""

    for(let i = 0; i < event.results.length; i++){
        finalTranscript += event.results[i][0].transcript + " "
    }

    resultText.textContent = finalTranscript
}

function stopRecording(){
    speechObj.stop()
    speechObj = null
    startBtn.textContent = "Start"
}