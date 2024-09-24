let interval;
const mainContainer = document.getElementById("mainContainer");
const inputContainer = document.getElementById("inputContainer");
const resetButton = document.getElementById("resetButton");
const timerContainer = document.getElementById("timerContainer");

// upcoming items
const upHourspan1 = document.getElementById("upHourspan1");
const upHourspan2 = document.getElementById("upHourspan2");
const upMinutesSpan1 = document.getElementById("upMinutesSpan1");
const upMinutesSpan2 = document.getElementById("upMinutesSpan2");
const upSecondsSpan1 = document.getElementById("upSecondsSpan1");
const upSecondsSpan2 = document.getElementById("upSecondsSpan2");

// current items
const hourspan1 = document.getElementById("hourspan1");
const hourspan2 = document.getElementById("hourspan2");
const minutesSpan1 = document.getElementById("minutesSpan1");
const minutesSpan2 = document.getElementById("minutesSpan2");
const secondsSpan1 = document.getElementById("secondsSpan1");
const secondsSpan2 = document.getElementById("secondsSpan2");

// previous item
const prevHourspan1 = document.getElementById("prevHourspan1");
const prevHourspan2 = document.getElementById("prevHourspan2");
const prevMinutesSpan1 = document.getElementById("prevMinutesSpan1");
const prevMinutesSpan2 = document.getElementById("prevMinutesSpan2");
const prevSecondsSpan1 = document.getElementById("prevSecondsSpan1");
const prevSecondsSpan2 = document.getElementById("prevSecondsSpan2");

resetButton.style.display = "none";
timerContainer.style.display = "none";

function resetCountdown() {
  inputContainer.style.display = "flex";
  resetButton.style.display = "none";
  timerContainer.style.display = "none";
  clearInterval(interval);
}

function startCountdown() {
  inputContainer.style.display = "none";
  resetButton.style.display = "flex";
  timerContainer.style.display = "flex";

  let hours = parseInt(document.getElementById("hours").value) || 0;
  let minutes = parseInt(document.getElementById("minutes").value) || 0;
  let seconds = parseInt(document.getElementById("seconds").value) || 0;

  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(interval);
    } else {
      totalSeconds--;
      updateCountdown(totalSeconds);
    }
  }, 1000);
}

function updateCountdown(totalSeconds) {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  // Update hours
  hourspan1.innerHTML = Math.floor(hours / 10);
  hourspan2.innerHTML = hours % 10;

  upHourspan1.innerHTML = Math.min(Math.floor((hours + 1) / 10), 9);
  upHourspan2.innerHTML = Math.min((hours + 1) % 10, 9);

  const prevHour1 = Math.max(Math.floor((hours - 1) / 10), 0);
  const prevHour2 = Math.max((hours - 1) % 10, 0);
  prevHourspan1.innerHTML = prevHour1;
  prevHourspan2.innerHTML = prevHour2;

  // Update minutes
  minutesSpan1.innerHTML = Math.floor(minutes / 10);
  minutesSpan2.innerHTML = minutes % 10;

  upMinutesSpan1.innerHTML = Math.min(Math.floor((minutes + 1) / 10), 9);
  upMinutesSpan2.innerHTML = Math.min((minutes + 1) % 10, 9);

  const prevMinute1 = Math.max(Math.floor((minutes - 1) / 10), 0);
  const prevMinute2 = Math.max((minutes - 1) % 10, 0);
  prevMinutesSpan1.innerHTML = prevMinute1;
  prevMinutesSpan2.innerHTML = prevMinute2;

  // Update seconds
  secondsSpan1.innerHTML = Math.floor(seconds / 10);
  secondsSpan2.innerHTML = seconds % 10;

  upSecondsSpan1.innerHTML = Math.min(Math.floor((seconds + 1) / 10), 9);
  upSecondsSpan2.innerHTML = Math.min((seconds + 1) % 10, 9);

  const prevSecond1 = Math.max(Math.floor((seconds - 1) / 10), 0);
  const prevSecond2 = Math.max((seconds - 1) % 10, 0);
  prevSecondsSpan1.innerHTML = prevSecond1;
  prevSecondsSpan2.innerHTML = prevSecond2;
}
