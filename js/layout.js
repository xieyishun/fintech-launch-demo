/* =========================================================
   Sidebar HTML injection — keeps all app pages DRY
   ========================================================= */

const SIDEBAR_HTML = `
  <a href="../index.html" class="logo sidebar__logo">
    <span class="logo__mark">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M8 5v14l11-7L8 5z" fill="currentColor"/></svg>
    </span>
    <span><span class="logo__text">Creator</span><span class="logo__text-accent">Bank</span></span>
  </a>

  <div class="sidebar__section">Main</div>
  <a class="sidebar__item" href="dashboard.html" data-page="dashboard">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
    Dashboard
  </a>
  <a class="sidebar__item" href="earnings.html" data-page="earnings">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    Earnings
  </a>
  <a class="sidebar__item" href="taxes.html" data-page="taxes">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    Tax Planning
  </a>
  <a class="sidebar__item" href="loans.html" data-page="loans">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
    Creator Loans
  </a>
  <a class="sidebar__item" href="insights.html" data-page="insights">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    Insights
  </a>

  <div class="sidebar__section">Account</div>
  <a class="sidebar__item" href="settings.html" data-page="settings">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
    Settings
  </a>
  <a class="sidebar__item" href="../index.html">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
    Sign out
  </a>

  <div class="sidebar__upgrade">
    <h4>Upgrade to Business</h4>
    <p>Higher loan limits and S-Corp setup help.</p>
    <a href="pricing.html" class="btn btn--primary btn--sm btn--full">See plans</a>
  </div>
`;

const TOPBAR_TEMPLATE = (title, subtitle) => `
  <button class="topbar__icon-btn topbar__menu-btn" aria-label="Menu">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
  </button>
  <div class="topbar__page-title">
    <h1>${title}</h1>
    <p>${subtitle}</p>
  </div>
  <div class="topbar__actions">
    <div class="topbar__search">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="search" placeholder="Search..." />
    </div>
    <button class="topbar__icon-btn" aria-label="Notifications">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      <span class="badge-count">3</span>
    </button>
    <div class="topbar__profile">
      <div class="topbar__avatar">AR</div>
      <div>
        <div class="topbar__name">Alex Rivera</div>
        <div class="topbar__role">Pro plan</div>
      </div>
    </div>
  </div>
`;

// Inject on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  if (sidebar && sidebar.innerHTML.trim() === '') {
    sidebar.innerHTML = SIDEBAR_HTML;
  }
  const topbar = document.getElementById('topbar');
  if (topbar && topbar.innerHTML.trim() === '') {
    const title = topbar.dataset.title || 'Dashboard';
    const subtitle = topbar.dataset.subtitle || '';
    topbar.innerHTML = TOPBAR_TEMPLATE(title, subtitle);
  }

  // Mark active sidebar item
  const path = window.location.pathname.split('/').pop().replace('.html', '');
  document.querySelectorAll('.sidebar__item').forEach(item => {
    if (item.dataset.page === path) item.classList.add('sidebar__item--active');
  });

  // Mobile menu toggle
  const menuBtn = document.querySelector('.topbar__menu-btn');
  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => sidebar.classList.toggle('is-open'));
  }
});
