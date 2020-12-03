'use strict';

function activateCurrentElem() {
    function activateElem(elem, activeClass) {
        elem.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                for (i = 0; i < elem.length; i++) {
                    if (elem[i].classList.contains(activeClass)) {
                        elem[i].classList.remove(activeClass);
                    }
                    item.classList.add(activeClass);
                }
            });
        });
    }

    const activeShop = document.querySelectorAll('.current__shop'),
        itemBlock = document.querySelectorAll('.tabheader__item');

    activateElem(itemBlock, 'container__news__item-active');
    activateElem(activeShop, 'current__shop-active');
}

export default activateCurrentElem;