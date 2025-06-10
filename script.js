document.addEventListener('DOMContentLoaded', () => {
  const animatedSections = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  animatedSections.forEach(section => {
    observer.observe(section);
  });
});

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

document.getElementById('about-toggle').addEventListener('click', function() {
  const content = document.querySelector('.about-content');
  const icon = document.getElementById('toggle-icon');

  content.classList.toggle('open');
  icon.classList.toggle('open');
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
