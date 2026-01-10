let faqItem = document.querySelectorAll('.faq-item')

faqItem.forEach(item => {
    item.addEventListener('click', (event) => {
        faqItem.forEach(otherItem => {
            if(otherItem !== item){
                otherItem.querySelector('.item-answer').classList.add('hidden')
            }
        })

        item.querySelector('.item-answer').classList.toggle('hidden')
    })
})