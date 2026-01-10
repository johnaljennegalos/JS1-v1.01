let faqItem = document.querySelectorAll('.faq-item')

faqItem.forEach(item => {
    item.addEventListener('click', (event) => {
        document.querySelector('.item-answer').classList.toggle('hidden')
    })
})