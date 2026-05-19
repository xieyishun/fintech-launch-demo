# CreatorBank — Demo Site

> An all-in-one financial platform for content creators.
> School project · Fintech Company Launch (A2)

🌐 **Live demo:** _(your Vercel URL here)_
👨‍🎓 **Team:** xieyishun + team
🎓 **Course:** A2 Fintech Company Launch

---

## What is CreatorBank?

A premium fintech platform built for the creator economy. Manage earnings across YouTube, Twitch, TikTok, and Patreon. Plan taxes. Apply for creator-specific loans. Get AI-powered monetization insights.

This is a **frontend-only demo** built with vanilla HTML, CSS, and JavaScript. All data is mocked. No backend, no database — just a polished walkthrough of what the real product would feel like.

---

## Pages (9 total)

| # | Page | URL | What's in it |
|---|------|-----|-------------|
| 1 | Landing | `/index.html` | Hero, problem/solution, features, testimonials, pricing |
| 2 | Sign up | `/pages/signup.html` | OAuth + email signup, creator-type selector |
| 3 | Log in | `/pages/login.html` | OAuth + email login |
| 4 | Dashboard | `/pages/dashboard.html` | KPIs, earnings chart, platforms, transactions |
| 5 | Earnings | `/pages/earnings.html` | Heatmap calendar, trend lines, full transaction history |
| 6 | Tax Planning | `/pages/taxes.html` | Tax calculator, quarterly schedule, deduction tracker, AI advisor |
| 7 | Creator Loans | `/pages/loans.html` | Eligibility, loan types, calculator slider, application flow |
| 8 | Insights | `/pages/insights.html` | AI recommendations, top content, ROI per platform, brand matches |
| 9 | Settings | `/pages/settings.html` | Profile, platforms, tax info, payment, notifications, API keys |
| 10 | Pricing | `/pages/pricing.html` | 3 tiers, comparison table, FAQ |

---

## Tech stack

- **HTML / CSS / Vanilla JS** — no frameworks, no build step
- **[Chart.js](https://www.chartjs.org/)** via CDN — for all data visualizations
- **Google Fonts** — Inter, Space Grotesk, JetBrains Mono
- **Lucide-style SVG icons** — inlined
- **Vercel** — for static hosting

---

## Project structure

```
.
├── index.html               # Landing page
├── css/
│   ├── main.css            # Design system & shared components
│   ├── landing.css         # Landing-page-specific styles
│   ├── app.css             # Dashboard/app shell (sidebar, topbar, cards)
│   └── auth.css            # Login/signup layout
├── js/
│   ├── data.js             # Mock data + helpers + toast/modal
│   ├── landing.js          # Hero chart, scroll reveal
│   ├── layout.js           # Injects sidebar + topbar into app pages
│   └── dashboard.js        # Dashboard charts and transactions
└── pages/
    ├── login.html
    ├── signup.html
    ├── dashboard.html
    ├── earnings.html
    ├── taxes.html
    ├── loans.html
    ├── insights.html
    ├── settings.html
    └── pricing.html
```

---

## Mock data

The demo follows one creator's story:

> **Alex Rivera** — multi-platform creator
> 900K YouTube subs · 250K Twitch followers · 2.5M TikTok · 1,200 Patreon members
> **$20,200/month** · **$200K YTD** · **15% MoM growth** · est. **$60K** tax obligation

All charts, KPIs, transactions, and recommendations reference this persona, defined in [`js/data.js`](./js/data.js).

---

## Run locally

It's static HTML — just open `index.html` in any browser. Or for nicer navigation:

```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000
```

---

## Deploy to Vercel

This site is pre-configured for Vercel — push to GitHub and import. No build settings needed.

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo
3. Leave all settings as default (Vercel auto-detects static HTML)
4. Click **Deploy** — done in ~30 seconds

---

## Design

- **Brand colors:** Primary `#7C3AED` (purple), Secondary `#06B6D4` (cyan), Accent `#F59E0B` (amber)
- **Theme:** Dark, premium fintech with creator-friendly energy
- **Typography:** Inter (body) · Space Grotesk (display) · JetBrains Mono (numbers)

---

## License

For educational use. Mock data only — not a real financial product.

Made with 💜 for the A2 Fintech Launch project.
