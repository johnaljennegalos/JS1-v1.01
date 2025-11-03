let urlInput = document.getElementById('urlName')
let bookmarkBtn = document.getElementById('bookmark')
let bookmarkDisplay = document.getElementById('bookmarkDisplay')

let url = []

bookmarkBtn.addEventListener('click', (event) => {
    event.preventDefault()

    const input = urlInput.value
    url.push(input)

    const stringifyUrl = JSON.stringify(url)
    localStorage.setItem('url', stringifyUrl)

    let list = document.createElement('li')
    list.textContent = input
    bookmarkDisplay.appendChild(list)

    input.value = ''
})

urlInput.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        event.preventDefault()


        const input = urlInput.value
        url.push(input)

        const stringifyUrl = JSON.stringify(url)
        localStorage.setItem('url', stringifyUrl)

        let list = document.createElement('li')
        list.textContent = input
        bookmarkDisplay.appendChild(list)

        input.value = ''
    }
})

window.onload = function (){
    const parsed = JSON.parse(localStorage.getItem('url'))
    if(parsed){
        url = parsed
        url.forEach(e => {
            let list = document.createElement('li')
            let deleteBtn = document.createElement('button')


            list.textContent = e
            list.className = 'border rounded flex justify-between items-center p-2'


            deleteBtn.textContent = 'delete'
            deleteBtn.className = 'border rounded bg-red-500 px-2 py-1'
            list.appendChild(deleteBtn)
            bookmarkDisplay.appendChild(list)
        })
    }
}
