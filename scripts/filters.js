// Função para filtrar a tabela de usuários

function filterUsers() {
    const filter = document.getElementById('user-filter').value.toLowerCase();
    const rows = document.querySelectorAll('#users-table tbody tr');

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const name = cells[0].textContent.toLowerCase();
        const email = cells[1].textContent.toLowerCase();
        const registeredDate = cells[2].textContent.toLowerCase();
        if (name.includes(filter) || registeredDate.includes(filter) || email.includes(filter)) {
            row.classList.remove('hidden');
            row.style.display = '';  
        } else {
            row.classList.add('hidden');
            
            setTimeout(() => {
                row.style.display = 'none';
            }, 700);  
        }
    });
}

document.getElementById('user-filter').addEventListener('input', filterUsers);


// Função para preencher a tabela de usuários com dados ordenados
function orderByFunction(sortBy = a, order = b) {
    const tableBody = document.querySelector('#user-data');
    tableBody.innerHTML = '';

    // Ordenar os dados dos usuários 
    const sortedUsers = [...data.users].sort((a, b) => {
        let comparison = 0;
        if (sortBy === 'name') {
            comparison = a.name.localeCompare(b.name);
        } else if (sortBy === 'email') {
            comparison = a.email.localeCompare(b.email);
        } else if (sortBy === 'registered') {
            comparison = new Date(a.registered) - new Date(b.registered);
        }
        return order === 'asc' ? comparison : -comparison;
    });

    // Preencher a tabela com os dados ordenados
    sortedUsers.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.registered}</td>
        `;
        tableBody.appendChild(row);
    });
}

//função para ordenar com o click, virar a imagem e alterar as demais(caso estejam viradas)
//e enviar as informações para a função de ordenamento
document.getElementById('div-order-name').addEventListener('click',()=>{
    orderName.classList.contains('reverse') ? direction = 'desc' : direction = 'asc';

    orderData.classList.contains('reverse') ?  orderData.classList.toggle('reverse'): null;
    orderEmail.classList.contains('reverse') ?  orderEmail.classList.toggle('reverse'): null;

    orderByFunction(sortBy = 'name', order = direction);
    orderName.classList.toggle('reverse');
   
})

document.getElementById('div-order-data').addEventListener('click',()=>{
    orderData.classList.contains('reverse') ? direction = 'desc' : direction = 'asc';

    orderName.classList.contains('reverse') ?  orderName.classList.toggle('reverse'): null;
    orderEmail.classList.contains('reverse') ?  orderEmail.classList.toggle('reverse'): null;
   
    orderByFunction(sortBy = 'registered', order = direction);
    orderData.classList.toggle('reverse');


})

document.getElementById('div-order-email').addEventListener('click',()=>{
    orderEmail.classList.contains('reverse') ? direction = 'desc' : direction = 'asc';

    orderData.classList.contains('reverse') ?  orderData.classList.toggle('reverse'): null;
    orderName.classList.contains('reverse') ?  orderName.classList.toggle('reverse'): null;
  
    orderByFunction(sortBy = 'email', order = direction);
    orderEmail.classList.toggle('reverse');
})