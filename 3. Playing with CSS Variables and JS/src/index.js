(() => {
    /**
     * @param {string} selector 
     */
    const $ = selector => document.querySelectorAll(selector);
    const allInputs = $('input');

    function handleInput() {
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    allInputs.forEach(eachInput => eachInput.addEventListener('change', handleInput))
    
})()