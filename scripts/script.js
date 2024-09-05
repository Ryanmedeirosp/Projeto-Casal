const sideBar =  document.getElementById('sidebar');
const imgMenuSideBar =  document.getElementById('img-menu-sidebar');
const side_item = document.querySelectorAll(".side-item");
const orderName =  document.getElementById('order-name');
const orderData =  document.getElementById('order-data');
const orderEmail =  document.getElementById('order-email');


// Inicializa as funções
window.onload = () =>{
    createChart();
    completeTable();
    updatePerformanceIndicators();
    alterarActive();

    // Para o primeiro item do sideBar ficar ativo
    //já que ele é o da visão geral e é o primeiro a estar ativo
    side_item[0].classList.add('active');
  
}
    
