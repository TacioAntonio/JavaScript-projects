(() => {
    /**
     * @param {string} item 
     */
    const $ = (item) => document.querySelector(item);

    const hourHand = $('.hour-hand');
    const minHand = $('.min-hand');
    const secondHand = $('.second-hand');

    function setSeconds(now) {
        const seconds = now.getSeconds()
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    }

    function setMins(now) {
        const mins = now.getMinutes()
        const minsDegrees = ((mins / 60) * 360) + 90;
        minHand.style.transform = `rotate(${minsDegrees}deg)`;
    }

    function setHours(now) {
        const hours = now.getHours()
        const hoursDegrees = ((hours / 60) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }

    function setDate() {
        const now = new Date();

        setSeconds(now);
        setMins(now);
        setHours(now);
    }

    setInterval(setDate, 1000);
})()