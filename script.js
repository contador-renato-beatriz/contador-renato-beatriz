function updateCounter() {
  const startDate = new Date('1999-10-16T00:00:00');
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30.44); // média de dias por mês
  const years = now.getFullYear() - startDate.getFullYear();

  document.getElementById('timeTogether').innerText =
    `${years} anos, ${months % 12} meses, ${days % 30} dias, ${hours % 24} horas, ${minutes % 60} minutos, ${seconds % 60} segundos`;

  const coffeeCupsPerDay = 3;
  const estimatedCups = coffeeCupsPerDay * days;
  document.getElementById('coffeeCups').innerText = estimatedCups.toLocaleString('pt-BR');

  const currentYear = now.getFullYear();
  const travelStartYear = 2007;
  const totalTravels = currentYear - travelStartYear + 1;
  document.getElementById('travels').innerText = totalTravels;

  const tpmDays = Math.floor((days / 28) * 5); // 5 dias de TPM a cada 28 dias
  document.getElementById('tpmDays').innerText = tpmDays.toLocaleString('pt-BR');
}

// Atualiza imediatamente e depois a cada segundo
updateCounter();
setInterval(updateCounter, 1000);
