'use strict';

function accordion() {
    const vacanciesItem = document.querySelectorAll('.vacancies-item'),
        vacanciesItemContainer = document.querySelectorAll('.vacan-item-container');

    vacanciesItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            vacanciesItemContainer[i].classList.toggle('vac__opened');
        });
    });
}

module.exports = accordion;