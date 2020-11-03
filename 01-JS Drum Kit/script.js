/* ---------- Event Handlers ---------- */
function playSound(event) {
    const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${event.keyCode}']`);
    // Only attempt to play a sound if we specified an element with the given data-key attribute
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        // Add the string to the class list so we know when to transform/reverse
        key.classList.add('playing');
    }
}

function removeTransition(event) {
    if (event.propertyName === 'transform') this.classList.remove('playing');
}

/* ---------- Event Listeners ---------- */
window.onkeydown = playSound;
// keys is going to be an array of all the elements with the key class
const keys = document.querySelectorAll('.key');
keys.forEach( key => {
    // add an event listener to each key
    key.addEventListener('transitionend', removeTransition);
})
