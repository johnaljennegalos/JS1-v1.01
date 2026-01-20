const mainImg = document.getElementById('main-image')
const scrollContainer = document.getElementById('scroll-contain')
const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')
let thumbs = document.querySelectorAll('.thumb')

let currentIndex = 0

function updateImage(index){
    if(index >= thumbs.length){
        index = 0
    }

    currentIndex = index

    thumbs[index].getAttribute('src')
}

setInterval(() => {
    updateImage(currentIndex += 1);
}, 3000)

thumbs.forEach(thumb => {

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