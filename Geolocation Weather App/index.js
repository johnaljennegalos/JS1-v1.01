let findMeButton = document.getElementById('find-me-button');
let dataBox = document.querySelectorAll('.data-box')
let latitudeEl = document.getElementById('latitude');
let longitudeEl = document.getElementById('longitude');
let mapLink = document.getElementById('map-link');

findMeButton.addEventListener('click', () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition()
    } else {
        console.log("Browser not supported")
    }
})