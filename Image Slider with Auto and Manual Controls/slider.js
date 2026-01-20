const mainImg = document.getElementById('main-image')
const scrollContainer = document.getElementById('scroll-contain')
const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')
let thumbs = document.querySelectorAll('.thumb')

thumbs.forEach(thumb => {
    thumb.addEventListener('click', event => {

        mainImg.src = thumb.getAttribute('src')
    })
})

rightBtn.addEventListener('click', event => {
    scrollContainer.scrollBy({
        left: 200,
        behavior: 'smooth'
    })
})

leftBtn.addEventListener('click', event => {
    scrollContainer.scrollBy({
        left: -200,
        behavior: 'smooth'
    })
})