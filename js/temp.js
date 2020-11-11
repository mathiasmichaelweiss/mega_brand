'use strict';

window.addEventListener('DOMContentLoaded', () => {

    var slider = tns({
        container: '#fixedWidth',
        "fixedWidth": 200,
        "gutter": 90,
        "swipeAngle": false,
        "speed": 400,
        autoplayButtonOutput: false,
        autoplay: true,
        controls: false
    });

    function animateMenuBurger(icon, menuBurger, navMouse, navActive) {
        const burgerIcon = document.querySelector(icon),
            burgerLocation = document.querySelector(menuBurger),
            nav = document.querySelectorAll(navMouse),
            navActivate = document.querySelector(navActive);

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
    }

    animateMenuBurger('.burger__icon', '.menu__burger', '.nav-mouse', '.nav');
    animateMenuBurger('.burger__icon-mobile', '.menu__burger-mobile', '.nav-mouse-mobile', '.nav-mobile');

    // fixed menu
    if (document.body.clientWidth >= 913) {
        window.onscroll = function showMenu() {
            const menu = document.querySelector('.container__menu'),
                nav = document.querySelector('.nav__position-active');

            if (window.pageYOffset > 140) {
                menu.classList.add('container__menu-fixed');
                nav.classList.add('nav__position-active-fixed');
            } else {
                menu.classList.remove('container__menu-fixed');
                nav.classList.remove('nav__position-active-fixed');
            }
        };
    }

    // anchors
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const blockID = anchor.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    function addScroll(firstContainer, secondContainer) {
        if (firstContainer.style.height >= secondContainer.style.height) {
            firstContainer.style.overflowY = 'scroll';
        }
    }

    const reviewScrall = document.querySelector('.reviews-scrall'),
        reviewContainer = document.querySelector('.reviews-container');
    addScroll(reviewContainer, reviewScrall);

});