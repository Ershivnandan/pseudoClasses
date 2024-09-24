let interval;
const mainContainer = document.getElementById("mainContainer");
const inputContainer = document.getElementById("inputContainer");
const resetButton = document.getElementById("resetButton");
const timerContainer = document.getElementById("timerContainer");

// Initially hide resetButton and timerContainer
resetButton.style.display = "none";
timerContainer.style.display = "none";

function resetCountdown() {
  // Show the inputContainer again and hide the resetButton and timerContainer
  inputContainer.style.display = "flex";
  resetButton.style.display = "none";
  timerContainer.style.display = "none";
  clearInterval(interval); // Stop the countdown
}

function startCountdown() {
  // Hide the inputContainer and show the resetButton and timerContainer
  inputContainer.style.display = "none";
  resetButton.style.display = "flex";
  timerContainer.style.display = "flex";

  // Get the input values for hours, minutes, and seconds
  const hours = parseInt(document.getElementById("hours").value) || 0;
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;

  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (interval) {
    clearInterval(interval); // Clear any existing interval
  }

  // Start the countdown
  interval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(interval); // Stop when countdown reaches 0
    } else {
      totalSeconds--;
      updateCountdown(totalSeconds); // Update the displayed countdown
    }
  }, 1000);
}

function updateCountdown(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  animateDigit("hour", Math.floor(hours / 10), Math.floor(hours / 10) - 1);
  animateDigit("hour", hours % 10, (hours % 10) - 1);

  animateDigit("minute", Math.floor(minutes / 10), Math.floor(minutes / 10) - 1);
  animateDigit("minute", minutes % 10, (minutes % 10) - 1);

  animateDigit("second", Math.floor(seconds / 10), Math.floor(seconds / 10) - 1);
  animateDigit("second", seconds % 10, (seconds % 10) - 1);
}

function animateDigit(elementId, currentValue, previousValue) {
  const prevDigitElement = document.getElementById(`${elementId}-prev`);
  const currentDigitElement = document.getElementById(`${elementId}-current`);
  const nextDigitElement = document.getElementById(`${elementId}-next`);

  prevDigitElement.textContent = previousValue < 0 ? 9 : previousValue;
  currentDigitElement.textContent = currentValue;


  prevDigitElement.classList.remove("prev");
  currentDigitElement.classList.remove("current");
  nextDigitElement.classList.remove("next");

  setTimeout(() => {
    prevDigitElement.classList.add("prev");
    currentDigitElement.classList.add("current");
    nextDigitElement.classList.add("next");
  }, 50);
}
