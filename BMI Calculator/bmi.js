let formEl =  document.getElementById('form');
let standardContainer = document.getElementById('standard-container');
let standardBtn1 = document.getElementById('standard1-btn')
let metricBtn1 = document.getElementById('metric1-btn')

let metricContainer = document.getElementById('metric-container');
let standardBtn2 = document.getElementById('standard2-btn')
let metricBtn2 = document.getElementById('metric2-btn')

let centimeterEl = document.getElementById('centimeters');
let weightEl = document.getElementById('weight');

let calculateBtn = document.getElementById('calculate-btn');

let bmiResult = document.getElementById('bmi-result')

standardBtn2.addEventListener('click', (event) => {
    event.preventDefault();

    standardContainer.classList.remove('hide')
    metricContainer.classList.add('hide')
})

calculateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('button click')

    calculateBMI()
})



function calculateBMI() {
    let centimeters = centimeterEl.value
    let weight = weightEl.value
    let metricResult

    metricResult = (weight * 10000) / Math.pow(centimeters, 2)

    bmiResult.textContent = metricResult.toFixed(2)
}
