(() => {
    const creditCardExpiritionDate = $('.expiritionDate');
    const cardMonth = $('.box-card__month');
    const cardYear = $('.box-card__year');

    function expirationDate() {
      const month = cardMonth.value.length === 1 ? `0${cardMonth.value}` : cardMonth.value;
      const year = cardYear.value;

      return `${month === '00' ? 'MM' : month}/${year === '0' ? 'yy' : year}`;
    }

    function  handleExpiritionDate() {
        creditCardExpiritionDate.innerHTML = expirationDate();
    }

    cardMonth.addEventListener('change', handleExpiritionDate);
    cardYear.addEventListener('change', handleExpiritionDate);
})()