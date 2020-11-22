'use strict';

const vacanciesItem = document.querySelectorAll('.vacancies-item'),
    openVacancies = document.querySelectorAll('.full-vacan');
console.log(vacanciesItem);

vacanciesItem.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        openVacancies.forEach(item2 => {
            item2.classList.remove('vac__opened');
        });

        /*         item.classList.add('vac__shadow'); */
        openVacancies[i].classList.add('vac__opened');
    });
});