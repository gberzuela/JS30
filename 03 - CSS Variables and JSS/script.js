// .querySelectorAll returns a NodeList, similar in appearance to an
// Array. Difference being their prototypes.
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // Grab the suffix specified as one of our data attributes
    // || '' because only the blur and spacing have a suffix, not
    //  base color
    const suffix = this.dataset.sizing || '';
    // Grab the name of whatever input/css variable we're trying to change
    //  and set it to the current value of input
    // We need to write this.value + suffix in order to get the unit we're trying to change; 'px' for blur and spacing
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach( input => {
    input.addEventListener('change', handleUpdate);
    input.addEventListener('mousemove', handleUpdate);
})