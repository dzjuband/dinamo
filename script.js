const btnmenu = document.querySelector('.header__btn-menu');

document.querySelector('.header__btn-menu').addEventListener('click',function(){
    document.querySelector('.header__btn-menu').classList.toggle('header__btn-menu--open');
    document.querySelector('.header__nav').classList.toggle("header__nav--open")
})
