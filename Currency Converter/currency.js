    let formEl = document.getElementById('currForm')
    let inputEl = document.getElementById('currInput')
    let convertBtn = document.getElementById('convertButton')
    let clearBtn = document.getElementById('clearButton')
    let dropdownEl =  document.getElementById('dropdownContent')
    let selected = document.getElementById('selected')
    let displayEl = document.getElementById('currDisplay')


    function removeHidden(){
        displayEl.classList.remove('hidden')
        displayEl.innerHTML = ''
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

            removeHidden()

            let resultP = document.createElement('p')

            resultP.textContent = `${amount} Php to ${selectedCurrency} is ${(amount * 0.01717).toFixed(2)}`

            displayEl.appendChild(resultP)
        } else if(selectedCurrency === 'EUR - European Dollars') {

            removeHidden()

            let resultP = document.createElement('p')

            resultP.textContent = `${amount} Php to ${selectedCurrency} is ${(amount * 0.015).toFixed(2)}`

            displayEl.appendChild(resultP)
        } else if(selectedCurrency === 'JPY - Japanese Yen') {

            removeHidden()

            let resultP = document.createElement('p')

            resultP.textContent = `${amount} Php to ${selectedCurrency} is ${(amount * 2.58).toFixed(2)}`

            displayEl.appendChild(resultP)
        } else if(selectedCurrency === 'SGD - Singapore Dollar') {

            removeHidden()

            let resultP = document.createElement('p')

            resultP.textContent = `${amount} Php to ${selectedCurrency} is ${(amount * 0.0222).toFixed(2)}`

            displayEl.appendChild(resultP)
        } else if(selectedCurrency === 'SAR - Saudi Riyal') {

            removeHidden()

            let resultP = document.createElement('p')

            resultP.textContent = `${amount} Php to ${selectedCurrency} is ${(amount * 6.44).toFixed(2)}`

            displayEl.appendChild(resultP)
        } else if(selectedCurrency === 'AED - United Arab Emirates Dirham') {

            removeHidden()

            let resultP = document.createElement('p')

            resultP.textContent = `${amount} Php to ${selectedCurrency} is ${(amount * 6.31).toFixed(2)}`

            displayEl.appendChild(resultP)
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

        let currencies = document.querySelectorAll('#currencies li')
        currencies.forEach(item => {
            item.addEventListener('click', (event)=>{
                event.preventDefault()

                selected.textContent = item.textContent


            })
        })

    })

clearBtn.addEventListener('click', (event)=>{
    event.preventDefault()

    inputEl.value = ''
    displayEl.classList.add('hidden')
    selected.textContent = 'Select Currency'
})