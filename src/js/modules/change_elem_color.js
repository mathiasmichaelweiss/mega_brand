'use strict';

function changeElColor() {
    function changeElemColor(index, color) {
        document.querySelectorAll('.item__cirlce')[index].style.backgroundColor = color;
    }

    changeElemColor(0, 'rgba(227, 6, 19, 0.25)');
    changeElemColor(1, 'rgba(226, 80, 17, 0.25)');
    changeElemColor(2, 'rgba(255, 184, 0, 0.25');
    changeElemColor(3, 'rgba(11, 187, 239, 0.25');
    changeElemColor(4, 'rgba(45, 179, 70, 0.25');
}

module.exports = changeElColor;