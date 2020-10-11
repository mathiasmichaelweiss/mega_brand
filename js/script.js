'use strict';

window.addEventListener('DOMContentLoaded', () => {

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

    new Shop(
        "Ул. Пушкина, 68",
        "90%",
        "pyshkina",
        ".current__shops-container"
    ).render();

    new Shop(
        "Ул. Жукова, 68/2",
        "90%",
        "pyshkina",
        ".current__shops-container"
    ).render();

    new Shop(
        "Ул. Красных фонарей, 12к2",
        "96%",
        "pyshkina",
        ".current__shops-container"
    ).render();


    // Activate shops und scroll

    const activeShop = document.querySelectorAll('.current__shop'),
        containerForScroll = document.querySelector('.forscroll'),
        shopsContainer = document.querySelector('.shops__window'),
        shopContainerInner = document.querySelector('.current__shops-container');

    function addScroll(firstContainer, secondContainer) {
        if (firstContainer.style.height >= secondContainer.style.height) {
            firstContainer.style.overflowY = 'scroll';
        }
    }

    addScroll(shopContainerInner, shopsContainer);

    function activateShop(elem) {
        elem.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                for (i = 0; i < elem.length; i++) {
                    if (elem[i].classList.contains('current__shop-active')) {
                        elem[i].classList.remove('current__shop-active');
                    }
                    item.classList.add('current__shop-active');

                }
            });
        });
    }

    activateShop(activeShop);

    // calendar

    const calendarItem = document.querySelectorAll('.calendar__item'),
        calendarPercent = document.querySelectorAll('.percent');

    calendarItem.forEach(item => {

        item.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains("percent")) {
                e.target.style.color = "#1D1D1D";
            }
        });

        item.addEventListener('mouseout', (e) => {
            if (e.target.classList.contains("percent")) {
                e.target.style.color = "";
            }
        });

    });

    // class news

    class News {
        constructor(id, newsLatter, title, date, text, parentSelector) {
            this.id = id;
            this.newsLatter = newsLatter;
            this.title = title;
            this.date = date;
            this.text = text;
            this.parent = document.querySelector(parentSelector);

        }

        render() {
            const elem = document.createElement('div');

            elem.classList.add('news__item-block');
            this.newsLatter = this.title[0];
            elem.id = this.id;

            elem.innerHTML = `
            <div class="news__item">
                <div class="item__cirlce">
            <p class="news__latter">${this.newsLatter}</p>
                </div>
                <div class="news__content">
                    <div class="news__item-title">${this.title}</div>
                    <div class="news__date">${this.date}</div>
                    <p class="news__item-text">${this.text}</p>
                </div>
            </div>
            <div class="news__item-line"></div>
        `;

            this.parent.append(elem);

        }
    }

    new News(
        "r",
        "",
        "Розыгрыш",
        "12.10.20",
        "Стартовал розыгрыш в нашем аккаунте Instagram.",
        ".container__news",
        ".item__cirlce",
        "'#1d1d1d'"
    ).render();

    new News(
        "o",
        "",
        "Открытие",
        "12.10.20",
        "Стартовал розыгрыш в нашем аккаунте Instagram.",
        ".container__news"
    ).render();

    new News(
        "ch",
        "",
        "Часы работы",
        "12.10.20",
        "Стартовал розыгрыш в нашем аккаунте Instagram.",
        ".container__news"
    ).render();

    new News(
        "o",
        "",
        "Открытие",
        "12.10.20",
        "Стартовал розыгрыш в нашем аккаунте Instagram.",
        ".container__news"
    ).render();

    new News(
        "r",
        "",
        "Розыгрыш",
        "12.10.20",
        "Стартовал розыгрыш в нашем аккаунте Instagram.",
        ".container__news"
    ).render();

    function changeElemColor(index, color) {
        document.querySelectorAll('.item__cirlce')[index].style.backgroundColor = color;
    }

    changeElemColor(0, '#E30613');
    changeElemColor(1, '#E25011');
    changeElemColor(2, '#FFB800');
    changeElemColor(3, '#0BBBEF');
    changeElemColor(4, '#2DB346');

    const newsScrall = document.querySelector('.news__block-scroll'),
    newsCointainer = document.querySelector('.container__news');

    addScroll(newsScrall, newsCointainer);

});