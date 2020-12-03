'use strict';

function changeTabOnPN() {
    function changeTabOnPrevNext() {
        let tabIndex = 0;
        prevNextContainer.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.classList.contains('nextnews-mobile') || e.target.classList.contains('nextbtn-mobile') && tabIndex !== tabs.length - 1) {
                tabIndex++;
                tabsContent[tabIndex - 1].style.display = 'none';
                tabsContent[tabIndex - 1].classList.remove('fade');
                tabsContent[tabIndex - 1].classList.remove('show');

                tabsContent[tabIndex].classList.remove('hide');
                tabsContent[tabIndex].classList.add('fade');
                tabsContent[tabIndex].style.display = 'flex';
            } else if (e.target.classList.contains('prevnews-mobile') || e.target.classList.contains('prevtbtn-mobile') && tabIndex >= 1) {
                tabIndex--;
                tabsContent[tabIndex + 1].style.display = 'none';
                tabsContent[tabIndex + 1].classList.remove('fade');
                tabsContent[tabIndex + 1].classList.remove('show');

                tabsContent[tabIndex].classList.remove('hide');
                tabsContent[tabIndex].classList.add('fade');
                tabsContent[tabIndex].style.display = 'flex';
            }
        });
    }

    changeTabOnPrevNext();
}

export default changeTabOnPN;