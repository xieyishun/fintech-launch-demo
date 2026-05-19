/* Dashboard page interactions */

// ----- Earnings stacked bar chart -----
window.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('earningsChart');
  if (ctx && window.Chart && typeof MONTHLY_EARNINGS !== 'undefined') {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: MONTHLY_EARNINGS.map(m => m.month),
        datasets: [
          { label: 'YouTube', data: MONTHLY_EARNINGS.map(m => m.youtube), backgroundColor: '#FF0000', borderRadius: 4, stack: 's' },
          { label: 'Twitch', data: MONTHLY_EARNINGS.map(m => m.twitch), backgroundColor: '#9146FF', borderRadius: 4, stack: 's' },
          { label: 'TikTok', data: MONTHLY_EARNINGS.map(m => m.tiktok), backgroundColor: '#FE2C55', borderRadius: 4, stack: 's' },
          { label: 'Patreon', data: MONTHLY_EARNINGS.map(m => m.patreon), backgroundColor: '#FF424D', borderRadius: 4, stack: 's' },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#0F172A',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            padding: 12,
            callbacks: {
              label: (ctx) => `${ctx.dataset.label}: $${ctx.raw.toLocaleString()}`
            }
          }
        },
        scales: {
          x: { stacked: true, grid: { display: false }, ticks: { color: 'rgba(241,245,249,0.5)' } },
          y: {
            stacked: true,
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: 'rgba(241,245,249,0.5)', callback: (v) => '$' + (v / 1000) + 'K' }
          }
        }
      }
    });
  }

  // ----- Revenue mix donut -----
  const mixCtx = document.getElementById('mixChart');
  if (mixCtx && window.Chart) {
    new Chart(mixCtx, {
      type: 'doughnut',
      data: {
        labels: ['YouTube', 'Patreon', 'Twitch', 'TikTok'],
        datasets: [{
          data: [8500, 6400, 3200, 2100],
          backgroundColor: ['#FF0000', '#FF424D', '#9146FF', '#FE2C55'],
          borderColor: 'transparent',
          borderWidth: 0,
          spacing: 4,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '68%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: 'rgba(241,245,249,0.7)', boxWidth: 10, padding: 14, font: { size: 11 } }
          },
          tooltip: {
            backgroundColor: '#0F172A',
            callbacks: {
              label: (ctx) => `${ctx.label}: $${ctx.raw.toLocaleString()} (${((ctx.raw / 20200) * 100).toFixed(1)}%)`
            }
          }
        }
      }
    });
  }

  // ----- Transactions table -----
  const tbody = document.getElementById('txBody');
  if (tbody && typeof TRANSACTIONS !== 'undefined') {
    tbody.innerHTML = TRANSACTIONS.map(t => {
      const platLogo = {
        'YouTube': '<span class="platform-item__logo platform-item__logo--youtube" style="width:24px;height:24px;font-size:0.65rem;display:inline-flex;vertical-align:middle;margin-right:8px;border-radius:6px;">▶</span>',
        'Twitch':  '<span class="platform-item__logo platform-item__logo--twitch" style="width:24px;height:24px;font-size:0.7rem;display:inline-flex;vertical-align:middle;margin-right:8px;border-radius:6px;">Tw</span>',
        'TikTok':  '<span class="platform-item__logo platform-item__logo--tiktok" style="width:24px;height:24px;font-size:0.7rem;display:inline-flex;vertical-align:middle;margin-right:8px;border-radius:6px;">Tk</span>',
        'Patreon': '<span class="platform-item__logo platform-item__logo--patreon" style="width:24px;height:24px;font-size:0.7rem;display:inline-flex;vertical-align:middle;margin-right:8px;border-radius:6px;">P</span>',
      };
      const statusBadge = t.status === 'paid'
        ? '<span class="badge badge--success"><span class="badge__dot"></span>Paid</span>'
        : '<span class="badge badge--warning"><span class="badge__dot"></span>Pending</span>';
      return `
        <tr>
          <td>${t.date}</td>
          <td>${platLogo[t.platform] || ''}${t.platform}</td>
          <td>${t.type}</td>
          <td style="text-align:right" class="mono">$${t.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
          <td>${statusBadge}</td>
        </tr>
      `;
    }).join('');
  }

  // ----- Add platform buttons -----
  document.getElementById('addPlatformBtn')?.addEventListener('click', () => openModal('platformModal'));
  document.getElementById('addPlatformBtn2')?.addEventListener('click', () => openModal('platformModal'));
});

function connectPlatform(name) {
  closeModal('platformModal');
  showToast(`${name} connected successfully!`);
}
