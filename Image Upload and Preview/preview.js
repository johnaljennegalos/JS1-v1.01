let fileUpload = document.getElementById('file-upload');
let imagePreview =  document.getElementById('image-preview');

fileUpload.addEventListener('change', (event) => {
    let file = new FileReader()

    file.onload = function (event) {
        imagePreview.src = file.result
        imagePreview.classList.remove('hidden')
    }
})