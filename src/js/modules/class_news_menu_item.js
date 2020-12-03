'use strict';

function classNewsMenuItem() {
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
                        <div class="news-content-block">
                        <div class="news__content-title__date">
                            <div class="news__item-title">${this.title}</div>
                            <div class="news__date">${this.date}</div>
                        </div>
                        <div class="news__content-text">
                            <p class="news__item-text">${this.text}</p>
                        </div>
                        </div>
                    </div>    
            `;

            this.parent.append(elem);
        }
    }

    new NewsMenuItem(
        '',
        'Мегарозыгрыш',
        '12.10.20',
        'Дорогие друзья, в нашей сети магазинов стартовал Instagram розыгрышь. У вас есть возможность выйграть один из 10 сертификатов до 5 000 рублей, на покупку в наших магазинах. Для участия в розыгрыше необходимо выполнить ряд не сложных условий, это не займет много времени. Не упустите свой шанс на стать победителем!',
        '.container__news',
        'tabheader__item_active',
    ).render();

    new NewsMenuItem(
        '',
        'Новый магазин',
        '12.10.20',
        'В магазине по адресу, ул.Лыткина 3, открылся отдел товаров "Сток". С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.container__news',
        'tabheader__item_active'
    ).render();

    new NewsMenuItem(
        '',
        'График на Ленина',
        '12.10.20',
        'Магазин по адресу, ул.Ленина 163а, теперь работает с 09:00 до 21:00 С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.container__news',
        'tabheader__item_active'
    ).render();

    new NewsMenuItem(
        '',
        'Новый отдел на Лыткина!',
        '12.10.20',
        'Открылся новый магазин по адресу, ул.Крылова 6а, часы работы с 10:00 до 20:00. С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.container__news',
        'tabheader__item_active'
    ).render();

    new NewsMenuItem(
        '',
        'Розыгрыш в Instagram',
        '12.10.20',
        'Стартовал розыгрыш в нашем аккаунте Instagram.',
        '.container__news',
        'tabheader__item_active'
    ).render();
}

export default classNewsMenuItem;