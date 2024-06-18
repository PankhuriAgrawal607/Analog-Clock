const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

function setClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hoursDegrees = (hours * 30) + (0.5 * minutes);
    const minutesDegrees = (minutes * 6) + (0.1 * seconds);
    const secondsDegrees = seconds * 6;

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setClock, 1000);