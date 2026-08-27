document.querySelectorAll(".project-btn, .hall-btn").forEach(function (link) {
  if (!link.hasAttribute("aria-label")) {
    link.setAttribute("aria-label", link.textContent.trim());
  }
});

const loadingScreen = document.querySelector(".loading-screen");
const loadingSkip = document.querySelector(".loading-skip");

function closeLoadingScreen() {
  if (!loadingScreen || loadingScreen.classList.contains("is-hidden")) {
    return;
  }

  loadingScreen.classList.add("is-hidden");
  document.body.classList.remove("is-loading");
  loadingScreen.setAttribute("aria-hidden", "true");
  window.setTimeout(function () {
    loadingScreen.hidden = true;
  }, 500);
}

if (loadingScreen) {
  document.body.classList.add("is-loading");
  loadingSkip.addEventListener("click", closeLoadingScreen);
  window.setTimeout(closeLoadingScreen, 1800);
}

const particleField = document.querySelector(".particle-field");

if (particleField) {
  for (let index = 0; index < 34; index += 1) {
    const particle = document.createElement("span");
    const isEmber = index % 3 === 0;

    particle.className = isEmber ? "particle ember" : "particle dust";
    particle.style.setProperty("--particle-x", `${Math.random() * 100}%`);
    particle.style.setProperty("--particle-size", `${isEmber ? Math.random() * 3 + 2 : Math.random() * 2 + 1}px`);
    particle.style.setProperty("--particle-duration", `${Math.random() * 8 + 7}s`);
    particle.style.setProperty("--particle-delay", `${Math.random() * -14}s`);
    particle.style.setProperty("--particle-drift", `${Math.random() * 100 - 50}px`);
    particleField.appendChild(particle);
  }
}

const revealElements = document.querySelectorAll(
  ".stats .stat-box, .skills-section .section-title, .skill-card, " +
  ".projects-section .section-title, .project-card, .hall-container, " +
  ".learning, footer"
);

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealElements.forEach(function (element) {
    element.classList.add("is-visible");
  });
} else if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16 });

  revealElements.forEach(function (element, index) {
    element.classList.add("scroll-reveal");
    element.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);
    revealObserver.observe(element);
  });

  function revealVisibleElements() {
    revealElements.forEach(function (element) {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < window.innerHeight * 0.9) {
        element.classList.add("is-visible");
      }
    });
  }

  window.addEventListener("scroll", revealVisibleElements, { passive: true });
  revealVisibleElements();
}
