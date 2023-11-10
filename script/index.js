// Adapte a função conforme necessário para o número de textos no carrossel
function startCarousel() {
  const textContainer = document.getElementById("text-carousel");
  const texts = textContainer.children;

  setInterval(() => {
    const firstText = texts[0];
    textContainer.removeChild(firstText);
    textContainer.appendChild(firstText);
  }, 5000); // Ajuste o intervalo conforme necessário
}

startCarousel();
