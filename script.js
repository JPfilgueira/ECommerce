const botaoInfo = document.getElementById("botao-info");
const textoExtra = document.getElementById("texto-extra");

botaoInfo.addEventListener("click", () => {
  const expandido = botaoInfo.getAttribute("aria-expanded") === "true";
  botaoInfo.setAttribute("aria-expanded", !expandido);
  textoExtra.hidden = expandido;
});
