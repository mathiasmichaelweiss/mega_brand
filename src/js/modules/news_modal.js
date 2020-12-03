'use strict';

function newsModal() {
    // news modal

    const newsModalBody = document.querySelectorAll('.newsmodal-body'),
        moreAboutNews = document.querySelectorAll('.more__about'),
        closeModalBtn = document.querySelectorAll('.close__modal-btn'),
        goToBtn = document.querySelectorAll('.go__to-btn'),
        newsModalTextContainer = document.querySelectorAll('.newsmodal-text-container'),
        newsModalText = document.querySelectorAll('.newsmodal-text');


    newsModalTextContainer[0].style.height = '10.8em';

    newsModalTextContainer.forEach(container => {
        newsModalText.forEach(text => {
            addScroll(container, text);
        });
    });

    function closeNewsModal(whereToClose) {
        whereToClose.forEach((item, i) => {
            item.addEventListener('click', () => {
                newsModalBody[i].style.display = 'none';
                document.querySelector('body').style.overflow = '';
            })
        });
    }

    function closeNewsModalOnBody() {
        newsModalBody.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                console.log(e.target.classList);
                if (e.target.classList.contains('newsmodal-body')) {
                    newsModalBody[i].style.display = 'none';
                    document.querySelector('body').style.overflow = '';
                }
            });
            document.addEventListener('keydown', (e) => {
                if (e.code === 'Escape') {
                    newsModalBody[i].style.display = 'none';
                    document.querySelector('body').style.overflow = '';
                }
            });
        });
    }


    function selectNewsModal(i = 0) {
        newsModalBody[i].style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    };

    function openCloseModal() {
        moreAboutNews.forEach((btn, i) => {
            btn.addEventListener('click', (e) => {
                newsModalBody[i].classList.add('fade2');
                selectNewsModal(i);
            })
        });
    }

    closeNewsModalOnBody();
    openCloseModal();
    closeNewsModal(closeModalBtn);
    animateBtn(closeModalBtn);
    animateBtn(goToBtn);
}

export default newsModal;