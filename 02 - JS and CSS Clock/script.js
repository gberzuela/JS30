const secondsHand = document.querySelector('.sec-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
    const current = new Date();

    const seconds = current.getSeconds();
    const secondsDegrees = 8 * seconds + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = current.getMinutes();
    const minutesDegrees = 6 * minutes + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = current.getHours();
    const hoursDegrees = 30 * hours + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);