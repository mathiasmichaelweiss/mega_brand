'use strict';

function sameColorAsTheCirlce() {
    const newsSubtitle = document.querySelectorAll('.news__subtitle-container'),
        newsCircle = document.querySelectorAll('.item__cirlce'),
        newsLetter = document.querySelectorAll('.news__latter'),
        newsSubtitleText = document.querySelectorAll('.news__subtitle-text');


    function subColorIsCircleColor() {
        for (let i = 0; i < newsCircle.length; i++) {
            newsSubtitle[i].style.backgroundColor = newsCircle[i].style.backgroundColor;
        }
    }

    subColorIsCircleColor();

    function makeTextInStrongCircleColor(text) {
        for (let i = 0; i < newsCircle.length; i++) {
            text[i].style.color = newsCircle[i].style.backgroundColor.replace('0.25', '1');
        }
    }

    makeTextInStrongCircleColor(newsSubtitleText);
    makeTextInStrongCircleColor(newsLetter);
}

export default sameColorAsTheCirlce;