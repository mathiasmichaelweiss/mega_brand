'use strict';

const burgerIcon = document.querySelector('.burger__icon'),
    burgerLocation = document.querySelector('.menu__burger'),
    burgerTitle = document.querySelector('.title__menu-burger'),
    nav = document.querySelectorAll('a'),
    navActivate = document.querySelector('.nav');


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

// Shop Class

class Shop {
    constructor(street, currentSale, id, parentSelector) {
        this.id = id;
        this.street = street;
        this.currentSale = currentSale;
        this.parent = document.querySelector(parentSelector);

    }

    render() {
        const elem = document.createElement('div');

        elem.classList.add('current__shop');
        elem.id = this.id;

        elem.innerHTML = `
            <div class="street">${this.street}</div>
            <div class="current__sale">${this.currentSale}</div>
        `;

        this.parent.append(elem);
    }
}

new Shop(
    "Ул. Пушкина, 61 стр. 1",
    "50%",
    "pyschkina",
    ".current__shops-container"
).render();

new Shop(
    "Ул. Ленина, 163а ТЦ “Гранд”",
    "50%",
    "lenina",
    ".current__shops-container"
).render();

new Shop(
    "Ул. Лыткина, 3",
    "50%",
    "lytkia",
    ".current__shops-container"
).render();

new Shop(
    "Ул. Иркутский тракт, 155",
    "10%",
    "irkytzkiy",
    ".current__shops-container"
).render();

new Shop(
    "Ул. Мир, 50",
    "10%",
    "mir",
    ".current__shops-container"
).render();

const shopSelector = document.createElement('div');
