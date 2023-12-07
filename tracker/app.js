const { exit } = require("process");

function calculatePeriod() {
  const lastPeriod = document.getElementById("lastPeriodDate");
  const lastPeriodDate = new Date(lastPeriod.value);
  const cycleLength = 28;

  const nextPeriodDate = new Date(
    lastPeriodDate.getTime() + cycleLength * 24 * 60 * 60 * 1000
  );

  const currentDate = new Date();
  const timeRemaining = nextPeriodDate.getTime() - currentDate.getTime();

  const daysRemaining = Math.ceil(timeRemaining / (24 * 60 * 60 * 1000));

  if (daysRemaining <=0||(nextPeriodDate.getTime()>currentDate.getTime()||(!nextPeriodDate.getTime()))) {
    const final = document.getElementById("Your_Result");
    final.innerHTML = `Invalid`;
    exit(0);
  }
  else {
    const final = document.getElementById("Your_Result");
    final.innerHTML = `Your next period is expected around ${nextPeriodDate.toDateString()}.<br>Time remaining: ${daysRemaining} days.
  <br><br> Please note that the accuracy of your data may be affected, as our period tracker is designed to accommodate cycles with intervals of either 23 or 28 days.`;
  }
}
