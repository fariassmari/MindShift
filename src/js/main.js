const btnMenu = document.getElementById('btn-menu');
const menuLateral = document.getElementById('menu-lateral');
const btnFechar = document.getElementById('btn-fechar');

btnMenu.addEventListener('click',() => {
    menuLateral.style.width = '250px';
})

btnFechar.addEventListener('click', () => {
    menuLateral.style.width = '0';
})