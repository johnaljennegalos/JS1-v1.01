let findMeButton = document.getElementById('find-me-button');
let dataBox = document.querySelectorAll('.data-box')
let latitudeEl = document.getElementById('latitude');
let longitudeEl = document.getElementById('longitude');
let mapLink = document.getElementById('map-link');

findMeButton.addEventListener('click', () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error)
    } else {
        console.log("Browser not supported")
    }
})

function success(pos){
    console.log(pos)
    const crd = pos.coords

    longitudeEl.textContent = crd.longitude
    latitudeEl.textContent = crd.latitude

    mapLink.href = `https://www.google.com/maps?q=${crd.latitude},${crd.longitude}`

    mapLink.classList.remove('hidden')
    mapLink.target = '_blank'
}

function error(err){
    console.log("Error", err)
}