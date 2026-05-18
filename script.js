/* =========================================================
   LUMEN AI — Interactivity
   ========================================================= */

// --- Scroll reveal animations ---
const revealTargets = document.querySelectorAll(
  '.section__head, .about-grid__copy, .about-grid__stats, .feature, .step, .member, .contact'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => io.observe(el));

// --- Stagger children for feature & team grids ---
document.querySelectorAll('.features .feature, .team .member, .steps .step, .about-grid__stats .stat')
  .forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`;
  });

// --- Waitlist form: demo submission ---
const form = document.getElementById('waitlistForm');
const success = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const region = form.region.value;

    if (!name || !email || !region) {
      // simple inline highlight
      [form.name, form.email, form.region].forEach((f) => {
        if (!f.value.trim()) {
          f.style.borderColor = '#FF6BD0';
          setTimeout(() => { f.style.borderColor = ''; }, 1800);
        }
      });
      return;
    }

    // Pretend submit
    console.log('[Lumen AI] Waitlist submission:', Object.fromEntries(new FormData(form)));
    form.style.display = 'none';
    success.hidden = false;
  });
}

// --- Subtle parallax on the hero preview ---
const preview = document.querySelector('.preview-card');
if (preview && window.matchMedia('(min-width: 900px)').matches) {
  const onMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 6;
    const y = (e.clientY / window.innerHeight - 0.5) * 4;
    preview.style.transform = `rotateX(${8 - y}deg) rotateY(${x}deg)`;
  };
  window.addEventListener('mousemove', onMove, { passive: true });
}

// --- Smooth-scroll offset for sticky nav ---
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = 70;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  });
});
