'use strict';

import accordion from './modules/accordion';
import activateElem from './modules/activate_elem';
import addScroll from './modules/add_scroll';
import anchors from './modules/anchors';
import animateBtn from './modules/animation_btn';
import burger from './modules/burger';
import calendar from './modules/calendar';
import changeElemColor from './modules/change_elem_color';
import charity from './modules/charity';
import classNewsMenuItem from './modules/class_news_menu_item';
import classNewsTab from './modules/class_news_tab';
import classNewsmodal from './modules/class_newsmodal';
import cutText from './modules/cut_text';
import loadLogo from './modules/load_logo';
import mainSlider from './modules/main_slider';
import navMenuScroll from './modules/nav_menu_scroll';
import newsCircleText from './modules/news_circle_text.js';
import newsModal from './modules/news_modal';
import newsTabContent from './modules/news_tab_content';
import regModal from './modules/reg_modal';
import shopClass from './modules/shop_class';
import toLinkOnClick from './modules/to_link_on_click';


window.addEventListener('DOMContentLoaded', () => {

    loadLogo();
    burger();
    shopClass();
    navMenuScroll();
    mainSlider('.current__shop', '.wrapper', '.slider__inner', '.slide', '.street', '.current__sale', '.more-about-btn');
    animateBtn('.more-about-btn');
    accordion();
    activateElem();
    addScroll();
    anchors();
    calendar();
    charity();
    classNewsMenuItem();
    classNewsTab();
    classNewsmodal();
    changeElemColor();
    cutText();
    newsCircleText();
    newsModal();
    newsTabContent();
    regModal();
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