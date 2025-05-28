function atualizarContador() {
  const inicio = new Date("1999-10-16T00:00:00");
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("contador").textContent =
    `${dias} dias, ${horas}h ${minutos}min ${segundos}s`;

  // TPM estimada (5 dias por mês)
  const anos = (agora.getFullYear() - 1999);
  const meses = (anos * 12) + (agora.getMonth());
  const tpmDias = meses * 5;
  document.getElementById("tpm").textContent = `${tpmDias} dias`;
  // Cálculo das viagens desde 2007
const anoAtual = new Date().getFullYear();
const viagens = anoAtual - 2007 + 1;
document.getElementById("viagens").textContent = `${viagens} viagens`;
}

atualizarContador();
setInterval(atualizarContador, 1000);
