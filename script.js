function updateCounters() {
  const startDate = new Date("1999-10-16T00:00:00");
  const now = new Date();
  const diff = now - startDate;

  const years = now.getFullYear() - startDate.getFullYear();
  const months = (now.getMonth() - startDate.getMonth() + 12) % 12;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Cálculo de extras
  const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const coffee = totalDays * 3;
  const travelYears = now.getFullYear() - 2007 + (now.getMonth() >= 0 ? 1 : 0);
  const tpmDays = (years * 12 + months) * 5;

  document.getElementById("coffee").textContent = coffee;
  document.getElementById("travels").textContent = travelYears;
  document.getElementById("tpm").textContent = tpmDays;
}

// Atualizar a cada segundo
updateCounters();
setInterval(updateCounters, 1000);
