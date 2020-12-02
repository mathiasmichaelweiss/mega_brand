'use strict';

function newsTabContent() {
    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        prevNextContainer = document.querySelector('.prev__next-container');

    function changeTabContent(intTabs, IntTabsContent) {

        function hideTabContent() {
            IntTabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });

            intTabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        }

        function showTabContent(i = 0) {
            IntTabsContent[i].classList.add('show', 'fade');
            IntTabsContent[i].classList.remove('hide');
            intTabs[i].classList.add('tabheader__item_active');
        }

        hideTabContent();
        showTabContent();

        function changeTabOnClick(clickElem) {
            clickElem.forEach((item, i) => {
                item.addEventListener('click', (e) => {
                    hideTabContent();
                    showTabContent(i);
                });
            });
        }

        changeTabOnClick(intTabs);
    }

    changeTabContent(tabs, tabsContent);

    function showTabContentMobile(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
    }
    showTabContentMobile();
}

module.exports = newsTabContent;