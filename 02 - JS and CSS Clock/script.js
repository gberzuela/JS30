const secondsHand = document.querySelector('.sec-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
    const current = new Date();

    const seconds = current.getSeconds();
    const secondsDegrees = ( (seconds / 60) * 360) + 90;
    secondsHand.getElementsByClassName.transform = `rotate(${secondsDegrees})`

    const minutes = current.getMinutes();
    const minutesDegrees = ( (minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees})`;

    const hours = current.getHours();
    const hoursDegrees = ( (hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees})`;
}

setInterval(setDate, 1000);