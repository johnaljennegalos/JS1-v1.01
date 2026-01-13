let starEl = document.querySelectorAll('.star')

let starData = Array.from(starEl).map(item => item.getAttribute('data-value'))

let currentRating = 0

starEl.forEach((star, index) => {
    star.addEventListener('mouseover',  (event) => {
        event.preventDefault()

        star.style.backgroundColor = 'yellow'
    })
})