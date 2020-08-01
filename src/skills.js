window.onload = function () {
    //fisrt skill
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Javascript'],
            datasets: [{
                label: '# of Votes',
                data: [90,10],
                backgroundColor: [
                    '#F0A500'
                    
                   
                ],
                borderColor: [
                    '#272727',
                    '#272727'
                ],
                
            }]
        },
        options: {
            legend: {
                display: false
              },
              
            scales: {
                yAxes: [{
        display: false,
        gridLines: {
            display: false
        }
    }]
            }
        }
    });
    //second skill
    var ctx1 = document.getElementById('myChart1').getContext('2d');
    var myChart1 = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Javascript'],
            datasets: [{
                label: '# of Votes',
                data: [90,10],
                backgroundColor: [
                    '#5c2a9d'
                    
                   
                ],
                borderColor: [
                    '#272727',
                    '#272727'
                ],
                
            }]
        },
        options: {
            legend: {
                display: false
              },
            scales: {
                yAxes: [{
        display: false,
        gridLines: {
            display: false
        }
    }]
            }
        }
    });
    //third
    var ctx2 = document.getElementById('myChart2').getContext('2d');
    var myChart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Javascript'],
            datasets: [{
                label: '# of Votes',
                data: [90,10],
                backgroundColor: [
                    '#ff5200'
                    
                   
                ],
                borderColor: [
                    '#272727',
                    '#272727'
                ],
                
            }]
        },
        options: {
            legend: {
                display: false
              },
            scales: {
                yAxes: [{
        display: false,
        gridLines: {
            display: false
        }
    }]
            }
        }
    });
    //fourth skill
    var ctx4 = document.getElementById('myChart4').getContext('2d');
    var myChart4 = new Chart(ctx4, {
        type: 'doughnut',
        data: {
            labels: ['Javascript'],
            datasets: [{
                label: '# of Votes',
                data: [90,10],
                backgroundColor: [
                    '#43d8c9'
                    
                   
                ],
                borderColor: [
                    '#272727',
                    '#272727'
                ],
                
            }]
        },
        options: {
            legend: {
                display: false
              },
            scales: {
                yAxes: [{
        display: false,
        gridLines: {
            display: false
        }
    }]
            }
        }
    });
    //5th skill
    var ctx5 = document.getElementById('myChart5').getContext('2d');
    var myChart5 = new Chart(ctx5, {
        type: 'doughnut',
        data: {
            labels: ['Javascript'],
            datasets: [{
                label: '# of Votes',
                data: [90,10],
                backgroundColor: [
                    '#F0A500'
                    
                   
                ],
                borderColor: [
                    '#272727',
                    '#272727'
                ],
                
            }]
        },
        options: {
            legend: {
                display: false
              },
            scales: {
                yAxes: [{
        display: false,
        gridLines: {
            display: false
        }
    }]
            }
        }
    });
    
    }
    
    