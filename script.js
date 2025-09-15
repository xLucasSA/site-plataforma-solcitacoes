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

// ==== INTERSECTION OBSERVER APRIMORADO ====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

// Observer para animações gerais
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.classList.add("animated");
      }, index * 100);
    }
  });
}, observerOptions);

// ==== ANIMAÇÃO DA NOVA VISUALIZAÇÃO ====
const visualizationObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const visualization = entry.target;

        // Animar flow
        const flowSteps = visualization.querySelectorAll(".flow-step-visual");
        flowSteps.forEach((step, index) => {
          setTimeout(() => {
            step.style.opacity = "1";
            step.style.transform = "translateY(0)";
          }, 800 + index * 200);
        });

        const benefitsCards =
          visualization.querySelectorAll(".benefits-visual");
        benefitsCards.forEach((step, index) => {
          setTimeout(() => {
            step.style.opacity = "1";
            step.style.transform = "translateY(0)";
          }, 800 + index * 200);
        });
      }
    });
  },
  { threshold: 0.3 }
);

// ==== ANIMAÇÕES DE ENTRADA PARA CARDS ====
function initCardAnimations() {
  // Benefit cards
  document.querySelectorAll(".benefits__item").forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px) scale(0.9)";
    card.style.transition = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    card.style.transitionDelay = `${index * 0.1}s`;
    fadeInObserver.observe(card);
  });

  // Flow steps
  document.querySelectorAll(".flow-step").forEach((step, index) => {
    step.style.opacity = "0";
    step.style.transform = "translateY(30px) rotate(2deg)";
    step.style.transition = "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)";
    step.style.transitionDelay = `${index * 0.15}s`;
    fadeInObserver.observe(step);
  });
}

// ==== INICIALIZAÇÃO DA NOVA VISUALIZAÇÃO ====
function initBenefitsVisualization() {
  const visualization = document.querySelector(".benefits-visualization");
  if (visualization) {
    const flowSteps = visualization.querySelectorAll(".flow-step-visual");
    flowSteps.forEach((step) => {
      step.style.opacity = "0";
      step.style.transform = "translateY(20px)";
      step.style.transition = "all 0.5s ease-out";
    });

    visualizationObserver.observe(visualization);
  }
}

// ==== LOADING E INICIALIZAÇÃO ====
document.addEventListener("DOMContentLoaded", function () {
  // Aguarda o carregamento completo
  setTimeout(() => {
    initBenefitsVisualization();
    initCardAnimations();
  }, 100);
});

// ==== PERFORMANCE OPTIMIZATION ====
let ticking = false;

function updateAnimations() {
  // Todas as animações baseadas em scroll aqui
  ticking = false;
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateAnimations);
    ticking = true;
  }
}

window.addEventListener("scroll", requestTick);

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
