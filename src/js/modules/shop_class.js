'use strict';

function shopClass() {
    class Shop {
        constructor(street, currentSale, id, parentSelector, slideImage, slideParent, activeClass) {
            this.id = id;
            this.street = street;
            this.currentSale = currentSale;
            this.parent = document.querySelector(parentSelector);
            this.slideImage = slideImage;
            this.sParent = document.querySelector(slideParent);
            this.activeClass = activeClass;
        }

        render() {
            const elem = document.createElement('div');

            elem.classList.add('current__shop');
            elem.classList.add(this.activeClass);
            elem.id = this.id;

            elem.innerHTML = `
            <p class="street">${this.street}</p>
            <p class="current__sale">${this.currentSale}</p>
            `;

            this.parent.append(elem);

            const slide = document.createElement('div');

            slide.classList.add('slide');
            slide.id = elem.id;

            slide.innerHTML = `
            <div class="about-btn-container">
            <a href="more_about_shop.html" class="more-about-btn" >Подробнее о магазине</a>
            </div>
            <img src="${this.slideImage}" alt="">
            `;

            this.sParent.append(slide);
        }
    }

    new Shop(
        'Ул. Пушкина, 61 стр. 1',
        '50%',
        '1',
        '.current__shops-container',
        'src/img/slider_img/slide_1.jpg',
        '.slider__inner',
        'current__shop-active'
    ).render();

    new Shop(
        'Ул. Ленина, 163а ТЦ “Гранд”',
        '50%',
        '2',
        '.current__shops-container',
        'src/img/slider_img/slide_2.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        'Ул. Лыткина, 3',
        '50%',
        '3',
        '.current__shops-container',
        'src/img/slider_img/slide_3.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        'Ул. Иркутский тракт, 155',
        '10%',
        '4',
        '.current__shops-container',
        'src/img/slider_img/slide_4.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        'Ул. Мир, 50',
        '10%',
        '5',
        '.current__shops-container',
        'src/img/slider_img/slide_5.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        'Ул. Пушкина, 68',
        '90%',
        '6',
        '.current__shops-container',
        'src/img/slider_img/slide_6.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        'Ул. Жукова, 68/2',
        '90%',
        '7',
        '.current__shops-container',
        'src/img/slider_img/slide_7.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        'Ул. Красных фонарей, 12к2',
        '10%',
        '8',
        '.current__shops-container',
        'src/img/slider_img/slide_8.jpg',
        '.slider__inner'
    ).render();
}

module.exports = shopClass;