'use strict';

window.onload = function () {
    const logo = document.querySelector('.m-logo');
    logo.style.backgroundImage = "url(./img/logo_mega_once.gif)";
    document.querySelectorAll('.burger__icon-mobile').forEach(item => {
        item.classList.remove('burger__icon-active')
    });
}

function animateMenuBurger(icon, menuBurger, navMouse, navActive) {
    const burgerIcon = document.querySelector(icon),
        burgerLocation = document.querySelector(menuBurger),
        nav = document.querySelectorAll(navMouse),
        navActivate = document.querySelector(navActive),
        burgerIconMobile = document.querySelector('.burger__icon-mobile');

    if (document.querySelector('.container').clientWidth < 421) {
        burgerIcon.classList.add('burger__icon-active');
        document.querySelector('.container__nav-mobile').style.display = 'none';
    } else {
        burgerIcon.classList.remove('burger__icon-active');
        document.querySelector('.container__nav-mobile').style.display = 'block';
    }

    function displayNoneOnTIme() {
        if (document.querySelector('.container').clientWidth < 421) {
            document.querySelectorAll('.nav-mouse').forEach(item => {
                /* window.setTimeout(() => { */
                item.style.display = 'none';
                document.querySelector('.container__nav-mobile').style.display = 'none';
                /* }, 300); */
            });
        }
    }

    function displayBlock() {
        if (document.querySelector('.container').clientWidth < 421) {
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

function animateBtn(btn) {
    btn.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.classList.add('animate__btn-mousover');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('animate__btn-mousover');
        });
    });
}

// reg modal
const regModal = document.querySelector('.reg'),
    enterModal = document.querySelector('.enter__form'),
    closeRegModal = document.querySelectorAll('.close'),
    closeRegModalBody = document.querySelector('.close__body'),
    openRegModal = document.querySelector('.persarea'),
    regModalBody = document.querySelector('.reg__body'),
    enterModalBody = document.querySelector('.enter__body'),
    regBtn = document.querySelectorAll('.reg__btn'),
    viewPassBtn = document.querySelector('.view-reg'),
    viewBtnEnter = document.querySelector('.view-enter'),
    passInput = document.querySelector('#new-password'),
    passInputEnter = document.querySelector('#password-enter'),
    closeBtn = document.querySelectorAll('.close__btn');


function openModal(modal, openBtn) {
    openBtn.addEventListener('click', () => {
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
        modal.style.transition = 'all 0.8s ease';
    });
}

function closeModal(modal, closeBtn, closeOnBody, btn) {
    closeOnBody.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-close') == '1') {
            modal.style.opacity = '0';
            modal.style.visibility = 'hidden';
            modal.style.transition = 'all 0.8s ease';
        }
    });

    closeBtn.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.opacity = '0';
            modal.style.visibility = 'hidden';
            modal.style.transition = 'all 0.8s ease';
        });
    });

    btn.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.opacity = '0';
            modal.style.visibility = 'hidden';
            modal.style.transition = 'all 0.8s ease';
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            modal.style.opacity = '0';
            modal.style.visibility = 'hidden';
            modal.style.transition = 'all 0.8s ease';
        }
    });
}

openModal(regModal, openRegModal);
closeModal(regModal, closeRegModal, regModalBody, regBtn);
closeModal(enterModal, closeRegModal, enterModalBody, regBtn);
animateBtn(closeBtn, closeRegModalBody);

const vacanciesItem = document.querySelectorAll('.vacancies-item'),
    vacanciesItemContainer = document.querySelectorAll('.vacan-item-container');

vacanciesItem.forEach((item, i) => {
    item.addEventListener('click', () => {
        vacanciesItemContainer[i].classList.toggle('vac__opened');
    });
});