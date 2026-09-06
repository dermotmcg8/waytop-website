# WAYTOP 蔚道商贸 — Website

Single-page marketing site for WAYTOP (蔚道商贸), a premium importer of live seafood — flagship European/Irish blue lobster, plus Boston lobster, brown crab, toothfish, salmon, tiger prawn, coral trout, and premium wagyu.

Founder: David / 朱蔚. Trading since 2015; controls ~90% of the UK & Ireland blue-lobster supply chain.

## Structure

```
index.html            # the site (self-contained: inline CSS + JS)
assets/img/           # web-optimized photography (~4MB total) — tracked
source-material/      # 830MB of original photos + docs — .gitignored, local only
```

## Local preview

Open `index.html` in a browser, or:

```
python3 -m http.server 8080   # then visit http://localhost:8080
```

## Deploy

Static site — host anywhere (GitHub Pages, Vercel, Netlify, Alibaba OSS).
For GitHub Pages: Settings → Pages → deploy from `main` / root.

## Notes

- Content in Simplified Chinese (primary market), English brand accents.
- Contact form is front-end only — wire to an endpoint (Formspree / backend) before launch.
- Placeholder contact details (email, phone) need David's real details.
- Product country-of-origin tags are indicative — confirm with David per SKU.
