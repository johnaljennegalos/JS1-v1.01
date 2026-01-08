let currentStep = 0
let pageContent = document.querySelectorAll('.step-content')
let nextBtn = document.querySelectorAll('.next-btn')
let previousBtn = document.querySelectorAll('.previous-btn')
let submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if(validateInput()){
        currentStep++
        updateForm()
    }

    document.querySelector('.top-content').classList.add('hidden')
})

function updateForm(){
    for (let i = 0; i < pageContent.length; i++){
        if(i === currentStep){
            pageContent[i].classList.remove('hidden')
        } else {
            pageContent[i].classList.add('hidden')
        }
    }

}

nextBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if(validateInput()){
            currentStep++
        }

        updateForm()
    })
})

previousBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentStep--
        updateForm()
    })
})

function validateInput(){
    let currentDiv = pageContent[currentStep]
    let inputs = currentDiv.querySelectorAll('input')

    let isValid = true

    inputs.forEach((input) => {
        if(input.value.trim() === '') {
            isValid = false
            input.style.borderColor = "red";
        } else {
            input.style.borderColor = "";
        }
    })

    return isValid
}

updateForm()