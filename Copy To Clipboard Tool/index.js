let copyInput = document.getElementById('copy-input');
let copyBtn = document.getElementById('copy-button');
let resultSpan = document.getElementById('result-span');

let clearBtn = document.getElementById('delete-button');

copyBtn.addEventListener('click', (event) => {
    copyText()
    copyInput.value = '';
})

function copyText() {
    copyInput.select()

    navigator.clipboard.writeText(copyInput.value)

    console.log('Copied!')

    resultSpan.textContent = copyInput.value

}

clearBtn.addEventListener('click', (event) => {
    resultSpan.textContent = '';
})