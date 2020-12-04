function animateBtn(btn) {
    const currentBtn = document.querySelectorAll(btn);

    currentBtn.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            item.classList.add('animate__btn-mousover');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('animate__btn-mousover');
        });
    });
}


export default animateBtn;