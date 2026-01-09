let topBtn = document.getElementById('top-btn');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY

    if(scrollY > 20) {
        topBtn.classList.remove('hidden')
    } else {
        topBtn.classList.add('hidden')
    }
})