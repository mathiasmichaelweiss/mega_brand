'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const closeBtn = document.querySelectorAll('.close__btn');

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

    function animateMenuBurger(icon, menuBurger, navMouse, navActive) {
        const burgerIcon = document.querySelector(icon),
            burgerLocation = document.querySelector(menuBurger),
            nav = document.querySelectorAll(navMouse),
            navActivate = document.querySelector(navActive);

        burgerIcon.classList.add('burger__icon-active');

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
    }

    animateMenuBurger('.burger__icon', '.menu__burger', '.nav-mouse', '.nav');
    animateMenuBurger('.burger__icon-mobile', '.menu__burger-mobile', '.nav-mouse-mobile', '.nav-mobile');

    console.log(window.pageYOffset);
    // fixed menu
    if (document.body.clientWidth >= 913) {
        window.onscroll = function showMenu() {
            const menu = document.querySelector('.container__menu'),
                nav = document.querySelector('.nav__position-active');

            if (window.pageYOffset >= 138) {
                document.querySelector('.burger__icon').classList.remove('burger__icon-active');
                document.querySelector('.nav').classList.remove('nav__position')
                document.querySelector('.nav').classList.add('nav__position-active')
            } else {
                document.querySelector('.burger__icon').classList.add('burger__icon-active');
                document.querySelector('.nav').classList.remove('nav__position-active')
                document.querySelector('.nav').classList.add('nav__position')
            }

            if (window.pageYOffset > 140) {
                menu.classList.add('container__menu-fixed');
                nav.classList.add('nav__position-active-fixed');

            } else {
                menu.classList.remove('container__menu-fixed');
                nav.classList.remove('nav__position-active-fixed');

            }
        };
    }

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
        'img/slider_img/slide_1.jpg',
        '.slider__inner',
        'current__shop-active'
    ).render();

    new Shop(
        'Ул. Ленина, 163а ТЦ “Гранд”',
        '50%',
        '2',
        '.current__shops-container',
        'img/slider_img/slide_2.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        'Ул. Лыткина, 3',
        '50%',
        '3',
        '.current__shops-container',
        'img/slider_img/slide_3.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        'Ул. Иркутский тракт, 155',
        '10%',
        '4',
        '.current__shops-container',
        'img/slider_img/slide_4.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        'Ул. Мир, 50',
        '10%',
        '5',
        '.current__shops-container',
        'img/slider_img/slide_5.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        'Ул. Пушкина, 68',
        '90%',
        '6',
        '.current__shops-container',
        'img/slider_img/slide_6.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        'Ул. Жукова, 68/2',
        '90%',
        '7',
        '.current__shops-container',
        'img/slider_img/slide_7.jpg',
        '.slider__inner'
    ).render();

    new Shop(
        'Ул. Красных фонарей, 12к2',
        '10%',
        '8',
        '.current__shops-container',
        'img/slider_img/slide_8.jpg',
        '.slider__inner'
    ).render();

    console.log(document.querySelectorAll('.more-about-btn'));
    console.log(document.querySelectorAll('.slide'));



    // Activate shops und scroll
    const activeShop = document.querySelectorAll('.current__shop'),
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

        currentShop.forEach(shop => {
            shop.addEventListener('click', (e) => {
                e.preventDefault();
                const slideTo = e.target.getAttribute('data-slide-to');

                slideIndex = slideTo;
                offset = +width.replace('px', '') * (slideTo - 1);
                slideGround.style.transform = `translateX(-${offset}px)`;
            });
        });
    }
    mainSlider();

    const sliderBtnMoreAboutShop = document.querySelectorAll('.more-about-btn');

    animateBtn(sliderBtnMoreAboutShop);


    // Tiny slider

    var slider = tns({
        container: '#fixedWidth',
        "fixedWidth": 200,
        "swipeAngle": false,
        "speed": 400,
        autoplayButtonOutput: false,
        autoplay: true,
        controls: false
    });

    // calendar
    const calendarItem = document.querySelectorAll('.calendar__item');

    calendarItem.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains('percent')) {
                e.target.style.color = '#1D1D1D';
            }
        });

        item.addEventListener('mouseout', (e) => {
            if (e.target.classList.contains('percent')) {
                e.target.style.color = '';
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
                    <img class="news-img" src="${this.image}">
                    <div class="tabcontent__descr">
                        <div class="news__title">${this.newsTitle}</div>
                        <div class="news__subtitle-container">
                            <div class="news__subtitle-text">${this.subTitle}</div>
                        </div>
                        <div class="news__text">
                            <p>${this.text}</p>
                        </div>
                    <button class="more__about">Подробности</button>
            `;

            this.parent.append(elem);
        }
    }

    class NewsModalWindow {
        constructor(image, newsTitle, text, parentSelector, modalTextBtn) {
            this.image = image;
            this.newsTitle = newsTitle;
            this.text = text;
            this.parent = document.querySelector(parentSelector);
            this.modalTextBtn = modalTextBtn;
        }

        render() {
            const elem = document.createElement('div');

            elem.classList.add('newsmodal-body');

            elem.innerHTML = `
            <div class="container__newsmodal">
                <div class="newsmodal__inner">
                    <div class="close__newsmodal">
                        <div class="close__btn   close__modal-btn"></div>
                    </div>
                    <div class="newsmodal__img-container">
                        <img src="${this.image}" alt="" class="newsmodal-img">
                    </div>
                    <div class="newsmodal-title">
                        <h2>
                        ${this.newsTitle}
                        </h2>
                    </div>
                    <div class="newsmodal-text-container">
                        <p class="newsmodal-text">
                        ${this.text}
                        </p>
                    </div>
                    <div class="go__to-btn">
                        ${this.modalTextBtn}
                    </div>
                </div>
            </div>
            `;

            this.parent.append(elem);
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
        'img/news/img_3.jpg',
        'Розыгрыш',
        'Внимание! В сети секонд-хендов Мега-Бренд Мегарозыгрыш',
        'Дорогие друзья, в нашей сети магазинов стартовал Instagram розыгрышь. У вас есть возможность выйграть один из 10 сертификатов до 5 000 рублей, на покупку в наших магазинах. Для участия в розыгрыше необходимо выполнить ряд не сложных условий, это не займет много времени. Не упустите свой шанс на стать победителем!',
        '.tabcontainer',
        'button text',
        '.all__newsmodal'

    ).render();

    new NewsMenuItem(
        '',
        'Мегарозыгрыш',
        '12.10.20',
        'Дорогие друзья, в нашей сети магазинов стартовал Instagram розыгрышь. У вас есть возможность выйграть один из 10 сертификатов до 5 000 рублей, на покупку в наших магазинах. Для участия в розыгрыше необходимо выполнить ряд не сложных условий, это не займет много времени. Не упустите свой шанс на стать победителем!',
        '.container__news',
        'tabheader__item_active',
    ).render();

    new NewsModalWindow(
        'img/news/img_3.jpg',
        'Внимание! В сети секонд-хендов Мега-Бренд Мегарозыгрыш',
        'Дорогие друзья, в нашей сети магазинов стартовал Instagram розыгрышь. У вас есть возможность выйграть один из 10 сертификатов до 5 000 рублей, нпокупку в наших магазинах. Для участия в розыгрыше необходимо выполнить ряд не сложных условий, это не займет много времени. Не упустите свой шанс стать победителем! <br><br> Подробности вы можете узнать в разделе розыгрыши либо перейти по ссылке ниже.Так же вы можете ознакомиться с условия розыгрыша в нашем<a href="https://www.instagram.com/" class="instagram">Instagram аккаунте.</a> <br> Товары магазинов представлены такими брендами, как:<br> George, D&G, H&M, Lacoste, Next, Yessica, New Look и многими другими <br><br>Размерный ряд от XS до XXXXL',
        '.all__newsmodal',
        'В раздел “Розыгрыши”'
    ).render();

    new NewsTab(
        'img/news/img_1.jpg',
        'Открытие',
        'Открылся новый магазин!',
        'Открылся новый магазин по адресу, ул.Крылова 6а, часы работы с 10:00 до 20:00. С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.tabcontainer',
        'button text',
        '.all__newsmodal'

    ).render();

    new NewsMenuItem(
        '',
        'Новый магазин',
        '12.10.20',
        'В магазине по адресу, ул.Лыткина 3, открылся отдел товаров "Сток". С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.container__news',
        'tabheader__item_active'
    ).render();

    new NewsModalWindow(
        'img/news/img_1.jpg',
        'Открылся новый магазин!',
        'Открылся новый магазин по адресу, ул.Крылова 6а, часы работы с 10:00 до 20:00. С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.all__newsmodal',
        'Это кнопка'
    ).render();

    new NewsTab(
        'img/news/img_2.jpg',
        'Часы работы',
        'Новый график на Ленина',
        'Магазин по адресу, ул.Ленина 163а, теперь работает с 09:00 до 21:00 С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.tabcontainer',
        'button text',
        '.all__newsmodal'

    ).render();

    new NewsMenuItem(
        '',
        'График на Ленина',
        '12.10.20',
        'Магазин по адресу, ул.Ленина 163а, теперь работает с 09:00 до 21:00 С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.container__news',
        'tabheader__item_active'
    ).render();

    new NewsModalWindow(
        'img/news/img_2.jpg',
        'Новый график на Ленина',
        'С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.all__newsmodal',
        'Это кнопка'
    ).render();

    new NewsTab(
        'img/news/img_1.jpg',
        'Открытие',
        'Новый отдел на Лыткина!',
        'Открылся новый магазин по адресу, ул.Крылова 6а, часы работы с 10:00 до 20:00. С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.tabcontainer',
        'button text',
        '.all__newsmodal'

    ).render();

    new NewsMenuItem(
        '',
        'Новый отдел на Лыткина!',
        '12.10.20',
        'Открылся новый магазин по адресу, ул.Крылова 6а, часы работы с 10:00 до 20:00. С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.container__news',
        'tabheader__item_active'
    ).render();

    new NewsModalWindow(
        'img/news/img_2.jpg',
        'Новый отдел на Лыткина!',
        'С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.all__newsmodal',
        'Это кнопка'
    ).render();

    new NewsTab(
        'img/news/img_3.jpg',
        'Розыгрыш',
        'Розыгрыш в Instagram',
        'Равным образом начало повседневной работы по формированию позиции требуют определения и уточнения соответствующий условий активизации. Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке дальнейших направлений развития. Задача организации, в особенности же новая модель организационной деятельности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий требуют определения и уточнения дальнейших направлений развития.',
        '.tabcontainer',
        'В раздел "Розыгрыши"'

    ).render();

    new NewsMenuItem(
        '',
        'Розыгрыш в Instagram',
        '12.10.20',
        'Стартовал розыгрыш в нашем аккаунте Instagram.',
        '.container__news',
        'tabheader__item_active'
    ).render();

    new NewsModalWindow(
        'img/news/img_3.jpg',
        'Внимание! Стартовал розыгрыш в Instagram',
        'Равным образом начало повседневной работы по формированию позиции требуют определения и уточнения соответствующий условий активизации. Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке дальнейших направлений развития. Задача организации, в особенности же новая модель организационной деятельности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий требуют определения и уточнения дальнейших направлений развития.',
        '.all__newsmodal',
        'Это кнопка'
    ).render();


    function changeText(text, chooseMaxLength) {
        const maxLength = chooseMaxLength; //количество символов, которое должно отображаться
        const strNum = document.getElementsByClassName(text).length; //количество блоков с классом text
        for (let i = 0; i < strNum; i++) {
            const str = document.getElementsByClassName(text)[i].innerHTML; //текст
            document.getElementsByClassName(text)[i].innerHTML = str.slice(0, maxLength) + '...';
        }
    }

    changeText('news__item-text', 44);
    changeText('news__text', 147);

    // tab content

    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        prevNextContainer = document.querySelector('.prev__next-container');

    function changeTabContent(intTabs, IntTabsContent) {

        function hideTabContent() {
            IntTabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });

            intTabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        }

        function showTabContent(i = 0) {
            IntTabsContent[i].classList.add('show', 'fade');
            IntTabsContent[i].classList.remove('hide');
            intTabs[i].classList.add('tabheader__item_active');
        }

        hideTabContent();
        showTabContent();

        function changeTabOnClick(clickElem) {
            clickElem.forEach((item, i) => {
                item.addEventListener('click', (e) => {
                    hideTabContent();
                    showTabContent(i);
                });
            });
        }

        changeTabOnClick(intTabs);
    }

    changeTabContent(tabs, tabsContent);

    function showTabContentMobile(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
    }
    showTabContentMobile();

    // news modal

    const newsModalBody = document.querySelectorAll('.newsmodal-body'),
        moreAboutNews = document.querySelectorAll('.more__about'),
        closeModalBtn = document.querySelectorAll('.close__modal-btn'),
        goToBtn = document.querySelectorAll('.go__to-btn');

    function closeNewsModal() {
        closeModalBtn.forEach((item, i) => {
            item.addEventListener('click', () => {
                newsModalBody[i].style.display = 'none';
                document.querySelector('body').style.overflow = '';
            })
        });
    }

    function selectNewsModal(i = 0) {
        newsModalBody[i].style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    };

    function openCloseModal() {
        moreAboutNews.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                newsModalBody[i].classList.add('fade2');
                selectNewsModal(i);
            })
        });
    }
    openCloseModal();
    closeNewsModal();
    animateBtn(closeModalBtn);
    animateBtn(goToBtn);
    // end news modal

    function changeTabOnPrevNext() {
        let tabIndex = 0;
        prevNextContainer.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.classList.contains('nextnews-mobile') || e.target.classList.contains('nextbtn-mobile') && tabIndex !== tabs.length - 1) {
                tabIndex++;
                tabsContent[tabIndex - 1].style.display = 'none';
                tabsContent[tabIndex - 1].classList.remove('fade');
                tabsContent[tabIndex - 1].classList.remove('show');

                tabsContent[tabIndex].classList.remove('hide');
                tabsContent[tabIndex].classList.add('fade');
                tabsContent[tabIndex].style.display = 'flex';
            } else if (e.target.classList.contains('prevnews-mobile') || e.target.classList.contains('prevtbtn-mobile') && tabIndex >= 1) {
                tabIndex--;
                tabsContent[tabIndex + 1].style.display = 'none';
                tabsContent[tabIndex + 1].classList.remove('fade');
                tabsContent[tabIndex + 1].classList.remove('show');

                tabsContent[tabIndex].classList.remove('hide');
                tabsContent[tabIndex].classList.add('fade');
                tabsContent[tabIndex].style.display = 'flex';
            }
        });
    }

    changeTabOnPrevNext();

    function changeElemColor(index, color) {
        document.querySelectorAll('.item__cirlce')[index].style.backgroundColor = color;
    }

    changeElemColor(0, 'rgba(227, 6, 19, 0.25)');
    changeElemColor(1, 'rgba(226, 80, 17, 0.25)');
    changeElemColor(2, 'rgba(255, 184, 0, 0.25');
    changeElemColor(3, 'rgba(11, 187, 239, 0.25');
    changeElemColor(4, 'rgba(45, 179, 70, 0.25');

    const newsScroll = document.querySelector('.news__block-scroll'),
        newsCointainer = document.querySelector('.container__news'),
        itemBlock = document.querySelectorAll('.tabheader__item');

    addScroll(newsScroll, newsCointainer);
    activateElem(itemBlock, 'container__news__item-active');

    const newsSubtitle = document.querySelectorAll('.news__subtitle-container'),
        newsCircle = document.querySelectorAll('.item__cirlce'),
        newsLetter = document.querySelectorAll('.news__latter'),
        newsSubtitleText = document.querySelectorAll('.news__subtitle-text');


    function subColorIsCircleColor() {
        for (let i = 0; i < newsCircle.length; i++) {
            newsSubtitle[i].style.backgroundColor = newsCircle[i].style.backgroundColor;
        }
    }

    subColorIsCircleColor();

    function makeTextInStrongCircleColor(text) {
        for (let i = 0; i < newsCircle.length; i++) {
            text[i].style.color = newsCircle[i].style.backgroundColor.replace('0.25', '1');
        }
    }

    makeTextInStrongCircleColor(newsSubtitleText);
    makeTextInStrongCircleColor(newsLetter);

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
        passInputEnter = document.querySelector('#password-enter');


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
        'img/charity_slider_image/blago_1.jpg',
        'img/charity_slider_image/blago_2.jpg',
        'img/charity_slider_image/blago_3.jpg'
    );

    const images = [
        'rgba(0, 0, 0, 0.2)  url(img/charity_slider_image/blago_1.jpg)',
        'rgba(0, 0, 0, 0.2)  url(img/charity_slider_image/blago_2.jpg)',
        'rgba(0, 0, 0, 0.2)  url(img/charity_slider_image/blago_3.jpg)'
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