(() => {
    const cardCVV = $('#CVV');
    const inputCVV = $('.CVV');
    const flipper = $('.box-card__flipper');

    function addBack() {
        flipper.classList.add('--back');
    }

    function removeBack() {
        flipper.classList.remove('--back');
    }

    cardCVV.addEventListener('mousedown', addBack);
    cardCVV.addEventListener('focus', addBack);
    cardCVV.addEventListener('mouseleave', removeBack);
    cardCVV.addEventListener('blur', removeBack);
    cardCVV.addEventListener('input', _ => { inputCVV.value = cardCVV.value; });
})()
