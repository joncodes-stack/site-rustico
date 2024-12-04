

var menu = document.querySelector('.menu');
var btnMenu = document.querySelector('.btn-menu');

function menuMobile (){
    menu.classList.toggle('show')
    btnMenu.classList.toggle('x')
}

btnMenu.addEventListener('click', menuMobile);