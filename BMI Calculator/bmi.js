let formEl =  document.getElementById('form');
let standardContainer = document.getElementById('standard-container');
let standardBtn1 = document.getElementById('standard1-btn')
let metricBtn1 = document.getElementById('metric1-btn')

let metricContainer = document.getElementById('metric-container');
let standardBtn2 = document.getElementById('standard2-btn')
let metricBtn2 = document.getElementById('metric2-btn')

let centimeterEl = document.getElementById('centimeters');
let weightEl = document.getElementById('weight');

let feetEl = document.getElementById('feet');
let inchEl =  document.getElementById('inch');
let poundsEl = document.getElementById('pounds');

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

    if(!metricContainer.classList.contains('hide')){
        let c = centimeterEl.value
        let w = weightEl.value

        let r = (w * 10000) / Math.pow(c, 2)

        bmiResult.textContent = r.toFixed(2)
    } else if(!standardContainer.classList.contains('hide')){
        let p = poundsEl.value
        let i = inchEl.value
        let f = feetEl.value

        let h = (f * 12) + i
        let r = (p / Math.pow(h, 2)) * 703

        bmiResult.textContent = r.toFixed(2)
    }
}

