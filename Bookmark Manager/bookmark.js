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
        let deleteBtn = document.createElement('button')


        list.textContent = input
        list.className = 'border rounded flex justify-between items-center mt-1 w-full hover:bg-gray-100 hover:text-gray-900 text-blue-700 underline'

        deleteBtn.textContent = 'delete'
        deleteBtn.className = 'border rounded bg-red-500 px-1 py-1'

        list.appendChild(deleteBtn)
        bookmarkDisplay.appendChild(list)

        urlInput.value = ''

        deleteBtn.addEventListener('click', (event) => {
            const index = url.indexOf(input)
            if(index > -1){
                url.splice(index, 1)

                localStorage.setItem('url', JSON.stringify(url))

                list.remove()
            }
        })
    }
})

window.onload = function (){
    const parsed = JSON.parse(localStorage.getItem('url'))
    if(parsed){
        url = parsed
        url.forEach((e, index) => {
            let list = document.createElement('li')
            let deleteBtn = document.createElement('button')


            list.textContent = e
            list.className = 'border rounded flex justify-between items-center mt-1 w-full hover:bg-gray-100 hover:text-gray-900'


            deleteBtn.textContent = 'delete'
            deleteBtn.className = 'border rounded bg-red-500 px-1 py-1'

            list.appendChild(deleteBtn)
            bookmarkDisplay.appendChild(list)

            deleteBtn.addEventListener('click', (event) => {
                url.splice(index, 1)

                localStorage.setItem('url', JSON.stringify(url))

                list.remove()
            })
        })
    }
}
