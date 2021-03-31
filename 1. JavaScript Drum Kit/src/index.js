(() => {
    window.addEventListener('keydown', function (e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const button = document.querySelector(`.button__key[data-key="${e.keyCode}"]`);
        const letter = document.querySelector(`.letter__key[data-key="${e.keyCode}"]`);
        if(!audio) return;
        audio.currentTime = 0;
        audio.play();
        button.classList.add('button__playing');
        letter.classList.add('letter__playing');
    })

    function removeTransitionButton(e) {
        if(e.propertyName !== 'height') return;
        this.classList.remove('button__playing');
    }
    
    const buttons = document.querySelectorAll(`.button__key`);
    buttons.forEach(button => button.addEventListener('transitionend', removeTransitionButton));

    function removeTransitionLetter(e) {
        if(e.propertyName !== 'opacity') return;
        this.classList.remove('letter__playing');
    }

    const letters = document.querySelectorAll(`.letter__key`);
    letters.forEach(letter => letter.addEventListener('transitionend', removeTransitionLetter));
})()