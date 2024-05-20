document.addEventListener('DOMContentLoaded', (event) => {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    const chart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Municípios afetados', 'Pessoas em abrigos', 'Desalojados', 'Afetados'],
            datasets: [{
                label: 'Dados da Ocorrência',
                data: [463, 76188, 581633, 2339508],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.6)',
                    'rgba(46, 204, 113, 0.6)',
                    'rgba(241, 196, 15, 0.6)',
                    'rgba(231, 76, 60, 0.6)'
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(241, 196, 15, 1)',
                    'rgba(231, 76, 60, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: "#ecf0f1"
                    }
                }
            }
        }
    });

    const ctx2 = document.getElementById('chart2').getContext('2d');
    const chart2 = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Feridos', 'Desaparecidos', 'Óbitos confirmados', 'Óbitos em investigação'],
            datasets: [{
                label: 'Dados de Impacto',
                data: [806, 88, 157, 0],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.6)',
                    'rgba(46, 204, 113, 0.6)',
                    'rgba(241, 196, 15, 0.6)',
                    'rgba(231, 76, 60, 0.6)'
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(241, 196, 15, 1)',
                    'rgba(231, 76, 60, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: "#ecf0f1"
                    }
                }
            }
        }
    });

    const ctx3 = document.getElementById('chart3').getContext('2d');
    const chart3 = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['Pessoas resgatadas', 'Animais resgatados', 'Efetivo', 'Viaturas', 'Aeronaves', 'Embarcações'],
            datasets: [{
                label: 'Dados de Resgate',
                data: [82666, 12358, 27708, 4058, 21, 271],
                backgroundColor: 'rgba(46, 204, 113, 0.6)',
                borderColor: 'rgba(46, 204, 113, 1)',
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                pointBackgroundColor: 'rgba(46, 204, 113, 1)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: "#ecf0f1"
                    }
                }
            }
        }
    });

    const ctx4 = document.getElementById('chart4').getContext('2d');
    const chart4 = new Chart(ctx4, {
        type: 'doughnut',
        data: {
            labels: ['Municípios afetados', 'Pessoas em abrigos', 'Desalojados', 'Afetados', 'Feridos', 'Desaparecidos', 'Óbitos confirmados', 'Óbitos em investigação', 'Pessoas resgatadas', 'Animais resgatados', 'Efetivo', 'Viaturas', 'Aeronaves', 'Embarcações'],
            datasets: [{
                label: 'Dados de Desastres',
                data: [461, 77202, 540188, 2304422, 806, 94, 155, 0, 82666, 12215, 27716, 4061, 21, 302],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.6)',
                    'rgba(46, 204, 113, 0.6)',
                    'rgba(241, 196, 15, 0.6)',
                    'rgba(231, 76, 60, 0.6)',
                    'rgba(155, 89, 182, 0.6)',
                    'rgba(52, 73, 94, 0.6)',
                    'rgba(26, 188, 156, 0.6)',
                    'rgba(22, 160, 133, 0.6)',
                    'rgba(39, 174, 96, 0.6)',
                    'rgba(192, 57, 43, 0.6)',
                    'rgba(44, 62, 80, 0.6)',
                    'rgba(41, 128, 185, 0.6)',
                    'rgba(142, 68, 173, 0.6)',
                    'rgba(243, 156, 18, 0.6)'
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(241, 196, 15, 1)',
                    'rgba(231, 76, 60, 1)',
                    'rgba(155, 89, 182, 1)',
                    'rgba(52, 73, 94, 1)',
                    'rgba(26, 188, 156, 1)',
                    'rgba(22, 160, 133, 1)',
                    'rgba(39, 174, 96, 1)',
                    'rgba(192, 57, 43, 1)',
                    'rgba(44, 62, 80, 1)',
                    'rgba(41, 128, 185, 1)',
                    'rgba(142, 68, 173, 1)',
                    'rgba(243, 156, 18, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: "#ecf0f1"
                    }
                }
            }
        }
    });
});
