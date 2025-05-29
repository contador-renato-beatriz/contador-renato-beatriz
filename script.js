const startDate = new Date("1999-10-16T00:00:00");
const now = () => new Date();

function updateCounter() {
  const current = now();
  const diff = current - startDate;

  const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const totalMonths = Math.floor(totalDays / 30.4375);
  const totalYears = Math.floor(totalMonths / 12);

  const remainingMonths = totalMonths % 12;
  const remainingDays = totalDays % 30.4375;
  const remainingHours = totalHours % 24;
  const remainingMinutes = totalMinutes % 60;
  const remainingSeconds = totalSeconds % 60;

  document.getElementById("years").textContent = totalYears;
  document.getElementById("months").textContent = remainingMonths;
  document.getElementById("days").textContent = Math.floor(remainingDays);
  document.getElementById("hours").textContent = remainingHours;
  document.getElementById("minutes").textContent = remainingMinutes;
  document.getElementById("seconds").textContent = remainingSeconds;

  document.getElementById("coffee").textContent = totalDays * 3;
  document.getElementById("trips").textContent = Math.max(0, current.getFullYear() - 2007 + 1);
  document.getElementById("tpm").textContent = Math.floor(totalMonths * 5);
}

setInterval(updateCounter, 1000);
updateCounter();
