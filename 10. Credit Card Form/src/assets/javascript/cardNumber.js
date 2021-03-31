(() => {
    const cardNumber = $('#cardNumber');
    const creditCardNumber = $('.cardNumber');

    function valuesCreditCardNumber(value) {
        const first = value.slice(0, 4);
        const second = value.slice(4, 8);
        const three = value.slice(8, 12);
        const four = value.slice(12, 19);
        
        const valueCreditCardNumber = {
            0: '#### #### #### ####',
            1: `${first}### #### #### ####`,
            2: `${first}## #### #### ####`,
            3: `${first}# #### #### ####`,
            4: `${first} #### #### ####`,
            5: `${first} ${second}### #### ####`,
            6: `${first} ${second}## #### ####`,
            7: `${first} ${second}# #### ####`,
            8: `${first} ${second} #### ####`,
            9: `${first} ${second} ${three}### ####`,
            10: `${first} ${second} ${three}## ####`,
            11: `${first} ${second} ${three}# ####`,
            12: `${first} ${second} ${three} ####`,
            13: `${first} ${second} ${three} ${four}###`,
            14: `${first} ${second} ${three} ${four}##`,
            15: `${first} ${second} ${three} ${four}#`,
            16: `${first} ${second} ${three} ${four}`
        }

        return valueCreditCardNumber[value.length];
    }

    const re = new RegExp("^[0-9]+$");

    cardNumber.addEventListener('input', _ => {
        let cardNumberValue = cardNumber.value === '' ? '0' : cardNumber.value;
        
        if(!cardNumberValue.match(re)) {
            return;
        } 

        if(cardNumber.value.length <= 16) { 
            creditCardNumber.innerHTML = valuesCreditCardNumber(cardNumber.value);
        }
    });
})()