'use strict';

const vacanciesItem = document.querySelectorAll('.vacancies-item'),
    vacanciesItemContainer = document.querySelectorAll('.vacan-item-container'),
    openVacancies = document.querySelectorAll('.full-vacan');


vacanciesItem.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        vacanciesItemContainer.forEach(item2 => {
            item2.classList.remove('vac__opened');
        });

        vacanciesItemContainer[i].classList.add('vac__opened');
        vacanciesItem[i].classList.add('vac__active');

        document.querySelectorAll('.vac__active').forEach((item3, i3) => {
            item3.addEventListener('click', () => {
                vacanciesItemContainer[i].classList.toggle('vac__opened');
            });
        });
    });
});