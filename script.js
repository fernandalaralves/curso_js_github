AOS.init();

const frases = [
  "Não aperte nesse botão novamente.",
  "Você não vai achar isso legal.",
  "ado ado ado, quem apertou mais de duas vezes é..."
];

const botao = document.getElementById("botao-magico");
const resultado = document.getElementById("resultado");


function sortearFrase() {
  const indice = Math.floor(Math.random() * frases.length);
  return frases[indice];
}

botao.addEventListener("click", () => {
  resultado.textContent = sortearFrase();
  AOS.refresh(); // Atualiza o AOS para animar o novo conteúdo
});