'use strict';

function toLinkOnClick() {
    function goToLinkOnClick(currentBtn, link) {
        let btn = document.getElementById(currentBtn);
        btn.addEventListener('click', () => {
            location.href = link;
        });
    }

    goToLinkOnClick('go-to-contests', 'contests.html');
}

export default toLinkOnClick;