'use strict';

window.addEventListener('DOMContentLoaded', () => {

    var slider = tns({
        container: '#fixedWidth',
        "fixedWidth": 200,
        "gutter": 90,
        "swipeAngle": false,
        "speed": 400,
        autoplayButtonOutput: false,
        autoplay: true,
        controls: true,
        controlsText: ['', ''],
        controlsContainer: document.querySelector('.prev-next-container'),
        prevButton: document.querySelector('.prev__btn'),
        nextButton: document.querySelector('.next__btn'),
    });

});