// Função para preencher a tabela de usuários
function completeTable() {
    const tableBody = document.querySelector('#user-data');
    data.users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.registered}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Função para atualizar os indicadores de desempenho
function updatePerformanceIndicators() {
    document.getElementById('average-response-time').textContent = data.performance.averageResponseTime;
    document.getElementById('error-rate').textContent = data.performance.errorRate;
    document.getElementById('active-users').textContent = data.performance.activeUsers;
    document.getElementById('register-users').textContent = data.users.length
}
