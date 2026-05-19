# CreatorBank — Fintech Demo

> Banking for creators with unpredictable income.

A complete static web demo for **A2 Fintech Company Launch**.
Light-theme Stripe-style fintech UI with 11 fully interactive pages.

---

## ✨ What's inside

### Public pages
- **`index.html`** — Landing page with 5 creator pain points, 6 features, 3-step how-it-works, differentiation section, testimonials, pricing preview, CTA
- **`pages/features.html`** — 8 features detailed with visual mockups
- **`pages/pricing.html`** — 3-tier pricing ($0 / $19 / $79) + feature comparison table + FAQ
- **`pages/faq.html`** — Full FAQ organized into 6 categories
- **`pages/login.html`** + **`pages/signup.html`** — Auth pages with OAuth + creator-type selector

### Authenticated app
- **`pages/dashboard.html`** — 4 KPI cards · Cash flow forecast chart · Revenue mix donut · Connected platforms · Quick actions · Recent transactions
- **`pages/earnings.html`** — Connected platforms manager · Stacked bar history chart · Earnings table
- **`pages/taxes.html`** — Tax reserve tracker · Quarterly estimates · AI Tax Advisor · Upcoming deadlines · Document downloads
- **`pages/loans.html`** — 🌟 The big one. Combines **4 financial modules**:
  - 💰 Revenue Advance (slider calculator, instant approval)
  - ⚡ Early Payout (pending payouts list, claim now)
  - 🏦 Creator Loans (3 loan types + calculator)
  - 💳 Debit Card (visual card + cashback)
  - 🐷 High-Yield Savings (4.5% APY + auto-save calculator)
- **`pages/insights.html`** — AI growth signal hero · 6 personalized insight cards · Per-video ROI tracker
- **`pages/settings.html`** — Profile, notifications, security, danger zone

---

## 🎨 Design system

| Color | Hex | Usage |
|---|---|---|
| Deep Purple | `#5B2C6F` | Primary brand, headlines, accents |
| Teal | `#17A2B8` | Primary CTAs, action buttons |
| Gold | `#FFA500` | Accents, success metrics, "earn" highlights |
| Charcoal | `#2C3E50` | Body text, dark backgrounds |
| Off-white | `#F8F9FA` | Page background |
| Success Green | `#27AE60` | Paid/positive |
| Error Red | `#E74C3C` | Errors/alerts |

**Typography:** Space Grotesk (display), Inter (body), JetBrains Mono (numbers).
**Style:** Premium fintech (Stripe-like). Light theme. Soft shadows. Subtle gradients.

---

## 🚀 Run locally

```bash
# Easiest: open index.html in a browser

# Or run a local server (any one works):
python -m http.server 8000
# then visit http://localhost:8000
```

## 🌐 Deploy to Vercel

```bash
# Already set up — just push to GitHub and Vercel will pick it up
git add .
git commit -m "Update CreatorBank demo to light theme"
git push
```

---

## 📊 Mock data (Alex Rivera — multi-platform creator)

| Source | Subscribers/Followers | May 2026 |
|---|---|---|
| YouTube | 900K | $16,400 |
| Patreon | 1,200 members | $4,200 |
| TikTok | 2.5M | $2,100 |
| Sponsorships | 2 active (NordVPN, Audible) | $2,100 |
| **Total** | | **$24,800** |

- Tax reserve: $7,440 (28% auto)
- Available cash: $17,360
- Forecast (June): $25,600
- Pre-approved credit line: $50K

---

## 💜 Differentiation: Growth-as-Collateral Banking

> *"We don't bank your past. We bank your growth."*

Most fintech for creators (Karat, Stir) underwrites based on last year's earnings — a snapshot of who you were. **CreatorBank underwrites based on your follower growth rate** — a signal of who you're becoming.

In the demo, your "$35K → $50K credit limit increase" appears in the AI Insights page, triggered by an 18% subscriber jump in 90 days. This is the storyline judges should remember.

---

## 🛠 Tech

- Vanilla HTML/CSS/JS — no build step, no framework
- Chart.js via CDN for data viz
- Google Fonts via CDN
- Mobile-responsive (works down to 320px)

---

Made with 💜 for the A2 Fintech Launch project.
