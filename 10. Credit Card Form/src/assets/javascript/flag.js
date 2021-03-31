(() => {
    const cardNumber = $('#cardNumber');
    const flag = $('.box-card__flag');
    const eachFlag = {
        "--visa":  "--visa",
        "--amex": "--amex",
        "--mastercard": "--mastercard",
        "--discover": "--discover",
        '--troy': '--troy'
    }

    function getCardType(cardNumber) {
        let number = cardNumber;
        let re = new RegExp("^4");
        
        if (number.match(re) != null) return "--visa";
  
        re = new RegExp("^(34|37)");
        if (number.match(re) != null) return "--amex";
  
        re = new RegExp("^5[1-5]");
        if (number.match(re) != null) return "--mastercard";
  
        re = new RegExp("^6011");
        if (number.match(re) != null) return "--discover";
        
        re = new RegExp('^9792')
        if (number.match(re) != null) return '--troy';

        return "--visa";
    }

    cardNumber.addEventListener('input', _ => {
        flag.classList.forEach(classElement => {
            if(eachFlag[classElement]) {
                flag.classList.remove(classElement);
            }

            flag.classList.add(getCardType(cardNumber.value));
        });
    });
})()