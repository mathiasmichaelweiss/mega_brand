'use strict';

function loadLogo() {
    window.onload = function () {
        const logo = document.querySelector('.m-logo');
        logo.style.backgroundImage = "url(src/img/logo_mega_once.gif)";
        document.querySelectorAll('.burger__icon-mobile').forEach(item => {
            item.classList.remove('burger__icon-active')
        });
    }
}

module.exports = loadLogo;