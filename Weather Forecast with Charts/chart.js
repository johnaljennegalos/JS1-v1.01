let chartCanvas =  document.getElementById('chart-canvas');

const myChart = new Chart(chartCanvas, {
    type: 'line',
    data: {
        labels: ['1 PM', '2 PM', '3 PM', '4 PM', '5 PM'],
        datasets: [{
            labels: 'Temperature',
            data: [20, 22, 19, 24, 25],
            borderWidth: 1
        }]
    }
})