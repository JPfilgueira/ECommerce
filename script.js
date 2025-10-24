const botaoInfo = document.getElementById("botao-info");
const textoExtra = document.getElementById("texto-extra");

botaoInfo.addEventListener("click", () => {
  const expandido = botaoInfo.getAttribute("aria-expanded") === "true";
  botaoInfo.setAttribute("aria-expanded", !expandido);
  textoExtra.hidden = expandido;
  
  // Alterar o texto do botão
  botaoInfo.textContent = expandido ? "Ver mais informações" : "Ver menos informações";
});

// Adicionar interação ao formulário
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Obrigado pelo seu interesse! Em breve entraremos em contato.');
  form.reset();
});

// Adicionar animação de entrada para as seções
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});