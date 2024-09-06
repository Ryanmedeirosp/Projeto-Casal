// Função para criar o gráfico de linhas

const graficoLinha = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data.sessions.map(session => session.date),
        
        datasets: [{
            label: 'Número de Sessões',
            data: data.sessions.map(session => session.count),
            borderColor: '#002c66',
            backgroundColor: 'rgba(8, 36, 73, 0.6)',
            borderWidth: 3,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                ticks:{
                    color: 'black',
                    font:{
                        size: 14
                    }
                }
            },
            y: {
                beginAtZero: true,
                ticks:{
                    color: 'black',
                    font:{
                        size: 14
                    }
                }
            }
        },
        plugins: {

            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `Sessões: ${context.raw}`;
                    }
                }
            },

            legend: {
                display: false 
            }
        }
    }
});



let totalSessions = 0
for (let index = 0; index < data.sessions.length; index++) {
    totalSessions =+ data.sessions[index].count;
}


// Criar gráfico de barras

const graficoBarra = new Chart(compareCtx, {
    type: 'bar',
    data: {
        labels: ['Total de Sessões', 'Total de Usuários'],
        datasets: [{
            label: 'Resumo',
            data: [totalSessions, data.users.length],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x:{
                ticks:{
                    color: 'black',
                    font:{
                        size: 14
                    }
                }

            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Quantidade',
                    font:{
                        size: 14
                    }
                },
                ticks:{
                    color: 'rgb(0,0,0)',
                    font:{
                        size: 14
                    }
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.raw}`;
                    }
                }
            },
            legend: {
                display: false 
            }
        }
    }
});



