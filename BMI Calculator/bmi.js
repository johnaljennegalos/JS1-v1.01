let formEl =  document.getElementById('form');
let standardContainer = document.getElementById('standard-container');
// let standardBtn1 = document.getElementById('standard1-btn')
// let metricBtn1 = document.getElementById('metric1-btn')

let metricContainer = document.getElementById('metric-container');
let standardBtn2 = document.getElementById('standard2-btn')
// let metricBtn2 = document.getElementById('metric2-btn')

let centimeterEl = document.getElementById('centimeters');
let weightEl = document.getElementById('weight');

let feetEl = document.getElementById('feet');
let inchEl =  document.getElementById('inch');
let poundsEl = document.getElementById('pounds');

let calculateBtn = document.getElementById('calculate-btn');
let resetBtn = document.getElementById('reset-btn');

let bmiResult = document.getElementById('bmi-result')

standardBtn2.addEventListener('click', (event) => {
    event.preventDefault();

    display()
    //added a seperate logic for UI
})

function display(){
    standardContainer.classList.remove('hide')
    metricContainer.classList.add('hide')
}

calculateBtn.addEventListener('click', (event) => {
    event.preventDefault();

    calculateBMI()
})

// let underweight = document.getElementById('underweight')
// let healthy =  document.getElementById('healthy')
// let overweight = document.getElementById('overweight')
// let obese = document.getElementById('obese')

const categories = {
    underweight: document.getElementById('underweight'),
    healthy: document.getElementById('healthy'),
    overweight: document.getElementById('overweight'),
    obese: document.getElementById('obese')
}


function resetUI(){
    Object.values(categories).forEach(el => el.style.backgroundColor = '')
}

resetBtn.addEventListener('click', (event) => {
    event.preventDefault();


    if(!metricContainer.classList.contains('hide')){
        centimeterEl.value = ""
        weightEl.value = ""

        resetUI()

    } else if(!standardContainer.classList.contains('hide')){
        poundsEl.value = ""
        inchEl.value = "0"
        feetEl.value = "3"

        resetUI()
    }
})


function calculateBMI() {

    resetUI()

    if(!metricContainer.classList.contains('hide')){

        calculateMetric()

    } else if(!standardContainer.classList.contains('hide')){
        calculateStandard()
    }

    if(bmiResult.textContent <= 18.5){
        underweight.style.backgroundColor = '#9CA3AF';
    } else if(bmiResult.textContent > 18.5 && bmiResult.textContent <= 24.9){
        healthy.style.backgroundColor = '#9CA3AF';
    } else if(bmiResult.textContent >= 25.0 && bmiResult.textContent <= 29.9){
        overweight.style.backgroundColor = '#9CA3AF';
    } else {
        obese.style.backgroundColor = '#9CA3AF';
    }
}

function calculateMetric(){
    let c = centimeterEl.value
    let w = weightEl.value

    let r = (w * 10000) / Math.pow(c, 2)

    bmiResult.textContent = r.toFixed(2)
}

function calculateStandard(){
    let p = Number(poundsEl.value)
    let i = Number(inchEl.value)
    let f = Number(feetEl.value)

    let h = (f * 12) + i
    let r = (p / Math.pow(h, 2)) * 703

    bmiResult.textContent = r.toFixed(2)
}
