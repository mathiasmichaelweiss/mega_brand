'use strict';

import animateBtn from './animation_btn.js';


function mainSlider(argumentCurrentShop, argumentWrapper, argumentSlideGround, argumentSlides, argumentStreet, argumentSale, argumentSliderBtnMoreAboutShop) {
    const currentShop = document.querySelectorAll(argumentCurrentShop),
        wrapper = document.querySelector(argumentWrapper),
        slideGround = document.querySelector(argumentSlideGround),
        slides = document.querySelectorAll(argumentSlides),
        width = window.getComputedStyle(wrapper).width,
        street = document.querySelectorAll(argumentStreet),
        sale = document.querySelectorAll(argumentSale),
        sliderBtnMoreAboutShop = document.querySelectorAll(argumentSliderBtnMoreAboutShop);


    let slideIndex = 1,
        offset = 0;

    slideGround.style.width = 100 * slides.length + '%'; // Размер ширины блока со всеми слайдами
    slideGround.style.display = 'flex'; // Выстраивание всех слайдов по горизонтали
    slideGround.style.transition = '0.5s all'; // Плавное переключение слайдов

    wrapper.style.overflow = 'hidden';

    // Устанавливаeт всем слайдерам одинаковую ширину
    slides.forEach(slide => {
        slide.style.width = width;
    });

    function addDataAtribute(n) {
        for (let i = 0; i < slides.length; i++) {
            n[i].setAttribute('data-slide-to', i + 1);
        }
    }

    addDataAtribute(currentShop);
    addDataAtribute(street);
    addDataAtribute(sale);
    addDataAtribute(sliderBtnMoreAboutShop);
    console.log(sliderBtnMoreAboutShop);



    currentShop.forEach(shop => {
        shop.addEventListener('click', (e) => {
            e.preventDefault();
            const slideTo = e.target.getAttribute('data-slide-to');


            slideIndex = slideTo;
            offset = +width.replace('px', '') * (slideTo - 1);
            slideGround.style.transform = `translateX(-${offset}px)`;
        });
    });
    animateBtn(sliderBtnMoreAboutShop);
}

export default mainSlider;