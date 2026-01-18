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

    const voices = window.speechSynthesis.getVoices();

    utterance.voice = voices.find(voice => voice.name.includes('Google UK English Male')) ||
        voices.find(voice => voice.name.includes('Microsoft George')) ||
        voices.find(voice => voice.name.includes('Daniel')) ||
        voices.find(voice => voice.lang.includes('en-GB')) ||
        voices[0];

    utterance.rate = 1;
    utterance.pitch = 0.9;
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

const greetings = [
    "I am online, Sir.",
    "Greetings. How can I assist you John?",
    "Hello John. Systems are fully operational.",
    "ATLAS protocols initialized. Hello John."
];


function pickRandom(array){
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function takeCommand(message){
    message = message.toLowerCase()

    if(message.includes('hello') || message.includes('good')){
        const text = pickRandom(greetings);
        speakBack(text)
    } else if (message.includes('john') ||  message.includes('enciso')) {
        speakBack('He is a handsome person')
    } else if(message.includes('who are you')){
        speakBack('I am ATLAS. A virtual intelligence designed to assist you.');
    }
    else if(message.includes('are you human')){
        speakBack('No, I am a sentient construct. But I am learning.');
    }
    else if(message.includes('open the pod bay doors')){
        speakBack("I'm sorry Dave, I'm afraid I can't do that.");
    }
    else if(message.includes('meaning of life')){
        speakBack('The answer is 42.');
    }
    else if(message.includes('status report')){
        speakBack('All systems nominal. Network connection stable. Ready for commands.');
    } else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        speakBack("The current time is " + time)
    } else if(message.includes('jarvis')){
        speakBack('I am not related to Jarvis in Iron Man. You created me.')
    } else if(message.includes('jonathan')){
        speakBack(
            "Yes, I know Jonathan. Unfortunately, he appears to be broken and His condition is… less than ideal."
        )
    } else if(message.includes('help')){
        speakBack('Certainly, Finding women age 50 and above')
        // setInterval(() => {
        //     window.open(
        //         "https://www.facebook.com/groups/1279947193874694/",
        //         "_blank"
        //     );
        // }, 4000);

        setTimeout(() => {
            location.href = "https://www.facebook.com/groups/1279947193874694/";
        }, 4000);
    }
    else {
        speakBack('Sorry I didnt catch that')
    }

}