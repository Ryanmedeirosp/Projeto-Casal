// Função para abrir e fechar o sideBar

document.getElementById('menu-img-button').addEventListener("click",()=>{
    sideBar.classList.toggle('open-sidebar')
    imgMenuSideBar.classList.toggle('reverse')
})

// Função para alterar qual campo está ativo

function alterarActive () {

    for (let index = 0; index < side_item.length; index++) {
        if (side_item[index].classList.contains('active')) {

            side_item[index].classList.remove('active')
         
        }
        side_item[index].addEventListener("click",()=>{
            side_item[index].classList.add('active')
        })
    }
}



// Essa parte é para redirecionar tanto no clicando na imagem tanto no item da lista
function sideContains(){
    if (sideBar.classList.contains('open-sidebar')) {
        sideBar.classList.toggle('open-sidebar')
        imgMenuSideBar.classList.toggle('reverse')
        }  
}
side_item[0].addEventListener('click', () => {
    sideContains()
    window.location.href = '#logo'; 
    
});
side_item[1].addEventListener('click', () => {
    sideContains()
    window.location.href = '#container-metrics';
});


side_item[2].addEventListener('click', () => {
    sideContains()
    window.location.href = '#content-chart';
});

side_item[3].addEventListener('click', () => {
    sideContains()
    window.location.href = '#div-user-table';
});

