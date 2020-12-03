'use strict';

function classNewsTab() {
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

    new NewsTab(
        'src/img/news/img_3.jpg',
        'Розыгрыш',
        'Внимание! В сети секонд-хендов Мега-Бренд Мегарозыгрыш',
        'Дорогие друзья, в нашей сети магазинов стартовал Instagram розыгрышь. У вас есть возможность выйграть один из 10 сертификатов до 5 000 рублей, на покупку в наших магазинах. Для участия в розыгрыше необходимо выполнить ряд не сложных условий, это не займет много времени. Не упустите свой шанс на стать победителем!',
        '.tabcontainer',
        'button text',
        '.all__newsmodal'

    ).render();

    new NewsTab(
        'src/img/news/img_1.jpg',
        'Открытие',
        'Открылся новый магазин!',
        'Открылся новый магазин по адресу, ул.Крылова 6а, часы работы с 10:00 до 20:00. С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.tabcontainer',
        'button text',
        '.all__newsmodal'

    ).render();

    new NewsTab(
        'src/img/news/img_2.jpg',
        'Часы работы',
        'Новый график на Ленина',
        'Магазин по адресу, ул.Ленина 163а, теперь работает с 09:00 до 21:00 С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.tabcontainer',
        'button text',
        '.all__newsmodal'

    ).render();

    new NewsTab(
        'src/img/news/img_1.jpg',
        'Открытие',
        'Новый отдел на Лыткина!',
        'Открылся новый магазин по адресу, ул.Крылова 6а, часы работы с 10:00 до 20:00. С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.tabcontainer',
        'button text',
        '.all__newsmodal'

    ).render();

    new NewsTab(
        'src/img/news/img_3.jpg',
        'Розыгрыш',
        'Розыгрыш в Instagram',
        'Равным образом начало повседневной работы по формированию позиции требуют определения и уточнения соответствующий условий активизации. Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке дальнейших направлений развития. Задача организации, в особенности же новая модель организационной деятельности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий требуют определения и уточнения дальнейших направлений развития.',
        '.tabcontainer',
        'В раздел "Розыгрыши"'

    ).render();
}

export default classNewsTab;