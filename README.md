# Buzzed Coffee — buzzedcoffeenv.com

Redesigned website for **Buzzed Coffee** (941 N. Virginia St. Suite B, Reno, NV 89503).
Static site (HTML/CSS/JS, no build step) — deploys to Vercel as-is.

## Sections
- Hero with live **Open / Closed** status (Reno time) and the new Banana syrup reel
- **Fall Lineup** + new Banana syrup combos
- **Full menu** with tabs + search: Coffee, Tea/Matcha/Chai (with flavor combos), Refreshers (21 flavors), Seasonal, Food & Deals, Other Drinks, plus all syrups & milks
- **Refresher Lab** — pick base, size and up to 3 flavors; it names, prices and copies the order
- **Sip & Snack Deal** ($13.49)
- **Events** — Coffee Crawl, Garage Babes Pilates schedule (past dates hide automatically), Cup Contest, pop-ups
- **Community** — reels (Nevada Hockey sponsorship, Dam Good Dogs pop-up, etc.), photo gallery, Instagram / Facebook / Yelp
- **Location & Hours** with map, **Contact / inquiry form**, newsletter signup

## Editing
Everything content-related lives at the top of `app.js`:
- `CONFIG.orderUrl` — paste an online-ordering link (Square, Toast…) to turn the "Call Ahead" button into "Order Ahead"
- `MENU`, `SYRUPS`, `MILKS` — menu items and prices
- `EVENTS` — add events as `{ date: "2026-12-05", time: "13:00", title: "...", detail: "Sat · 1:00 PM" }`
- `HOURS` — store hours (drives the open/closed badge and hours table)

## Forms
Contact and newsletter forms post to **FormSubmit** → `buzzedcoffeeco@gmail.com`.
The first submission triggers a one-time activation email to that inbox — click **Activate** once and all future submissions arrive normally.

## Deploy
Import this repo in Vercel → Framework preset **Other** → no build command → Deploy.

Website by [Nexora Digital](https://www.nexoradigital.live)
