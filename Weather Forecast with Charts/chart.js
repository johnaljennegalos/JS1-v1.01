let chartCanvas =  document.getElementById('chart-canvas');
let inputEl = document.getElementById('input');
let searchBtn =  document.getElementById('search-button');

const myChart = new Chart(chartCanvas, {
    type: 'line',
    data: {
        labels: ['1 PM', '2 PM', '3 PM', '4 PM', '5 PM'],
        datasets: [{
            label: 'Temperature',
            data: [20, 22, 19, 24, 25],
            borderColor: '#38bdf8',     // Light Blue (Tailwind Sky-400)
            backgroundColor: 'rgba(56, 189, 248, 0.2)', // Same blue but transparent
            borderWidth: 2,
            fill: true,                 // Fills the area under the line
            tension: 0.4
        }]
    }
})

async function getForecast(){
    try {
        let data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=13.19&longitude=123.73&hourly=temperature_2m')
        let result = await data.json();

        let rawTime = result.hourly.time
        let rawTemp = result.hourly.temperature_2m

        let next24hours = rawTime.slice(0, 24).map(timestring => {
            let date = new Date(timestring);

            return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
        })

        let next24temp = rawTemp.slice(0, 24)

        myChart.data.labels = next24hours
        myChart.data.datasets[0].data = next24temp

        myChart.update();

        console.log(result);

    } catch (error) {
        console.error(error);
    }
}

getForecast()