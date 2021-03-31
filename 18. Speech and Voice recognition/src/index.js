const $ = element => document.querySelector(element);
const messages = $('.messages');
const speech = $('.speech');
const talk = $('.talk');

const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';

const voiceMessage = new SpeechSynthesisUtterance();

function linkEvent(object, event, action) {
    object.addEventListener(event, action);
}

function handleSpeech(e) {
    const speech = Array.from(e.results);
    const resultSpeech = speech.map(result => result[0])
                               .map(result => result.transcript)
                               .join('');

    messages.textContent += [messages.textContent].length === 0 ? resultSpeech : ` ${resultSpeech}`;
    console.log(resultSpeech)
}

function turnOnSpeech() {
    recognition.start();
}

function talkMessage() {
    voiceMessage.text = messages.textContent;
    speechSynthesis.speak(voiceMessage);
}

linkEvent(recognition, 'result', handleSpeech);
linkEvent(speech, 'click', turnOnSpeech);
linkEvent(talk, 'click', talkMessage);

