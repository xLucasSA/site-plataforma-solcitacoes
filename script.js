// ==== SMOOTH SCROLLING COM OFFSET MELHORADO ====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight = 80;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Add current year on footer
document.addEventListener("DOMContentLoaded", () => {
  const footerText = document.querySelector(".footer__copyright");
  const currentYear = new Date().getFullYear();

  // Substitui apenas o número do ano, mantendo o restante do texto
  footerText.innerHTML = footerText.innerHTML.replace(/\d{4}/, currentYear);
});

// [ADICIONAR_TRACKING_ANALYTICS_AQUI]
// Google Analytics ou outras ferramentas de tracking podem ser adicionadas aqui

// [ADICIONAR_CHAT_WIDGET_AQUI]
// Widget de chat como Intercom, Zendesk Chat, etc.

// [ADICIONAR_FORMULARIO_CONTATO_AQUI]
// Integração com formulários de contato e APIs de email
