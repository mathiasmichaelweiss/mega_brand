'use strict';

function classNewsModal() {
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
                    <div class="go__to-btn" id="go-to-contests">
                        ${this.modalTextBtn}
                    </div>
                </div>
            </div>
            `;

            this.parent.append(elem);
        }
    }

    new NewsModalWindow(
        'src/img/news/img_3.jpg',
        'Внимание! В сети секонд-хендов Мега-Бренд Мегарозыгрыш',
        'Дорогие друзья, в нашей сети магазинов стартовал Instagram розыгрышь. У вас есть возможность выйграть один из 10 сертификатов до 5 000 рублей, нпокупку в наших магазинах. Для участия в розыгрыше необходимо выполнить ряд не сложных условий, это не займет много времени. Не упустите свой шанс стать победителем! <br><br> Подробности вы можете узнать в разделе розыгрыши либо перейти по ссылке ниже.Так же вы можете ознакомиться с условия розыгрыша в нашем<a href="https://www.instagram.com/" class="instagram">Instagram аккаунте.</a> <br> Товары магазинов представлены такими брендами, как:<br> George, D&G, H&M, Lacoste, Next, Yessica, New Look и многими другими <br><br>Размерный ряд от XS до XXXXL',
        '.all__newsmodal',
        'В раздел “Розыгрыши”'
    ).render();

    new NewsModalWindow(
        'src/img/news/img_1.jpg',
        'Открылся новый магазин!',
        'Открылся новый магазин по адресу, ул.Крылова 6а, часы работы с 10:00 до 20:00. С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.Открылся новый магазин по адресу, ул.Крылова 6а, часы работы с 10:00 до 20:00. С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.Открылся новый магазин по адресу, ул.Крылова 6а, часы работы с 10:00 до 20:00. С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.all__newsmodal',
        'Это кнопка'
    ).render();

    new NewsModalWindow(
        'src/img/news/img_2.jpg',
        'Новый график на Ленина',
        'С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.all__newsmodal',
        'Это кнопка'
    ).render();

    new NewsModalWindow(
        'src/img/news/img_2.jpg',
        'Новый отдел на Лыткина!',
        'С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.',
        '.all__newsmodal',
        'Это кнопка'
    ).render();

    new NewsModalWindow(
        'src/img/news/img_3.jpg',
        'Внимание! Стартовал розыгрыш в Instagram',
        'Равным образом начало повседневной работы по формированию позиции требуют определения и уточнения соответствующий условий активизации. Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке дальнейших направлений развития. Задача организации, в особенности же новая модель организационной деятельности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий требуют определения и уточнения дальнейших направлений развития.',
        '.all__newsmodal',
        'Это кнопка'
    ).render();
}

export default classNewsModal;