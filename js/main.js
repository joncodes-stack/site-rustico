

var menu = document.querySelector('.menu');
var btnMenu = document.querySelector('.btn-menu');

function menuMobile (){
    menu.classList.toggle('show')
}

btnMenu.addEventListener('click', menuMobile);