'use strict';

const burgerIcon = document.querySelector('.burger__icon'),
    burgerLocation = document.querySelector('.menu__burger'),
    burgerTitle = document.querySelector('.title__menu-burger'),
    nav = document.querySelectorAll('a'),
    navActivate = document.querySelector('.nav');


burgerLocation.addEventListener('click', () => {
    burgerIcon.classList.toggle('burger__icon-active');
    if (navActivate.classList.contains('nav__position')) {
        navActivate.classList.remove('nav__position');
        navActivate.classList.add('nav__position-active');
    } else {
        navActivate.classList.add('nav__position');
        navActivate.classList.remove('nav__position-active');
    }
});

nav.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('nav__mouseover');
    });

    item.addEventListener('mouseout', () => {
        item.classList.remove('nav__mouseover');
    });
});

// menu__burger-active

/* .nav__position {
    position: relative;
    left: 110%;
}

.nav__position-active{
    position: relative;
    left: 0%;
} */