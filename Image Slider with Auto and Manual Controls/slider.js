const mainImg = document.getElementById('main-image')
const scrollContainer = document.getElementById('scroll-contain')
const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')
let thumbs = document.querySelectorAll('.thumb')

let currentIndex = 0
let sliderInterval

function updateImage(index){
    if(index >= thumbs.length){
        index = 0
    }

    if(index < 0){
        index = thumbs.length - 1
    }

    currentIndex = index

    mainImg.src = thumbs[currentIndex].getAttribute('src')
}

thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        updateImage(index)
        startTimer()
    })
})

function startTimer(){
    clearInterval(sliderInterval)

    sliderInterval = setInterval(() => {
        updateImage(currentIndex += 1);
    }, 3000)
}

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

startTimer()