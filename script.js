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

// ==== HEADER SCROLL EFFECT MELHORADO ====
let lastScrollY = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    header.style.backdropFilter = "blur(15px)";
    header.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.15)";
  } else {
    header.style.backgroundColor = "rgba(255, 255, 255, 1)";
    header.style.backdropFilter = "none";
    header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  }

  lastScrollY = currentScrollY;
});

// ==== EFEITO PARALLAX ====
function initParallax() {
  const parallaxElements = document.querySelectorAll(".parallax-element");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach((element) => {
      const rate = scrolled * -0.3;
      element.style.transform = `translateY(${rate}px)`;
    });
  });
}

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

        // Animar dashboard mockup
        const dashboardMockup =
          visualization.querySelector(".dashboard-mockup");
        if (dashboardMockup) {
          setTimeout(() => {
            dashboardMockup.style.opacity = "1";
            dashboardMockup.style.transform =
              "rotateX(10deg) rotateY(-5deg) translateY(0)";
          }, 200);
        }

        // Animar metric cards
        const metricCards = visualization.querySelectorAll(".metric-card");
        metricCards.forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateZ(20px) scale(1)";
            card.classList.add("animate-in");
          }, 400 + index * 150);
        });

        // Animar flow
        const flowSteps = visualization.querySelectorAll(".flow-step-visual");
        flowSteps.forEach((step, index) => {
          setTimeout(() => {
            step.style.opacity = "1";
            step.style.transform = "translateY(0)";
          }, 800 + index * 200);
        });

        // Animar arrows
        const arrows = visualization.querySelectorAll(".flow-arrow");
        arrows.forEach((arrow, index) => {
          setTimeout(() => {
            arrow.style.opacity = "1";
          }, 1000 + index * 200);
        });
      }
    });
  },
  { threshold: 0.3 }
);

// ==== ANIMAÇÕES DE ENTRADA PARA CARDS ====
function initCardAnimations() {
  // Benefit cards
  document.querySelectorAll(".benefit-card").forEach((card, index) => {
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
    // Definir estado inicial
    const dashboardMockup = visualization.querySelector(".dashboard-mockup");
    if (dashboardMockup) {
      dashboardMockup.style.opacity = "0";
      dashboardMockup.style.transform =
        "rotateX(10deg) rotateY(-5deg) translateY(30px)";
      dashboardMockup.style.transition =
        "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)";
    }

    const metricCards = visualization.querySelectorAll(".metric-card");
    metricCards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateZ(0px) scale(0.8)";
      card.style.transition = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    });

    const flowSteps = visualization.querySelectorAll(".flow-step-visual");
    flowSteps.forEach((step) => {
      step.style.opacity = "0";
      step.style.transform = "translateY(20px)";
      step.style.transition = "all 0.5s ease-out";
    });

    const arrows = visualization.querySelectorAll(".flow-arrow");
    arrows.forEach((arrow) => {
      arrow.style.opacity = "0";
      arrow.style.transition = "opacity 0.4s ease";
    });

    visualizationObserver.observe(visualization);
  }
}

// ==== INTERAÇÕES DINÂMICAS ====
function initDynamicInteractions() {
  // Hover effects para metric cards
  document.querySelectorAll(".metric-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateZ(30px) scale(1.05)";
      this.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateZ(20px) scale(1)";
      this.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
    });
  });

  // Efeito de ripple nos botões
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
      `;

      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// ==== NÚMEROS ANIMADOS ====
function animateNumbers() {
  const metricValues = document.querySelectorAll(".metric-value");

  metricValues.forEach((value) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const text = target.textContent;
            const isNegative = text.includes("-");
            const number = parseInt(text.replace(/[^0-9]/g, ""));
            const suffix = text.replace(/[^A-Za-z%]/g, "");

            let current = 0;
            const increment = number / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= number) {
                current = number;
                clearInterval(timer);
              }
              target.textContent =
                (isNegative ? "-" : "+") + Math.floor(current) + suffix;
            }, 30);

            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(value);
  });
}

// ==== LOADING E INICIALIZAÇÃO ====
document.addEventListener("DOMContentLoaded", function () {
  // Aguarda o carregamento completo
  setTimeout(() => {
    initBenefitsVisualization();
    initCardAnimations();
    initDynamicInteractions();
    initParallax();
    animateNumbers();
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

// ==== CSS PARA ANIMAÇÕES (ADICIONAR VIA JS) ====
const style = document.createElement("style");
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .animate-in {
    animation: slideInUp 0.6s ease-out forwards;
  }
  
  @keyframes slideInUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

// [ADICIONAR_TRACKING_ANALYTICS_AQUI]
// Google Analytics ou outras ferramentas de tracking podem ser adicionadas aqui

// [ADICIONAR_CHAT_WIDGET_AQUI]
// Widget de chat como Intercom, Zendesk Chat, etc.

// [ADICIONAR_FORMULARIO_CONTATO_AQUI]
// Integração com formulários de contato e APIs de email
