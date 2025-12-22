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
    speechRecognition.lang = 'en-US'

    speechObj.onstart = () => {
        console.log('Starting Speech recognition...')
    }

    speechObj.onaudiostart = () => {
        console.log("Audio detected")
    }

    speechObj.onerror = (event) => {
        console.log('Error', event)
    }

    speechObj.onaudioend = () => {
        console.log("Ending Speech recognition...")
    }

    speechObj.onresult = transcribe
    speechObj.start()
}

function transcribe(event){
    console.log(event)

    let finalTranscript = ""

    for(let i = 0; i < event.results.length; i++){
        finalTranscript += event.results[i][0].transcript + " "
    }

    let command = finalTranscript.toLowerCase().trim()

    commandSearch(command)

    resultText.textContent = finalTranscript
}

function stopRecording(){
    speechObj.stop()
    speechObj = null
    startBtn.textContent = "Start"
    resultText.textContent = ""
}

function commandSearch(command){
    if(command.includes("open google")){
        window.open("https://www.google.com")
    }

    if (command.includes("open spotify")) {
        window.location.href = "spotify:"; // Tries to launch the Spotify Desktop App
    }

    if(command.includes("open instagram")) {
        window.open("https://www.instagram.com")
    }

    if(command.includes("open youtube")){
        window.open("https://www.youtube.com")
    }

    if(command.includes("dark mode")) {
        document.body.style.backgroundColor = "black"
    }

    if(command.includes("please don't go")){
        window.open("https://www.youtube.com/watch?v=DasbEoug8Ik&list=RDDasbEoug8Ik&start_radio=1")
    }
}