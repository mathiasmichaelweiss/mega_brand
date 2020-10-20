'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const burgerIcon = document.querySelector('.burger__icon'),
        burgerLocation = document.querySelector('.menu__burger'),
        burgerTitle = document.querySelector('.title__menu-burger'),
        nav = document.querySelectorAll('.nav-mouse'),
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

    // fixed menu

    window.onscroll = function showMenu() {

        const menu = document.querySelector('.container__menu'),
            nav = document.querySelector('.nav__position-active');

        if (window.pageYOffset > 140) {
            menu.classList.add('container__menu-fixed');
            nav.classList.add('nav__position-active-fixed');
        } else {
            menu.classList.remove('container__menu-fixed');
            nav.classList.remove('nav__position-active-fixed');

        }
    };

    // anchors

    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();

            const blockID = anchor.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Shop Class

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
            <img src="${this.slideImage}" alt="">
            `;

            this.sParent.append(slide);

        }

    }

    new Shop(
        "Ул. Пушкина, 61 стр. 1",
        "50%",
        "1",
        ".current__shops-container",
        'img/slider_img/slide_1.jpg',
        '.slider__inner',
        'current__shop-active'
    ).render();

    new Shop(
        "Ул. Ленина, 163а ТЦ “Гранд”",
        "50%",
        "2",
        ".current__shops-container",
        'img/slider_img/slide_2.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        "Ул. Лыткина, 3",
        "50%",
        "3",
        ".current__shops-container",
        'img/slider_img/slide_3.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        "Ул. Иркутский тракт, 155",
        "10%",
        "4",
        ".current__shops-container",
        'img/slider_img/slide_4.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        "Ул. Мир, 50",
        "10%",
        "5",
        ".current__shops-container",
        'img/slider_img/slide_5.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        "Ул. Пушкина, 68",
        "90%",
        "6",
        ".current__shops-container",
        'img/slider_img/slide_6.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        "Ул. Жукова, 68/2",
        "90%",
        "7",
        ".current__shops-container",
        'img/slider_img/slide_7.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        "Ул. Красных фонарей, 12к2",
        "10%",
        "8",
        ".current__shops-container",
        'img/slider_img/slide_8.jpg',
        '.slider__inner'
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

    // slider

    function mainSlider() {
        const currentShop = document.querySelectorAll('.current__shop'),
            wrapper = document.querySelector('.wrapper'),
            slideGround = document.querySelector('.slider__inner'),
            slides = document.querySelectorAll('.slide'),
            width = window.getComputedStyle(wrapper).width,
            street = document.querySelectorAll('.street'),
            sale = document.querySelectorAll('.current__sale');


        let slideIndex = 1,
            offset = 0;


        slideGround.style.width = 100 * slides.length + '%'; // Размер ширины блока со всеми слайдами
        slideGround.style.display = 'flex'; // Выстраивание всех слайдов по горизонтали
        slideGround.style.transition = '0.5s all'; // Плавное переключение слайдов

        wrapper.style.overflow = 'hidden';

        // Устанавливаем всем слайдерам одинаковую ширину
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

        function removeNumbers(str) {
            return +str.replace(/\D/g, '');
        }

        currentShop.forEach(shop => {

            shop.addEventListener('click', (e) => {
                e.preventDefault();
                const slideTo = e.target.getAttribute('data-slide-to');

                slideIndex = slideTo;
                offset = removeNumbers(width) * (slideTo - 1);
                slideGround.style.transform = `translateX(-${offset}px)`;


            });
        });
    }
    mainSlider();

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
    class NewsTab {
        constructor(image, subTitle, newsTitle, text, parentSelector) {
            this.image = image;
            this.subTitle = subTitle;
            this.newsTitle = newsTitle;
            this.text = text;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const elem = document.createElement('div');
            elem.classList.add('tabcontent');

            elem.innerHTML = `
                    <div class="darkbg-container">
                    <div class="darkbg"></div>
                    <img src="${this.image}">
                    </div>
                    <div class="tabcontent__descr">
                        <div class="news__subtitle-container">
                            <p class="news__subtitle-text">${this.subTitle}</p>
                        </div>
                        <div class="news__title">${this.newsTitle}</div>
                        <div class="news__text">
                            <p>${this.text}</p>
                        </div>
                        <button class="more__about">Подробности</button>
                    </div>
            `;

            this.parent.prepend(elem);
        }
    }

    class NewsMenuItem {
        constructor(newsLatter, title, date, text, parentSelector, activeClass) {
            this.newsLatter = newsLatter;
            this.title = title;
            this.date = date;
            this.text = text;
            this.parent = document.querySelector(parentSelector);
            this.activeClass = activeClass;


        }
        render() {
            const elem = document.createElement('div');

            elem.classList.add('tabheader__item');
            this.newsLatter = this.title[0];
            elem.classList.add(this.activeClass);
            /* elem.classList.add(''); */


            elem.innerHTML = `
                    
                    <div class="news__item  tabclick">
                        <div class="item__cirlce">
                            <p class="news__latter">${this.newsLatter}</p>
                        </div>
                        <div class="news__content-title__date">
                            <div class="news__item-title">${this.title}</div>
                            <div class="news__date">${this.date}</div>
                        </div>
                        <div class="news__content-text">
                            <p class="news__item-text">${this.text}</p>
                        </div>
                    </div>
                    
                    
            `;

            this.parent.append(elem);
        }
    }

    new NewsTab(
        "img/news/img_3.jpg",
        "Розыгрыш",
        "Instagram розыгрыш! ура",
        "Стартовал розыгрыш в нашем Instagram. Главный приз сертификат на 10 000 рублей!",
        ".tabcontainer"

    ).render();

    new NewsMenuItem(
        "",
        "Розыгрыш",
        "12.10.20",
        'Стартовал розыгрыш в нашем аккаунте Instagram.',
        ".container__news",
        "tabheader__item_active",
    ).render();

    new NewsTab(
        "img/news/img_1.jpg",
        "Открытие",
        "Открылся новый магазин!",
        "Открылся новый магазин по адресу, ул.Крылова 6а, часы работы с 10:00 до 20:00.",
        ".tabcontainer"

    ).render();

    new NewsMenuItem(
        "",
        "Открытие",
        "12.10.20",
        'В магазине по адресу, ул.Лыткина 3, открылся отдел товаров "Сток".',
        ".container__news",
        "tabheader__item_active",
        "tabclick"
    ).render();

    new NewsTab(
        "img/news/img_2.jpg",
        "Часы работы",
        "Новый график на Ленина",
        "Магазин по адресу, ул.Ленина 163а, теперь работает с 09:00 до 21:00",
        ".tabcontainer"

    ).render();

    new NewsMenuItem(
        "",
        "Часы работы",
        "12.10.20",
        'Магазин по адресу, ул.Ленина 163а, теперь работает с 09:00 до 21:00',
        ".container__news",
        "tabheader__item_active",
        "tabclick"
    ).render();

    new NewsTab(
        "img/news/img_1.jpg",
        "Открытие",
        "Новый отдел на Лыткина!",
        "Открылся новый магазин по адресу, ул.Крылова 6а, часы работы с 10:00 до 20:00.",
        ".tabcontainer"

    ).render();

    new NewsMenuItem(
        "",
        "Открытие",
        "12.10.20",
        'Открылся новый магазин по адресу, ул.Крылова 6а, часы работы с 10:00 до 20:00.',
        ".container__news",
        "tabheader__item_active",
        "tabclick"
    ).render();

    new NewsTab(
        "img/news/img_3.jpg",
        "Розыгрыш",
        "Instagram розыгрыш",
        "Стартовал розыгрыш в нашем аккаунте Instagram.",
        ".tabcontainer"

    ).render();

    new NewsMenuItem(
        "",
        "Розыгрыш",
        "12.10.20",
        'Стартовал розыгрыш в нашем аккаунте Instagram.',
        ".container__news",
        "tabheader__item_active",
        "tabclick"
    ).render();


    const newsScroll = document.querySelector('.news__block-scroll'),
        newsCointainer = document.querySelector('.container__news'),
        itemBlock = document.querySelectorAll('.tabheader__item');



    function changeText(text, chooseMaxLength) {
        const maxLength = chooseMaxLength; //количество символов, которое должно отображаться
        const strNum = document.getElementsByClassName(text).length; //количество блоков с классом text
        for (let i = 0; i < strNum; i++) {
            const str = document.getElementsByClassName(text)[i].innerHTML; //текст
            document.getElementsByClassName(text)[i].innerHTML = str.slice(0, maxLength) + '...';
        }
    }

    changeText("news__item-text", 44);


    // tab content

    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent');


    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    function changeTabOnClick(clickElem) {
        clickElem.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                console.log(i);

                hideTabContent();
                showTabContent(i);
            });
        });

    }

    changeTabOnClick(tabs);

    function changeElemColor(index, color) {
        document.querySelectorAll('.item__cirlce')[index].style.backgroundColor = color;
    }

    changeElemColor(0, '#E30613');
    changeElemColor(1, '#E25011');
    changeElemColor(2, '#FFB800');
    changeElemColor(3, '#0BBBEF');
    changeElemColor(4, '#2DB346');

    addScroll(newsScroll, newsCointainer);

    activateElem(itemBlock, 'container__news__item-active');

    const newsSubtitle = document.querySelectorAll('.news__subtitle-container'),
        newsCircle = document.querySelectorAll('.item__cirlce');


    function subColorIsCircleColor() {
        for (let j = 0; j < newsCircle.length; j++) {

            newsSubtitle[j].style.backgroundColor = newsCircle[j].style.backgroundColor;
        }
    }
    subColorIsCircleColor();



    // Project photos

    const photoScrall = document.querySelector('.photo__scrall'),
        projectsCatalog = document.querySelector('.project__catalog');

    addScroll(photoScrall, projectsCatalog);


    // reg modal
    const regModal = document.querySelector('.reg'),
        enterModal = document.querySelector('.enter__form'),
        closeRegModal = document.querySelectorAll('.close'),
        openRegModal = document.querySelector('.personal__area'),
        regModalBody = document.querySelector('.reg__body'),
        enterModalBody = document.querySelector('.enter__body'),
        regBtn = document.querySelectorAll('.reg__btn'),
        viewPassBtn = document.querySelector('.view-reg'),
        viewBtnEnter = document.querySelector('.view-enter'),
        passInput = document.querySelector('#new-password'),
        passInputEnter = document.querySelector('#password-enter');


    function openModal(modal, openBtn) {
        openBtn.addEventListener('click', () => {
            modal.style.opacity = "1";
            modal.style.visibility = "visible";
            modal.style.transition = "all 0.8s ease";
        });
    }

    function closeModal(modal, closeBtn, closeOnBody, btn) {
        closeOnBody.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-close') == '1') {
                modal.style.opacity = "0";
                modal.style.visibility = "hidden";
                modal.style.transition = "all 0.8s ease";
            }

        });

        closeBtn.forEach(item => {
            item.addEventListener('click', () => {
                modal.style.opacity = "0";
                modal.style.visibility = "hidden";
                modal.style.transition = "all 0.8s ease";
            });
        });

        btn.forEach(item => {
            item.addEventListener('click', () => {
                modal.style.opacity = "0";
                modal.style.visibility = "hidden";
                modal.style.transition = "all 0.8s ease";
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') { // 
                modal.style.opacity = "0";
                modal.style.visibility = "hidden";
                modal.style.transition = "all 0.8s ease";
            }
        });
    }

    openModal(regModal, openRegModal);
    closeModal(regModal, closeRegModal, regModalBody, regBtn);
    closeModal(enterModal, closeRegModal, enterModalBody, regBtn);

    /* viewPassBtn
    passInput */
    function viewPass(btn, input) {
        btn.addEventListener('click', () => {
            if (input.getAttribute('type') == 'password') {
                input.setAttribute('type', 'text');
                btn.style.backgroundImage = 'url(img/icons/view2.svg)';
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
                modal.style.opacity = "0";
                modal.style.visibility = "hidden";
                modal.style.transition = "";

                modal2.style.opacity = "1";
                modal2.style.visibility = "visible";
                modal2.style.transition = "";

            });
        });

        btn2.forEach(item => {
            item.addEventListener('click', () => {
                modal2.style.opacity = "0";
                modal2.style.visibility = "hidden";
                modal2.style.transition = "";

                modal.style.opacity = "1";
                modal.style.visibility = "visible";
                modal.style.transition = "";

            });
        });

    }

    switchRegEnter(SwitchRegBtn, SwitchRegBtn2, enterModal, regModal);

    // charity

    const doingItem = document.querySelectorAll('.doing__item'),
        dot = document.querySelectorAll('.slider__dot'),
        charityBg = document.querySelector('.bg__charity');


    const images = [
        'rgba(45, 179, 70, 0.4) url(img/charity_slider_image/blago_1.jpg)',
        'rgba(45, 179, 70, 0.4) url(img/charity_slider_image/blago_2.jpg)',
        'rgba(45, 179, 70, 0.4) url(img/charity_slider_image/blago_3.jpg)'
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

});