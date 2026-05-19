/* Landing page interactions */

// --- Hero preview chart ---
window.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('heroChart');
  if (ctx && window.Chart) {
    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(124, 58, 237, 0.5)');
    gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          data: [9200, 10100, 11800, 12400, 13900, 14800, 16100, 17500, 18900, 19400, 19850, 20200],
          borderColor: '#7C3AED',
          backgroundColor: gradient,
          borderWidth: 2.5,
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: '#06B6D4',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { color: 'rgba(241,245,249,0.4)', font: { size: 10 } } },
          y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: 'rgba(241,245,249,0.4)', font: { size: 10 } } }
        }
      }
    });
  }
});

// --- Scroll reveal ---
const reveals = document.querySelectorAll('.section, .problem-card, .feature-card, .step, .testimonial, .price-card');
reveals.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => io.observe(el));

// --- Hero preview parallax ---
const shell = document.querySelector('.preview-shell');
if (shell && window.matchMedia('(min-width: 900px)').matches) {
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 4;
    const y = (e.clientY / window.innerHeight - 0.5) * 3;
    shell.style.transform = `rotateX(${4 - y}deg) rotateY(${x}deg)`;
  }, { passive: true });
}

// --- Newsletter form ---
const form = document.getElementById('newsletterForm');
const toast = document.getElementById('toast');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.querySelector('input').value.trim()) return;
    form.reset();
    toast.classList.add('is-visible');
    setTimeout(() => toast.classList.remove('is-visible'), 3000);
  });
}

// --- Smooth scroll for in-page anchors ---
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  });
});
