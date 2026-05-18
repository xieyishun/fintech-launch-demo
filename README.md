# Lumen AI — Fintech Launch Demo

A single-page, fully responsive marketing site for a fictional AI Robo-Advisor targeting the North American market. Built with **plain HTML + CSS + JS** (no build step, no dependencies) so it deploys to Vercel in about 30 seconds.

> 🎓 This is a school-project template. Replace the placeholder copy, team names, and brand details with your team's actual concept before submitting.

---

## 📂 What's inside

```
webdemo/
├── index.html      ← all page content (Hero, About, Product, How, Team, Contact, Footer)
├── styles.css      ← dark blue/violet theme, animations, responsive layout
├── script.js       ← scroll reveals, form handling, hero parallax
└── README.md       ← this file
```

---

## 🚀 Run locally

Just open `index.html` in any browser. That's it.

Or in VS Code:
1. Install the **Live Server** extension
2. Right-click `index.html` → "Open with Live Server"

---

## ☁️ Deploy to Vercel (recommended)

### Option A — Drag & drop (fastest, no Git needed)

1. Go to https://vercel.com/new
2. Sign in (use GitHub if you have it, otherwise email)
3. Click **"Browse"** in the deploy panel and select the entire `webdemo` folder — or just drag the folder onto the page
4. Vercel will give you a live URL within ~20 seconds, like `https://webdemo-xxxx.vercel.app`

### Option B — Via Vercel CLI in VS Code (best for iterating)

```bash
npm install -g vercel
cd "E:\A2 Fintech Company Launch\webdemo"
vercel login
vercel               # creates a preview deployment
vercel --prod        # promotes the preview to your production URL
```

### Option C — Via GitHub (best if multiple teammates edit)

1. Create a new repo on GitHub, push the `webdemo` folder
2. In Vercel, click **New Project → Import Git Repository**
3. Pick your repo → Deploy
4. From now on, every `git push` auto-deploys

---

## ✏️ What to customize before submitting

Search-and-replace these placeholders in `index.html`:

| Placeholder | Where | Replace with |
|---|---|---|
| `Lumen AI` / `LumenAI` | everywhere | your team's company name |
| Hero tagline & lede | `.hero__title`, `.hero__lede` | your value proposition |
| Stats (0.25%, $1, 24/7, $2.3T) | `.about-grid__stats` | numbers from your business plan |
| Six feature cards | `.features` | your actual product features |
| Team members (Alex Chen, etc.) | `.team` | your real team |
| Email addresses | `mailto:hello@lumen.ai` etc. | real or fake contact info |
| Footer disclosures | `.footer__disclaimer` | adjust to your jurisdiction |

The avatar circles for team members use the initials inline as text — just change `AC`, `PR`, etc. to the right initials, and tweak the `--c1` / `--c2` CSS variables for different gradient colors per person.

---

## 🎨 Theme variables

All colors live in `:root` at the top of `styles.css`. Change these and the whole site updates:

```css
--violet: #7C5CFF;
--cyan: #3DD9EB;
--pink: #FF6BD0;
--grad-primary: linear-gradient(135deg, #7C5CFF 0%, #3DD9EB 100%);
```

---

## ✅ Checklist before your presentation

- [ ] Replaced all company-name placeholders
- [ ] Updated team member names, roles, and bios
- [ ] Confirmed contact form works (currently shows a success message — connect to Formspree, Web3Forms, or Vercel Forms if you want real submissions)
- [ ] Deployed to Vercel and tested the live URL on phone + laptop
- [ ] Added the Vercel URL to your business plan document and slide deck
- [ ] Tested all anchor links (Product, How it works, Team, Contact)

Good luck with the launch! 🚀
