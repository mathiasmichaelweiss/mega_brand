'use strict';

function cutText() {
    function changeText(text, chooseMaxLength) {
        const maxLength = chooseMaxLength; //количество символов, которое должно отображаться
        const strNum = document.getElementsByClassName(text).length; //количество блоков с классом text
        for (let i = 0; i < strNum; i++) {
            const str = document.getElementsByClassName(text)[i].innerHTML; //текст
            document.getElementsByClassName(text)[i].innerHTML = str.slice(0, maxLength) + '...';
        }
    }

    changeText('news__item-text', 44);
    changeText('news__text', 147);
}

export default cutText;