let formEl =  document.getElementById('form');
let standardContainer = document.getElementById('standard-container');
let standardBtn1 = document.getElementById('standard1-btn')
let metricBtn1 = document.getElementById('metric1-btn')

let metricContainer = document.getElementById('metric-container');
let standardBtn2 = document.getElementById('standard2-btn')
let metricBtn2 = document.getElementById('metric2-btn')

let bmiResult = document.getElementById('bmi-result')

standardBtn2.addEventListener('click', (event) => {
    event.preventDefault();

    standardContainer.classList.remove('hide')
    metricContainer.classList.add('hide')
})

