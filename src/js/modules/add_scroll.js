'use strict';

function scroll() {
    function addScroll(firstContainer, secondContainer) {
        if (firstContainer.style.height >= secondContainer.style.height) {
            firstContainer.style.overflowY = 'scroll';
        }
    }

    const shopsContainer = document.querySelector('.shops__window'),
        shopContainerInner = document.querySelector('.current__shops-container'),
        newsScroll = document.querySelector('.news__block-scroll'),
        newsCointainer = document.querySelector('.container__news');

    addScroll(newsScroll, newsCointainer);
    addScroll(shopContainerInner, shopsContainer);
}

module.exports = scroll;