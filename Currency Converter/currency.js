    let formEl = document.getElementById('currForm')
    let inputEl = document.getElementById('currInput')
    let convertBtn = document.getElementById('convertButton')
    let clearBtn = document.getElementById('clearButton')
    let dropdownEl =  document.getElementById('dropdownContent')
    let selected = document.getElementById('selected')
    let displayEl = document.getElementById('currDisplay')


    function showResult(amount, currency, rate){
        displayEl.classList.remove('hidden')
        displayEl.innerHTML = ''

        let resultP = document.createElement('p')
        resultP.textContent = `${amount} Php to ${currency} is ${(amount * rate).toFixed(2)}`
        displayEl.appendChild(resultP)
    }


    formEl.addEventListener('submit', (event)=>{
        event.preventDefault()

        let selectedCurrency = selected.textContent

        if(selectedCurrency === 'Select Currency') {
            alert("Please Select a Currency!")
            return;
        }

        let amount = Number(inputEl.value)

        if(selectedCurrency === 'USD - US Dollars') {
            showResult(amount, selectedCurrency, 0.01717)
        } else if(selectedCurrency === 'EUR - European Dollars') {
            showResult(amount, selectedCurrency, 0.015)
        } else if(selectedCurrency === 'JPY - Japanese Yen') {
            showResult(amount, selectedCurrency, 2.58)
        } else if(selectedCurrency === 'SGD - Singapore Dollar') {
            showResult(amount, selectedCurrency, 0.0222)
        } else if(selectedCurrency === 'SAR - Saudi Riyal') {
            showResult(amount, selectedCurrency, 6.44)
        } else if(selectedCurrency === 'AED - United Arab Emirates Dirham') {
            showResult(amount, selectedCurrency, 6.31)
        }

    })

    dropdownEl.addEventListener('click', (event)=>{
        event.preventDefault()

        let list = document.getElementById('dropdownList')

        if(list.classList.contains('hidden')){
            list.classList.remove('hidden')
        } else {
            list.classList.add('hidden')
        }

        currencyLoop()

    })

    function currencyLoop(){
        let currencies = document.querySelectorAll('#currencies li')
        currencies.forEach(item => {
            item.addEventListener('click', (event)=>{
                event.preventDefault()

                selected.textContent = item.textContent


            })
        })
    }

clearBtn.addEventListener('click', (event)=>{
    event.preventDefault()

    inputEl.value = ''
    displayEl.classList.add('hidden')
    selected.textContent = 'Select Currency'
})