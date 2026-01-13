let starEl = document.querySelectorAll('.star')

let starData = Array.from(starEl).map(item => item.getAttribute('data-value'))

console.log(starData)