let currentStep = 0
let topStep = document.querySelectorAll('#top-content')
let pageContent = document.querySelectorAll('#step-content')
let nextBtn = document.querySelector('#next-btn')
let previousBtn = document.querySelector('#previous-btn')

function updateForm(){
    for (let i = 0; i < pageContent.length; i++){
        if(i === currentStep){
            pageContent.classList.remove('hidden')
        } else {
            pageContent.classList.add('hidden')
        }
    }

    nextBtn.addEventListener('click', () => {
        if(validateInput()){
            currentStep++
        }

        updateForm()
    })

}

function validateInput(){
    let name = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value
    let dateOfBirth = document.getElementById('dateOfBirth').value

    if(name === ''  || lastname === '' || dateOfBirth === ''){
        return false
    } else {
        return true
    }
}