/* Landing page interactions — Light theme */

window.addEventListener('DOMContentLoaded', () => {
  // Hero preview forecast chart
  const ctx = document.getElementById('heroChart');
  if (ctx && window.Chart) {
    const grad = ctx.getContext('2d').createLinearGradient(0, 0, 0, 180);
    grad.addColorStop(0, 'rgba(91, 44, 111, 0.35)');
    grad.addColorStop(1, 'rgba(91, 44, 111, 0)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          {
            label: 'Actual',
            data: [19500, 21200, 24800, null, null, null],
            borderColor: '#5B2C6F',
            backgroundColor: grad,
            borderWidth: 2.5,
            tension: 0.4,
            fill: true,
            pointRadius: 0,
          },
          {
            label: 'Forecast',
            data: [null, null, 24800, 25600, 23200, 25400],
            borderColor: '#17A2B8',
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            borderDash: [4, 4],
            tension: 0.4,
            pointRadius: 0,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: {
          x: { grid: { display: false }, ticks: { color: '#8A94A6', font: { size: 9 } } },
          y: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { color: '#8A94A6', font: { size: 9 }, callback: (v) => '$' + (v/1000) + 'K' } }
        }
      }
    });
  }
});

// Scroll reveal
const reveals = document.querySelectorAll('.problem-card, .feature-card, .step, .testimonial, .price-card, .diff-card');
reveals.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));

// Parallax hero preview
const shell = document.querySelector('.preview-shell');
if (shell && window.matchMedia('(min-width: 900px)').matches) {
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 4;
    const y = (e.clientY / window.innerHeight - 0.5) * 3;
    shell.style.transform = `rotateX(${2 - y}deg) rotateY(${-3 + x}deg)`;
  }, { passive: true });
}

// Newsletter form
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

// Smooth scroll
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
