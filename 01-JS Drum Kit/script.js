/* ---------- Event Handlers ---------- */
function playSound(event) {
    const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${event.keyCode}']`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
}

function removeTransition(event) {
    if (event.propertyName === 'transform') this.classList.remove('playing');
}

/* ---------- Event Listeners ---------- */
window.onkeydown = playSound;
const keys = document.querySelectorAll('.key');
keys.forEach( key => {
    key.addEventListener('transitionend', removeTransition);
})
