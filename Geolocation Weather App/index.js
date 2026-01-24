let findMeButton = document.getElementById('find-me-button');
let dataBox = document.querySelectorAll('.data-box')
let latitudeEl = document.getElementById('latitude');
let longitudeEl = document.getElementById('longitude');
let mapLink = document.getElementById('map-link');
let weatherEl =  document.getElementById('weather');

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

    mapUI()
    getWeather(crd.latitude, crd.longitude)
}


function error(err){
    console.log("Error", err)
}

function mapUI(){
    mapLink.classList.remove('hidden')
    mapLink.target = '_blank'
}

async function getWeather(lat, lang){
    try {
        let url = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lang}&current_weather=true`)
        let response = await url.json()

        console.log(response)

        weatherEl.textContent = response.current_weather.temperature


    } catch(error) {
        console.log(error)
    }
}