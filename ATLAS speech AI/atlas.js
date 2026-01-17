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

    takeCommand(transcript)

}

function speakBack(message){
    const utterance = new SpeechSynthesisUtterance(message)

    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    atlasImg.classList.add('animate');

    statusEl.textContent = "ATLAS speaking...";

    utterance.onend = () => {
        atlasImg.classList.remove('animate');
        statusEl.textContent = "ATLAS listening...";

        recognition.start()
    };

    window.speechSynthesis.speak(utterance);
}

function takeCommand(message){
    message = message.toLowerCase()

    if(message.includes('hello') || message.includes('good')){
        speakBack('Hi John, How can I help you Sir?')
    } else if (message.includes('john') ||  message.includes('enciso')) {
        speakBack('He is a handsome person')
    } else {
        speakBack('Sorry I didnt catch that')
    }

}