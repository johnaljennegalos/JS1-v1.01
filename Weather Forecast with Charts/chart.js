let chartCanvas =  document.getElementById('chart-canvas');

const myChart = new Chart(chartCanvas, {
    type: 'line',
    data: {
        labels: ['1 PM', '2 PM', '3 PM', '4 PM', '5 PM'],
        datasets: [{
            labels: 'Temperatures',
            data: [20, 22, 19, 24, 25],
            borderWidth: 1
        }]
    }
})

async function getForecast(){
    try {
        let data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=13.19&longitude=123.73&hourly=temperature_2m')
        let result = await data.json();

        let rawTime = result.hourly.time
        let rawTemp = result.hourly.temperature_2m

        let next24hours = rawTime.slice(0, 24)
        let next24temp = rawTemp.slice(0, 24)

        myChart.data.labels = next24hours
        myChart.data.datasets[0].data = next24temp

        console.log(result);

    } catch (error) {
        console.error(error);
    }
}

getForecast()
myChart.update();