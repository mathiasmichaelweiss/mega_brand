function animationBtn() {
    function animateBtn(btn) {
        btn.forEach((item) => {
            item.addEventListener('mouseover', () => {
                item.classList.add('animate__btn-mousover');
            });

            item.addEventListener('mouseout', () => {
                item.classList.remove('animate__btn-mousover');
            });
        });
    }
}

module.exports = animationBtn;