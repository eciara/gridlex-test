var btnMenu = document.querySelector('.navigation__icon');
var listMenu = document.querySelector('.navigation');


btnMenu.addEventListener('click', function(){
    console.log("test");
    listMenu.classList.toggle('menu-open');
}, false)

