'use strict';

function calendar() {
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
}

module.exports = calendar;