'use strict';

const vacanciesItem = document.querySelectorAll('.vacancies-item'),
    vacanciesItemContainer = document.querySelectorAll('.vacan-item-container');

vacanciesItem.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        vacanciesItemContainer[i].classList.toggle('vac__opened');
    });
});