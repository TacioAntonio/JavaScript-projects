(() => {
    const cardName = $('#cardName');
    const creditCardName = $('.cardName');
    
    cardName.addEventListener('input', _ => {
      creditCardName.innerHTML = cardName.value.length > 0 ? cardName.value : 'full name';
    });
})()