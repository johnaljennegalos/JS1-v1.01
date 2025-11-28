let userInput = document.getElementById('user-text');
let speedSlider = document.getElementById('speed-slider');
let speedValue = document.getElementById('speed-value');
let pitchSlider = document.getElementById('pitch-slider');
let pitchValue = document.getElementById('pitch-value');
let speakBtn = document.getElementById('speak-button');
let resetBtn = document.getElementById('reset-button')

speedSlider.addEventListener('input', () => {
    speedValue.textContent = speedSlider.value
})

pitchSlider.addEventListener('input', () => {
    pitchValue.textContent = pitchSlider.value
})

speakBtn.addEventListener('click', () => {


    const input = userInput.value.trim();

    if(input === ''){
        alert('Please enter some text to speak.')
    }

    if(window.speechSynthesis.speaking){
        window.speechSynthesis.cancel()
    }

    const utterance = new SpeechSynthesisUtterance(input)

    utterance.rate = speedSlider.value

    utterance.pitch = pitchSlider.value

    window.speechSynthesis.speak(utterance)
})

resetBtn.addEventListener('click', () => {
    window.speechSynthesis.cancel()

    userInput.value = ''
})