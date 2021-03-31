(() => { 
    const buttonContinue = document.querySelector(".-continue");
    const buttonRegister = document.querySelector(".-register");
    const buttonConfirm = document.querySelector(".-confirm");
    const buttonLogIn = document.querySelector(".-login");
    const buttonBack = document.querySelector(".-back");

    const gear = document.querySelector(".gear");

    const inputEmail = document.querySelector(".-email");
    const inputUser = document.querySelectorAll(".-user");
    const inputPassword = document.querySelectorAll(".-password");
    const tooltiptext = document.querySelectorAll(".tooltiptext");
    const eye = document.querySelectorAll(".eye");

    const loginContainer = document.querySelector(".login-container");
    const registerContainer = document.querySelector(".register-container");
    
    const isEmail = /^[a-zA-Z0-9.!#$%&"*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const formatPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    
    buttonContinue.addEventListener("click", () => {
        buttonContinue.setAttribute("class", "button center hidden");
        gear.setAttribute("class", "gear center");

        setTimeout(() => {
            gear.setAttribute("class", "gear center hidden");
            loginContainer.setAttribute("class", "login-container");
        }, 3*1000);
    });

    buttonRegister.addEventListener("click", () => {
        loginContainer.setAttribute("class", "login-container hidden");
        registerContainer.setAttribute("class", "register-container");
    });

    buttonBack.addEventListener("click", () => {
        registerContainer.setAttribute("class", "register-container hidden");
        loginContainer.setAttribute("class", "login-container");
    });
///REGISTER
    const checkButtonRegister = () => {
        function enabledButtonRegister() {
            buttonConfirm.removeAttribute("disabled");
        }

        function disabledButtonRegister() {
            const disabled = document.createAttribute("disabled");
            buttonConfirm.setAttributeNode(disabled);
        }
        
        inputPassword[1].value.search(formatPassword) === 0 && inputEmail.value.search(isEmail) === 0 && inputUser[1].value.length >= 5 ? enabledButtonRegister() : disabledButtonRegister();
    }
    
    inputEmail.addEventListener("input", () => { checkButtonRegister(); });
    inputUser[1].addEventListener("input", () => { checkButtonRegister(); });
    inputPassword[1].addEventListener("input", () => { checkButtonRegister(); });
///LOG IN
    const checkButtonLogIn = () => {
        function enabledButtonLogIn() {
            buttonLogIn.removeAttribute("disabled");
        }

        function disabledButtonLogIn() {
            const disabled = document.createAttribute("disabled");
            buttonLogIn.setAttributeNode(disabled);
        }

        inputUser[0].value.length >= 5 && inputPassword[0].value.length >= 8 ? enabledButtonLogIn() : disabledButtonLogIn();
    }

    inputUser[0].addEventListener("input", () => { checkButtonLogIn(); });
    inputPassword[0].addEventListener("input", () => { checkButtonLogIn(); });

    for (let index = 0; (index < eye.length) && (index < inputPassword.length); index++) {

        eye[index].addEventListener("click", () => {
            function passwordHidden(){
                inputPassword[index].setAttribute("type", "password")
            }

            function passwordShow(){
                inputPassword[index].setAttribute("type", "text")
            }

            function eyeHidden(){
                eye[index].setAttribute("class", "eye -closed");
                eye[index].setAttribute("src", "./assets/images/eye-closed.svg");
            }

            function eyeShow(){
                eye[index].setAttribute("class", "eye");
                eye[index].setAttribute("src", "./assets/images/eye.svg");
            }

            eye[index].className === "eye -closed" ? eyeShow() : eyeHidden();
            inputPassword[index].type === "password" ? passwordShow() : passwordHidden();
        });
    }

    const eventsTooltip = ["mouseover", "mouseleave"];
    const responseTooltip = ["false", "true"];

    for (let iteration = 0; iteration <= eventsTooltip.length; iteration++) {
        function getActionTooltip(n) {
            return tooltiptext[n].setAttribute("aria-hidden", responseTooltip[iteration]);
        }

        inputEmail.addEventListener(eventsTooltip[iteration], () => { getActionTooltip(2);  });
        inputUser[0].addEventListener(eventsTooltip[iteration], () => { getActionTooltip(0);  });
        inputUser[1].addEventListener(eventsTooltip[iteration], () => { getActionTooltip(3); });
        inputPassword[0].addEventListener(eventsTooltip[iteration], () => { getActionTooltip(1); });
        inputPassword[1].addEventListener(eventsTooltip[iteration], () => { getActionTooltip(4); });
    }
})();