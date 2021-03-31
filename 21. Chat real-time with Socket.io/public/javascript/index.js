const CHAT_OPEN    = document.querySelector('.chat-open');
const CHAT_BOX     = document.querySelector('.chat-box');
const CLOSE        = document.querySelector('.close');
const EACH_MESSAGE = document.querySelector('.each-message');
const BOX_MESSAGE  = document.querySelector('.box-message');
const ENTER_BUTTON = document.querySelector('.enter-button');
const NICKNAME_CONTAINER = document.querySelector('.nickname-container');
const BODY = document.querySelector('body');
const NICKNAME =  document.querySelector('.nickname');
const FIRST_NICKNAME = document.querySelector('.first-nickname');

CHAT_OPEN.addEventListener('click', function() {
    CHAT_OPEN.classList.add('hidden');
    CHAT_BOX.classList.remove('hidden');
});

CLOSE.addEventListener('click', function() {
    CHAT_OPEN.classList.remove('hidden');
    CHAT_BOX.classList.add('hidden');
});

BOX_MESSAGE.addEventListener('change', function() {
    const SCROLL_BOTTOM = setInterval(function() { EACH_MESSAGE.scrollTop = EACH_MESSAGE.scrollHeight; }, 800);
    setInterval(function() { clearInterval(SCROLL_BOTTOM); }, 2 * 800);
});

ENTER_BUTTON.addEventListener('click', function() {
    NICKNAME_CONTAINER.classList.add('hidden');
    CHAT_OPEN.classList.remove('hidden');
    BODY.classList.remove('container');
    NICKNAME.value = FIRST_NICKNAME.value;
});

module.exports = {
  CHAT_OPEN
}
