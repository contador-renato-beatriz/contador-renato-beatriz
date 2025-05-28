window.addEventListener('DOMContentLoaded', () => {
  const dataInicio = new Date("1999-10-16T00:00:00");
  const agora = new Date();

  const diffMs = agora - dataInicio;

  const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diffMs / (1000 * 60)) % 60);
  const segundos = Math.floor((diffMs / 1000) % 60);

  document.getElementById("tempo-juntos").textContent =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos de amor.`;

  // Cálculo de xícaras de café
  const xicarasPorDia = 3;
  const totalXicaras = dias * xicarasPorDia;
  document.getElementById("cafe").textContent = totalXicaras.toLocaleString("pt-BR");

  // TPM estimada
  const ciclosPorAno = 12;
  const anosJuntos = agora.getFullYear() - 1999 + (agora.getMonth() >= 9 ? 1 : 0);
  const tpmEstimadas = anosJuntos * ciclosPorAno;
  document.getElementById("tpm").textContent = `${tpmEstimadas} ciclos`;

  // Viagens desde 2007
  const anoAtual = agora.getFullYear();
  const viagens = anoAtual - 2007 + 1;
  document.getElementById("viagens").textContent = `${viagens} viagens`;
});
