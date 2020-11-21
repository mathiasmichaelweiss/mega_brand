'use strict';

const vacanciesItem = document.querySelectorAll('.vacancies-item'),
    smallContainer = document.querySelector('.small-container'),
    width = window.getComputedStyle(smallContainer).width,
    openVacancies = document.querySelectorAll('.full-vacan');

console.log(width);

vacanciesItem.forEach(item => {
    openVacancies.forEach(item2 => {
        item2.style.width = width;
        item.addEventListener('click', () => {
            item2.style.top = '860px';
        });
    });
});