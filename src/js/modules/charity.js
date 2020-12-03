'use strict';

function charity() {
    // charity
    const doingItem = document.querySelectorAll('.doing__item'),
        dot = document.querySelectorAll('.slider__dot'),
        charityBg = document.querySelector('.bg__charity');

    // Функция предзагрузки изображений
    function preloadImages() {
        for (let i = 0; i < arguments.length; i++) {
            new Image().src = arguments[i];
        }
    }

    preloadImages(
        'src/img/charity_slider_image/blago_1.jpg',
        'src/img/charity_slider_image/blago_2.jpg',
        'src/img/charity_slider_image/blago_3.jpg'
    );

    const images = [
        'rgba(0, 0, 0, 0.2)  url(src/img/charity_slider_image/blago_1.jpg)',
        'rgba(0, 0, 0, 0.2)  url(src/img/charity_slider_image/blago_2.jpg)',
        'rgba(0, 0, 0, 0.2)  url(src/img/charity_slider_image/blago_3.jpg)'
    ];

    function changeBg(n, i, n2) {
        n[i].addEventListener('click', () => {

            charityBg.style.background = images[i];
            charityBg.style.transition = 'background 0.5s';

            for (let j = 0; j < n2.length; j++) {
                if (n2[j].classList.contains('active__dot')) {
                    n2[j].classList.remove('active__dot');
                }
                n2[i].classList.add('active__dot');
            }

        });
    }

    changeBg(dot, 0, dot);
    changeBg(dot, 1, dot);
    changeBg(dot, 2, dot);
    changeBg(doingItem, 0, dot);
    changeBg(doingItem, 1, dot);
    changeBg(doingItem, 2, dot);
}

export default charity;