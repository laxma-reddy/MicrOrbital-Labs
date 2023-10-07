let countdown;
let timerDisplay = document.getElementById('timer');

function startTimer() {
    clearInterval(countdown); // Clear any existing timers

    const durationInput = document.getElementById('duration');
    const duration = parseInt(durationInput.value);

    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    let timeLeft = duration;

    displayTimeLeft(timeLeft);

    countdown = setInterval(() => {
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdown);
            alert('Timer expired!');
            return;
        }

        displayTimeLeft(timeLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}
