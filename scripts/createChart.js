// Função para criar o gráfico de linhas

const graficoLinha = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data.sessions.map(session => session.date),
        datasets: [{
            label: 'Número de Sessões',
            data: data.sessions.map(session => session.count),
            borderColor: '#5477A8',
            backgroundColor: 'rgba(84, 119, 168, 0.4)',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `Sessões: ${context.raw}`;
                    }
                }
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
            label: 'Comparação',
            data: [totalSessions, data.users.length],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Quantidade'
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
            }
        }
    }
});



