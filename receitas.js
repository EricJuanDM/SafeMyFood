document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll('.btn');

  const destinos = [
    "pgmacarrao.html",
    "pgsopa.html",
    "pgfrango.html"
  ];

  botoes.forEach((botao, index) => {
    botao.addEventListener("click", (event) => {
      event.preventDefault(); // Impede comportamento padrão do link
      window.location.href = destinos[index];
    });
  });
});