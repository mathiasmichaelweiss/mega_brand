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

    function activateElem(elem, activeClass) {
        elem.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                for (i = 0; i < elem.length; i++) {
                    if (elem[i].classList.contains(activeClass)) {
                        elem[i].classList.remove(activeClass);
                    }
                    item.classList.add(activeClass);

                }
            });
        });
    }

    activateElem(activeShop, 'current__shop-active');

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
        constructor(id, newsLatter, title, date, text, parentSelector, newsTitle) {
            this.id = id;
            this.newsLatter = newsLatter;
            this.title = title;
            this.date = date;
            this.text = text;
            this.parent = document.querySelector(parentSelector);
            this.newsTitle = newsTitle;

        }

        render() {
            // news in left side
            const leftElem = document.createElement('div');
            leftElem.classList.add('left__block');

            leftElem.innerHTML = `

            <div class="news__subtitle-container">
                    <p class="news__subtitle-text">${this.title}</p>
                </div>
                <div class="news__title">${this.newsTitle}</div>
                <div class="news__text">
                    <p>${this.text}</p>
            </div>
            <button class="more__about">Подробности</button>

            `;

            // news in right side
            const elem = document.createElement('div');

            elem.classList.add('news__item-block');
            this.newsLatter = this.title[0];
            elem.id = this.id;

            elem.innerHTML = `
            <div class="container__news__item">
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
            </div>
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
        'В магазине по адресу, ул.Лыткина 3, открылся отдел товаров "Сток".',
        ".container__news"
    ).render();

    new News(
        "ch",
        "",
        "Часы работы",
        "12.10.20",
        "Магазин по адресу, ул.Ленина 163а, теперь работает с 09:00 до 21:00 ",
        ".container__news"
    ).render();

    new News(
        "o",
        "",
        "Открытие",
        "12.10.20",
        "Открылся новый магазин по адресу, ул.Крылова 6а, часы работы с 10:00 до 20:00.",
        ".container__news"
    ).render();

    new News(
        "r",
        "",
        "Розыгрыш",
        "12.10.20",
        "Стартовал розыгрыш  в нашем Instagram. Главный приз сертификат на 10 000 рублей! ",
        ".container__news"
    ).render();


    const newsScroll = document.querySelector('.news__block-scroll'),
        newsCointainer = document.querySelector('.container__news'),
        itemBlock = document.querySelectorAll('.container__news__item'),
        newsItemTitle = document.querySelectorAll('.news__item-title'),
        newsItemText = document.querySelectorAll('.news__item-text'),
        newsTitle = document.querySelector('.news__title'),
        newsText = document.querySelector('.news__text'),
        newsSubtitle = document.querySelector('.news__subtitle-text');


    function changeElemColor(index, color) {
        document.querySelectorAll('.item__cirlce')[index].style.backgroundColor = color;
    }

    function changeNewsContent(elemTitle, elemText, elemSubtitle, elemSubtitleContent) {
        itemBlock.forEach(item => {
            item.addEventListener('click', (e) => {
                elemText.textContent = newsItemText[0].textContent;
                elemTitle.textContent = elemSubtitleContent;
                elemSubtitle.textContent = newsItemTitle[0].textContent;
            });
        });
    }

    changeNewsContent(newsTitle, newsText, newsSubtitle, 'Instagram розыгрыш');

    changeElemColor(0, '#E30613');
    changeElemColor(1, '#E25011');
    changeElemColor(2, '#FFB800');
    changeElemColor(3, '#0BBBEF');
    changeElemColor(4, '#2DB346');

    addScroll(newsScroll, newsCointainer);

    activateElem(itemBlock, 'container__news__item-active');

});