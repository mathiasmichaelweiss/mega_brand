'use strict';

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