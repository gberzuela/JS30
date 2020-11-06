const keys = document.querySelectorAll('.key');

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

function buttonClicked(key) {
    // we access this.dataset.key because we are using the data-* attribute
    const audio = document.querySelector(`audio[data-key='${this.dataset.key}']`);
    audio.currentTime = 0;
    audio.play();
    this.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName === 'transform') this.classList.remove('playing');
}

/* ---------- Event Listeners ---------- */
window.onkeydown = playSound;

// keys is going to be an array of all the elements with the key class
keys.forEach( key => {
    // add an event listener to each key to remove 'playing' from the classList
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click', buttonClicked);
})