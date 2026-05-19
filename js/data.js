/* =========================================================
   CreatorBank — Mock Data & Shared Utilities
   ========================================================= */

// --- Mock user profile ---
const MOCK_USER = {
  name: 'Alex Rivera',
  initials: 'AR',
  email: 'alex@creatorbank.io',
  type: 'Multi-platform Creator',
  joined: 'Jan 2024',
  platforms: {
    youtube: { name: 'YouTube', followers: '900K subs', earnings: 8500, color: '#FF0000', logo: '▶' },
    twitch:  { name: 'Twitch',  followers: '250K followers', earnings: 3200, color: '#9146FF', logo: '🟣' },
    tiktok:  { name: 'TikTok',  followers: '2.5M followers', earnings: 2100, color: '#FE2C55', logo: '♪' },
    patreon: { name: 'Patreon', followers: '1,200 members',   earnings: 6400, color: '#FF424D', logo: '☕' },
  }
};

// --- Monthly earnings, 12 months trailing ---
const MONTHLY_EARNINGS = [
  { month: 'Jun \'25', youtube: 5400, twitch: 1800, tiktok: 900,  patreon: 3200 },
  { month: 'Jul \'25', youtube: 5800, twitch: 2000, tiktok: 1100, patreon: 3400 },
  { month: 'Aug \'25', youtube: 6200, twitch: 2150, tiktok: 1250, patreon: 3700 },
  { month: 'Sep \'25', youtube: 6500, twitch: 2300, tiktok: 1400, patreon: 4000 },
  { month: 'Oct \'25', youtube: 6900, twitch: 2400, tiktok: 1500, patreon: 4400 },
  { month: 'Nov \'25', youtube: 7100, twitch: 2550, tiktok: 1650, patreon: 4800 },
  { month: 'Dec \'25', youtube: 7800, twitch: 2800, tiktok: 1800, patreon: 5200 },
  { month: 'Jan \'26', youtube: 7300, twitch: 2700, tiktok: 1700, patreon: 5400 },
  { month: 'Feb \'26', youtube: 7600, twitch: 2900, tiktok: 1850, patreon: 5700 },
  { month: 'Mar \'26', youtube: 8000, twitch: 3000, tiktok: 1950, patreon: 6000 },
  { month: 'Apr \'26', youtube: 8200, twitch: 3100, tiktok: 2000, patreon: 6200 },
  { month: 'May \'26', youtube: 8500, twitch: 3200, tiktok: 2100, patreon: 6400 },
];

// --- Recent transactions ---
const TRANSACTIONS = [
  { date: 'May 14, 2026', platform: 'YouTube', type: 'AdSense', amount: 2840.50, status: 'paid' },
  { date: 'May 12, 2026', platform: 'Patreon', type: 'Pledge', amount: 6400.00, status: 'paid' },
  { date: 'May 10, 2026', platform: 'Twitch',  type: 'Subs & Bits', amount: 1620.30, status: 'pending' },
  { date: 'May 08, 2026', platform: 'TikTok',  type: 'Creator Fund', amount: 980.75, status: 'paid' },
  { date: 'May 05, 2026', platform: 'YouTube', type: 'Sponsorship', amount: 4500.00, status: 'paid' },
  { date: 'May 03, 2026', platform: 'Twitch',  type: 'Sponsorship', amount: 1580.00, status: 'paid' },
  { date: 'May 01, 2026', platform: 'TikTok',  type: 'Brand deal', amount: 1120.00, status: 'paid' },
  { date: 'Apr 28, 2026', platform: 'YouTube', type: 'AdSense', amount: 1860.20, status: 'paid' },
];

// --- Helpers ---
function money(n, decimals = 0) {
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}
function moneyShort(n) {
  if (n >= 1000000) return '$' + (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return '$' + (n / 1000).toFixed(1) + 'K';
  return '$' + n;
}

// --- Active sidebar item highlighting ---
window.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop().replace('.html', '');
  document.querySelectorAll('.sidebar__item').forEach(item => {
    if (item.dataset.page === path) item.classList.add('sidebar__item--active');
    else item.classList.remove('sidebar__item--active');
  });
});

// --- Mobile sidebar toggle ---
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.topbar__menu-btn');
  const sidebar = document.querySelector('.sidebar');
  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => sidebar.classList.toggle('is-open'));
    document.addEventListener('click', (e) => {
      if (sidebar.classList.contains('is-open') &&
          !sidebar.contains(e.target) &&
          !menuBtn.contains(e.target)) {
        sidebar.classList.remove('is-open');
      }
    });
  }
});

// --- Toast helper ---
function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('is-visible'));
  setTimeout(() => {
    toast.classList.remove('is-visible');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- Modal helpers ---
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('is-open');
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('is-open');
}
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('is-open');
  }
  if (e.target.closest('[data-close-modal]')) {
    e.target.closest('.modal-backdrop').classList.remove('is-open');
  }
});
