function average_days_bso() {
    slide_index++;
    
    var csv_data = csv[6].slice(3,9);
    var x = 0;
    while(x < csv_data.length){
        csv_data[x] = Math.round(csv_data[x] * 10) / 10;
        x++;
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    window.chart = new Chart(ctx, {
        type: 'line',

        data: {
            labels: csv[0].slice(3,9),
            datasets: [{
                label: csv[6][2],
                backgroundColor: 'rgb(250, 75, 0)',
                borderColor: 'rgb(0, 0, 0)',
                data: csv_data,
                fillOpacity: 0.3,
            }]
        },

        // Configuration Options
        options: {
            title: {
                display: true,
                text: csv[4][1] + "-" + csv[6][2],
                fontSize: canvas_title['size'],
                fontColor: canvas_title['color'],
                padding: canvas_title['padding']
            },
            legend: {
                display: false,
                labels: {
                    fontSize: 20
                }

            },
            layout: {
                padding: {
                    left: canvas_margins['left'],
                    right: canvas_margins['right'],
                    top: canvas_margins['top'],
                    bottom: canvas_margins['bottom']
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontSize: 18,
                        suggestedMin: 0,
                        suggestedMax: 25
                    },
                    scaleLabel: {
                        display: true,
                        labelString: csv[6][2],
                        fontSize: 24
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 18,
                        suggestedMin: 0,
                        suggestedMax: 1000
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Month",
                        fontSize: 24
                    }
                }],
            },

            // Animation Settings
            animation: {
                // Draw values above points
                onComplete: function() {
                    var ctx = this.chart.ctx;
                    ctx.font = "bold 36px Helvetica";
                    ctx.fillStyle = "black";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "alphabetic";

                    this.data.datasets.forEach(function (dataset)
                    {
                        for (var i = 0; i < dataset.data.length; i++) {
                            for(var key in dataset._meta)
                            {
                                var model = dataset._meta[key].data[i]._model;
                                ctx.fillText(dataset.data[i], model.x, model.y - 5);
                            }
                        }
                    });
                }
            }
        }
    });
}
