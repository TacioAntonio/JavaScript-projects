const $ = selector => document.querySelector(selector);
const video = $('.player__video');
const play = $('.play');
const mute = $('.mute');
const back = $('.back');
const advance = $('.advance');
const fullscreen = $('.fullscreen');
const progressBar = $('.progress__filled');

function togglePlay() {
    const togglePlay = video.paused ? 'play' : 'pause';
    video[togglePlay]();
}

function updateIconPlay() {
    const icon = video.paused ? '►' : '| |';
    play.textContent = icon;
}

function handleTogglePlay() {
    togglePlay();
    updateIconPlay();
}

video.addEventListener('click', handleTogglePlay);
play.addEventListener('click', handleTogglePlay);

function toggleMute() {
    const toggleMute = video.volume === 0 ? 1 : 0;
    video.volume = toggleMute;
}

function updateIconMute() {
    const icon = video.volume === 1 ? '♫' : 'ø';
    mute.textContent = icon;
}

function handleToggleMute() {
    toggleMute(); 
    updateIconMute();
}

mute.addEventListener('click', handleToggleMute);
window.addEventListener('keypress', e => {
    if(e.key === 'k' || e.code === 'Space') {
        handleTogglePlay()
    }
    
    if(e.key === 'm') {
        handleToggleMute();
    }
})

back.addEventListener('click', function() {
    video.currentTime -= 10;
});

advance.addEventListener('click', function() {
    video.currentTime += 10;
});

fullscreen.addEventListener('click', function() {
    video.requestFullscreen();
});

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
}

video.addEventListener('timeupdate', handleProgress);