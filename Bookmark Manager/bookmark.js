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

})

window.onload = function (){
    const parsed = JSON.parse(localStorage.getItem('url'))
    if(parsed){
        url = parsed
    }
}