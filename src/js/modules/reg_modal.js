'use strict';

function regModal() {
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


    // viewPassBtn passInput
    function viewPass(btn, input) {
        btn.addEventListener('click', () => {
            if (input.getAttribute('type') == 'password') {
                input.setAttribute('type', 'text');
                btn.style.backgroundImage = 'url(src/img/icons/view2.svg)';
                btn.style.opacity = '1';
            } else {
                input.setAttribute('type', 'password');
                btn.style.backgroundImage = 'url(img/icons/view.svg)';
                btn.style.opacity = '0.5';
            }
        });
    }

    viewPass(viewPassBtn, passInput);
    viewPass(viewBtnEnter, passInputEnter);

    const SwitchRegBtn = document.querySelectorAll('.change__modal__to-reg'),
        SwitchRegBtn2 = document.querySelectorAll('.change__modal__to-enter');


    function switchRegEnter(btn, btn2, modal, modal2) {
        btn.forEach(item => {
            item.addEventListener('click', () => {
                modal.style.opacity = '0';
                modal.style.visibility = 'hidden';
                modal.style.transition = '';

                modal2.style.opacity = '1';
                modal2.style.visibility = 'visible';
                modal2.style.transition = '';
            });
        });

        btn2.forEach(item => {
            item.addEventListener('click', () => {
                modal2.style.opacity = '0';
                modal2.style.visibility = 'hidden';
                modal2.style.transition = '';

                modal.style.opacity = '1';
                modal.style.visibility = 'visible';
                modal.style.transition = '';
            });
        });

    }

    switchRegEnter(SwitchRegBtn, SwitchRegBtn2, enterModal, regModal);
}

export default regModal;