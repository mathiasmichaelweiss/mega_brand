'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const accordion = require('./modules/accordion'),
        activateElem = require('./modules/activate_elem'),
        addScroll = require('./modules/add_scroll'),
        anchors = require('./modules/anchors'),
        animationBtn = require('./modules/animation_btn'),
        burger = require('./modules/burger'),
        calendar = require('./modules/calendar'),
        changeElemColor = require('./modules/change_elem_color'),
        changeTabOnPrevNext = require('./modules/change_tab_on_prev_next'),
        charity = require('./modules/charity'),
        classNewsMenuItem = require('./modules/class_news_menu_item'),
        classNewsTab = require('./modules/class_news_tab'),
        classNewsmodal = require('./modules/class_newsmodal'),
        cutText = require('./modules/cut_text'),
        loadLogo = require('./modules/load_logo'),
        mainSlider = require('./modules/main_slider'),
        navMenuScroll = require('./modules/nav_menu_scroll'),
        newsCircleText = require('./modules/news_circle_text.js'),
        newsModal = require('./modules/news_modal'),
        newsTabContent = require('./modules/news_tab_content'),
        regModal = require('./modules/reg_modal'),
        shopClass = require('./modules/shop_class'),
        toLinkOnClick = require('./modules/to_link_on_click');

    accordion();
    animationBtn();
    mainSlider();
    activateElem();
    addScroll();
    anchors();
    burger();
    calendar();
    charity();
    classNewsMenuItem();
    classNewsTab();
    classNewsmodal();
    changeElemColor();
    cutText();
    loadLogo();
    navMenuScroll();
    newsCircleText();
    newsModal();
    newsTabContent();
    regModal();
    shopClass();
    toLinkOnClick();


    // Tiny slider
    var slider = tns({
        container: '#fixedWidth',
        "fixedWidth": 200,
        "swipeAngle": false,
        "speed": 400,
        autoplayButtonOutput: false,
        autoplay: true,
        controls: false
    });

});