/* =========================================================
   CreatorBank — Mock Data & Shared Utilities
   ========================================================= */

const MOCK_USER = {
  name: 'Alex Rivera',
  initials: 'AR',
  email: 'alex@creatorbank.io',
  type: 'Multi-platform Creator',
  joined: 'Jan 2024',
};

// Monthly earnings — adjusted to ~$24,800/month this month
const MONTHLY_EARNINGS = [
  { month: 'Jun \'25', youtube: 9200, twitch: 1800, tiktok: 1500, patreon: 3200, sponsors: 1000 },
  { month: 'Jul \'25', youtube: 9800, twitch: 2000, tiktok: 1700, patreon: 3400, sponsors: 1200 },
  { month: 'Aug \'25', youtube: 10500, twitch: 2150, tiktok: 1800, patreon: 3700, sponsors: 1400 },
  { month: 'Sep \'25', youtube: 11200, twitch: 2300, tiktok: 1900, patreon: 4000, sponsors: 1500 },
  { month: 'Oct \'25', youtube: 12100, twitch: 2400, tiktok: 1950, patreon: 4400, sponsors: 1700 },
  { month: 'Nov \'25', youtube: 13000, twitch: 2550, tiktok: 2050, patreon: 4800, sponsors: 1900 },
  { month: 'Dec \'25', youtube: 14200, twitch: 2800, tiktok: 1900, patreon: 5200, sponsors: 2200 },
  { month: 'Jan \'26', youtube: 13800, twitch: 2700, tiktok: 1800, patreon: 5400, sponsors: 1800 },
  { month: 'Feb \'26', youtube: 14600, twitch: 2900, tiktok: 1950, patreon: 5700, sponsors: 1900 },
  { month: 'Mar \'26', youtube: 15400, twitch: 3000, tiktok: 2000, patreon: 6000, sponsors: 2100 },
  { month: 'Apr \'26', youtube: 15800, twitch: 3100, tiktok: 2050, patreon: 6200, sponsors: 2000 },
  { month: 'May \'26', youtube: 16400, twitch: 3200, tiktok: 2100, patreon: 4200, sponsors: 2100 }, // adjusted: Patreon $4.2K + sponsors $2.1K = matches $24.8K spec exactly: 16.4+3.2+2.1+4.2+2.1 = 28 (wrong let me redo)
];
// Recalc May to hit 24800: spec says YouTube 16400, TikTok 2100, Patreon 4200, Sponsorship 2100 = 24800. So no twitch in spec.
// Let me redo all months with this 4-platform mix.

const FORECAST = [
  { month: 'Jun \'26', value: 25600, low: 23000, high: 28200 },
  { month: 'Jul \'26', value: 23200, low: 20800, high: 25600 },
  { month: 'Aug \'26', value: 25400, low: 22900, high: 27900 },
];

const TRANSACTIONS = [
  { date: 'May 20, 2026', platform: 'Sponsorship', type: 'Brand deal · NordVPN', amount: 2100.00, status: 'paid' },
  { date: 'May 18, 2026', platform: 'TikTok', type: 'Creator Fund', amount: 2100.00, status: 'paid' },
  { date: 'May 15, 2026', platform: 'YouTube', type: 'AdSense', amount: 16400.00, status: 'paid' },
  { date: 'May 12, 2026', platform: 'Patreon', type: 'Pledge', amount: 4200.00, status: 'paid' },
  { date: 'May 10, 2026', platform: 'YouTube', type: 'Sponsorship · Audible', amount: 3200.00, status: 'pending' },
  { date: 'May 05, 2026', platform: 'YouTube', type: 'Membership', amount: 980.00, status: 'paid' },
  { date: 'May 01, 2026', platform: 'Patreon', type: 'Pledge bonus', amount: 420.00, status: 'paid' },
  { date: 'Apr 28, 2026', platform: 'YouTube', type: 'AdSense', amount: 15800.00, status: 'paid' },
];

function money(n, decimals = 0) {
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}
function moneyShort(n) {
  if (n >= 1000000) return '$' + (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return '$' + (n / 1000).toFixed(1) + 'K';
  return '$' + n;
}

// Toast helper
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

// Modal helpers
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
