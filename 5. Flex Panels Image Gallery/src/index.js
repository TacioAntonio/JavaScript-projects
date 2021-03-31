(() => {
    /**
     * @param {string} selector 
     */
    const $ = selector => document.querySelectorAll(selector);

    const panels = $('.panel');
    
    function toggleOpen() {    
        this.classList.toggle('open');
    }   

    function toggleActive(e) {
        if(e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
})()
