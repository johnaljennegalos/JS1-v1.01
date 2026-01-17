const speakBtn =  document.getElementById('speak');
const statusEl = document.getElementById('status');
const atlasImg = document.getElementById('atlas-img');

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

speakBtn.addEventListener('click', () => {
    statusEl.textContent = "ATLAS Listening...";

    recognition.start()
});


recognition.onstart = (event) => {
    console.log(event);
}

recognition.onresult = (event) => {
    let current = event.resultIndex

    const transcript = event.results[current][0].transcript

    console.log(transcript)

    speakBack(transcript)
}

function speakBack(message){
    const utterance = new SpeechSynthesisUtterance(message)

    window.speechSynthesis.speak(utterance);
}

function takeCommand(){

}