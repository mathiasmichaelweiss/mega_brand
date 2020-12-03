'use strict';

function menuScroll() {
    // fixed menu
    if (document.body.clientWidth >= 913) {
        window.onscroll = function showMenu() {
            const menu = document.querySelector('.container__menu'),
                nav = document.querySelector('.nav__position-active'),
                containerNav = document.querySelector('.container__nav'),
                navMouse = document.querySelectorAll('.nav-mouse'),
                navMouseHorison = document.querySelectorAll('.nav-mouse-horison');

            if (window.pageYOffset > 138) {
                document.querySelector('.burger__icon').classList.remove('burger__icon-active');
                document.querySelector('.nav').classList.remove('nav__position');
                document.querySelector('.nav').classList.add('nav__position-active');
                menu.classList.add('horison-container');
                containerNav.classList.add('horison-nav-container');
                navMouse.forEach(item => {
                    item.classList.add('nav-mouse-horison');
                    item.classList.remove('nav-mouse');
                });

            } else {
                document.querySelector('.burger__icon').classList.add('burger__icon-active');
                document.querySelector('.nav').classList.remove('nav__position-active');
                document.querySelector('.nav').classList.add('nav__position');
                menu.classList.remove('horison-container');
                containerNav.classList.remove('horison-nav-container');
                navMouseHorison.forEach(item => {
                    item.classList.add('nav-mouse');
                    item.classList.remove('nav-mouse-horison');
                });
            }

            if (window.pageYOffset > 140) {
                menu.classList.add('container__menu-fixed');
                nav.classList.add('nav__position-active-fixed');

            } else {
                menu.classList.remove('container__menu-fixed');
                nav.classList.remove('nav__position-active-fixed');
            }
        };
    } else {
        document.querySelector('.burger__icon-mobile').classList.remove('burger__icon-active');
    }
}

export default menuScroll;