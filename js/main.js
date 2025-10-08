// ===== Preloader =====
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 1s ease';
    setTimeout(() => (preloader.style.display = 'none'), 1000);
  }, 1500);
});

// ===== Language Switch =====
const translations = {
  en: {
    home: "Home",
    about: "About",
    products: "Products",
    team: "Team",
    investment: "Investment",
    contact: "Contact",
    heroTitle: "Natural wellness, authentic energy.",
    heroSubtitle: "We inspire a new way of healthy living.",
    learnMore: "Discover more",
    aboutTitle: "Our Philosophy",
    aboutText: "At Benessere we believe in the harmony between nature and wellness. We create experiences that nurture body and mind, blending flavor, health, and purpose.",
    productsTitle: "Natural Flavors",
    teamTitle: "Our Team",
    investTitle: "Investment Opportunity",
    investText: "Benessere is more than a brand: it's a movement towards conscious living. Our business model merges innovation, healthy eating, and sustainability. Join us in scaling a proven concept that impacts people and the planet positively.",
    investBtn: "Let's talk about investment",
    contactTitle: "Contact Us",
    contactText: "Ready to be part of Benessere? Write to us and let's grow this vision together."
  }
};

document.querySelectorAll('.lang').forEach(el => {
  el.addEventListener('click', () => {
    const lang = el.dataset.setlang;
    document.querySelectorAll('[data-lang]').forEach(el2 => {
      const key = el2.getAttribute('data-lang');
      if (translations[lang] && translations[lang][key]) {
        el2.textContent = translations[lang][key];
      }
    });
  });
});

// ===== Scroll Animations =====
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
sections.forEach(section => observer.observe(section));
