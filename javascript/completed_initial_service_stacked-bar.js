function completed_initial_services_stack() {
    slide_index++;
    
    var csv_data = csv[4].slice(3,9);
    var csv_data_1 = csv[49].slice(3,9);
    var csv_data_2 = csv[94].slice(3,9);
    var csv_data_3 = csv[139].slice(3,9);
    var csv_data_4 = csv[184].slice(3,9);
    var csv_data_5 = csv[229].slice(3,9);
    var csv_data_6 = csv[274].slice(3,9);
    var csv_data_7 = csv[320].slice(3,9);
    var csv_data_8 = csv[364].slice(3,9);

    var x = 0;
    while(x < csv_data.length){
        csv_data[x] = Math.round(csv_data[x] * 10) / 10;
        x++;
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',

        data: {
            labels: csv[0].slice(3,9),
            datasets: [{
                label: csv[47][1], // bar graph - DC
                backgroundColor: [
                    'rgb(165, 165, 165)',
                    'rgb(165, 165, 165)',
                    'rgb(165, 165, 165)',
                    'rgb(165, 165, 165)',
                    'rgb(165, 165, 165)',
                    'rgb(165, 165, 165)',
                ],
                data: csv_data_1,
            },{
                label: csv[92][1], // bar graph - Delaware
                backgroundColor: [
                    '#71a1a0',
                    '#71a1a0',
                    '#71a1a0',
                    '#71a1a0',
                    '#71a1a0',
                    '#71a1a0',
                ],
                data: csv_data_2,
            },{
                label: csv[137][1], // bar graph - Maryland
                backgroundColor: [
                    '#FF0000',
                    '#FF0000',
                    '#FF0000',
                    '#FF0000',
                    '#FF0000',
                    '#FF0000',
                ],
                data: csv_data_3,
            },{
                label: csv[182][1], // bar graph - New Jersey
                backgroundColor: [
                    '#F0DC82',
                    '#F0DC82',
                    '#F0DC82',
                    '#F0DC82',
                    '#F0DC82',
                    '#F0DC82',
                ],
                data: csv_data_4,
            },{
                label: csv[227][1], // bar graph - Pennsylvania
                backgroundColor: [
                    '#0000FF',
                    '#0000FF',
                    '#0000FF',
                    '#0000FF',
                    '#0000FF',
                    '#0000FF',
                ],
                data: csv_data_5,
            },{
                label: csv[272][1], // bar graph - Virginia
                backgroundColor: [
                    '#FF7F00',
                    '#FF7F00',
                    '#FF7F00',
                    '#FF7F00',
                    '#FF7F00',
                    '#FF7F00',
                ],
                data: csv_data_6,
            },{
                label: csv[317][1], // bar graph - West Virginia
                backgroundColor: [
                    '#CFB53B',
                    '#CFB53B',
                    '#CFB53B',
                    '#CFB53B',
                    '#CFB53B',
                    '#CFB53B',
                ],
                data: csv_data_7,
            },{
                label: csv[362][1], // bar graph - New York
                backgroundColor: [
                    'navy',
                    'navy',
                    'navy',
                    'navy',
                    'navy',
                    'navy',
                ],
                data: csv_data_8,
            }]
        },

        // Configuration Options
        options: {
            title: {
                display: true,
                text: csv[4][1] + "-" + csv[4][2] + " By State",
                fontSize: canvas_title['size'],
                fontColor: canvas_title['color'],
                padding: canvas_title['padding']
            },
            legend: {
                display: true,
                labels: {
                    fontSize: 16
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
                    stacked: true,
                    ticks: {
                        fontSize: 18,
                        suggestedMin: 0,
                        suggestedMax: 1000
                    },
                    scaleLabel: {
                        display: true,
                        labelString: csv[4][2],
                        fontSize: 24
                    }
                }],
                xAxes: [{
                    stacked: true,
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

                    var count = this.data.datasets.length;
                    this.data.datasets.forEach(function (dataset)
                    {
                        count -= 1;
                        for (var i = 0; i < dataset.data.length; i++) {
                            for(var key in dataset._meta)
                            {
                                var model = dataset._meta[key].data[i]._model;
                                if(count == 0) {
                                    ctx.fillText(csv_data[i], model.x, model.y - 5);
                                }
                            }
                        }
                    });
                }
            }
        }
    });
}