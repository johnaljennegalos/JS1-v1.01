let starEl = document.querySelectorAll('.star')

let starData = Array.from(starEl).map(item => item.getAttribute('data-value'))

let currentRating = 0

starEl.forEach((star, index) => {
    star.addEventListener('mouseover',  (event) => {
        event.preventDefault()

        for(let i = 0; i < starData.length; i++) {
            if(i <= index){
                starEl[i].classList.add('active')
            } else {
                starEl[i].classList.remove('active')
            }
        }
    })

    star.addEventListener('click', (event) => {
        event.preventDefault()

        currentRating = index
        console.log(currentRating)
    })

    star.addEventListener('mouseout', (event) => {
        event.preventDefault()

        for(let i = 0; i < starData.length; i++) {
            if(i <= currentRating){
                starEl[i].classList.add('active')
            } else{
                starEl[i].classList.remove('active')
            }
        }
    })
})

function startRating(rating) {

}