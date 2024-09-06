// Função para adicionar usuario, caso atualize a página o usuário some, já que não estou usando banco de dados
const erroUser = document.getElementById('alert-error-user')


function addUser(){
    const addName = document.getElementById('add-user-name').value.trim().toLowerCase();
    const addEmail = document.getElementById('add-user-email').value.trim().toLowerCase();
    const addDate = new Date()
    const formattedDate = addDate.toISOString().split('T')[0]

    if (!addName && !addEmail) {
        erroUser.textContent = 'Por favor, preencha tanto o nome quanto o email.';
    } else if (!addName) {
        erroUser.textContent = 'O nome não pode estar vazio. Por favor, insira um nome válido.';
    } else if (!addEmail) {
        erroUser.textContent = 'O email não pode estar vazio. Por favor, insira um email válido.';
    } else if (!validateEmail(addEmail)) {
        erroUser.textContent = 'O email inserido não é válido. Por favor, insira um email no formato correto.';
    } else {
        erroUser.textContent = 'O usuário foi adicionado';

        const addNewUser = {
            name: addName,
            email: addEmail,
            registered: formattedDate
        };
        data.users.push(addNewUser);

        // fazendo atualização dos gráficos

        graficoBarra.data.datasets[0].data =[totalSessions,data.users.length];
        graficoBarra.update()
        
        //atualizando as métricas
        document.getElementById('register-users').textContent = data.users.length
        
        //limpando os inputs
        document.getElementById('add-user-name').value = '';
        document.getElementById('add-user-email').value = '';
        
        setTimeout(() => {
            erroUser.textContent= '';
        }, 500); 
       
      

        

    }

}


document.getElementById('add-user-button').addEventListener('click',()=>{
    const tableBody = document.querySelector('#user-data');
    tableBody.innerHTML = '';
    addUser();
    completeTable();
   
    

})

function validateEmail(email) {
    // Função simples para validar o formato do email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
