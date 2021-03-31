(() => {
    const labelsOfInputs = $$('label');
    const inputsCard = $$('input');

    function outlineWhenClickInLabel() {
        const element = document.querySelector(`.${this.classList[0]} + input`);

        element.classList.remove('selectEmpty');
        element.classList.add('select');
    }

    labelsOfInputs.forEach(label => {
        label.addEventListener('click', outlineWhenClickInLabel);
    });

    function handleUpdate() {
        if(this.value.length > 0) {
            this.classList.remove('selectEmpty');
        }
    }

    function handleClick() {
        this.classList.remove('--selectEmpty');
        this.classList.add('--select');
    }

    function handleLeave() {
        this.classList.remove('--select');
        
        if(this.value.length === 0) {
            this.classList.add('--selectEmpty');
        }
    }

    inputsCard.forEach(input => {
        input.addEventListener('input', handleUpdate);
        input.addEventListener('mousedown', handleClick);
        input.addEventListener('focus', handleClick);
        input.addEventListener('mouseleave', handleLeave);
        input.addEventListener('blur', handleLeave);
    });
})()