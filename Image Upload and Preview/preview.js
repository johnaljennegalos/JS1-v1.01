let fileUpload = document.getElementById('file-upload');
let imagePreview =  document.getElementById('image-preview');

fileUpload.addEventListener('change', (event) => {
    let file = event.target.files[0];

    if(file.type.startsWith('image/')) {
        let reader = new FileReader()

        reader.onload = function(event){
            imagePreview.src = reader.result;
            imagePreview.classList.remove('hidden')

        }

        reader.readAsDataURL(file)
    }

    // reader.onload = function (event) {
    //     imagePreview.src = reader.result
    //     imagePreview.classList.remove('hidden')
    // }

    // fileUpload.onchange = function (event) {
    //     let file =  event.target.files[0]
    //     if(file) {
    //         reader.readAsDataURL(file)
    //         imagePreview.classList.remove('hidden')
    //         imagePreview.style.display = 'block'
    //     }
    // }
})