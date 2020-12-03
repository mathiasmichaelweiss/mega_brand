'use strict';

function burger() {
    function animateMenuBurger(icon, menuBurger, navMouse, navActive) {
        const burgerIcon = document.querySelector(icon),
            burgerLocation = document.querySelector(menuBurger),
            nav = document.querySelectorAll(navMouse),
            navActivate = document.querySelector(navActive),
            burgerIconMobile = document.querySelector('.burger__icon-mobile');

        if (document.querySelector('.container').clientWidth < 750) {
            burgerIcon.classList.add('burger__icon-active');
            document.querySelector('.container__nav-mobile').style.display = 'none';
        } else {
            burgerIcon.classList.remove('burger__icon-active');
            document.querySelector('.container__nav-mobile').style.display = 'block';
        }

        function displayNoneOnTIme() {
            if (document.querySelector('.container').clientWidth < 750) {
                document.querySelectorAll('.nav-mouse').forEach(item => {
                    /* window.setTimeout(() => { */
                    item.style.display = 'none';
                    document.querySelector('.container__nav-mobile').style.display = 'none';
                    /* }, 300); */
                });
            }
        }

        function displayBlock() {
            if (document.querySelector('.container').clientWidth < 750) {
                document.querySelectorAll('.nav-mouse').forEach(item => {
                    item.style.display = 'inline-block';
                    document.querySelector('.container__nav-mobile').style.display = 'block';
                });
            }
        }

        burgerLocation.addEventListener('click', () => {
            burgerIcon.classList.toggle('burger__icon-active');
            if (navActivate.classList.contains('nav__position')) {
                window.setTimeout(() => {
                    navActivate.classList.remove('nav__position');
                    navActivate.classList.add('nav__position-active');
                    burgerIconMobile.classList.add('burger__icon-mobile-white');
                }, 300);

                displayBlock();
            } else {
                window.setTimeout(() => {
                    navActivate.classList.add('nav__position');
                    navActivate.classList.remove('nav__position-active');
                }, 300);
                burgerIconMobile.classList.remove('burger__icon-mobile-white');
                displayNoneOnTIme();
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
}

export default burger;