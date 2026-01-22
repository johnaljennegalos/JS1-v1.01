let copyInput = document.getElementById('copy-input');
let copyBtn = document.getElementById('copy-button');
let resultSpan = document.getElementById('result-span');

copyBtn.addEventListener('click', (event) => {
    copyText()
})

function copyText() {
    copyInput.select()

    navigator.clipboard.writeText(copyInput.value)

    console.log('Copied!')

    resultSpan.textContent = copyInput.value
}