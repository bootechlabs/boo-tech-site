# Boo-Tech — Website

Static site for boo-tech.com. Plain HTML/CSS/JS — no build step required.

## Structure
```
site/
  index.html            Home
  about.html            About
  contact.html          Contact (wired to Brevo, notifies via email automation)
  resources.html         Free Resources (wired to Brevo email capture)
  documentation.html     Release notes, real license agreement, support, refund policy, generic terms/privacy drafts
  products/
    e1.html
    i1.html
    r2.html
  assets/
    css/style.css
    js/main.js
    img/                 Logo files
  CNAME                  For GitHub Pages custom domain (boo-tech.com)
```

## Deploy to GitHub Pages + Cloudflare (recommended path)

1. **Create a GitHub repo** (e.g. `boo-tech-site`), push the contents of this `site/` folder to the `main` branch (the files should be at the repo root, not nested inside a `site/` subfolder).
2. In the repo's **Settings > Pages**, set the source to the `main` branch, root folder. GitHub will build and serve the site at `https://<username>.github.io/boo-tech-site/`.
3. **Point boo-tech.com at GitHub Pages:**
   - In GitHub repo Settings > Pages > Custom domain, enter `boo-tech.com` (this also commits the `CNAME` file — already included here).
   - At your domain registrar (or in Cloudflare DNS if boo-tech.com's nameservers point to Cloudflare), add:
     - An `A` record for the apex domain pointing to GitHub Pages' IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153), or a `CNAME`/`ALIAS` record if your DNS provider supports apex CNAMEs.
     - A `CNAME` record for `www` pointing to `<username>.github.io`.
4. **Add Cloudflare in front (free plan):**
   - Add boo-tech.com as a site in Cloudflare, update nameservers at your registrar to Cloudflare's.
   - Enable the orange-cloud proxy for the DNS records above to get free CDN + SSL.
   - Set SSL/TLS mode to "Full" (not "Flexible") since GitHub Pages already serves HTTPS.
5. Once DNS propagates, GitHub Pages will auto-issue a certificate for the custom domain (or Cloudflare's edge certificate covers it, depending on proxy settings).

## Before going live
- The Terms of Use and Privacy Policy in `documentation.html` are generic drafts, not attorney-reviewed — have counsel review both before the site processes real orders or personal data. The License Agreement is sourced directly from the real signed license included in each product package.
- `resources.html` and `contact.html` are both wired to Brevo (real form submissions, no more mock success messages). Test each end-to-end after deploying to the live domain to confirm the reCAPTCHA domain registration carries over.
- Lemon Squeezy checkout links are live on all three product pages (e1, i1, r2). Test each one end-to-end (including the digital download delivery) before announcing launch.
- Pricing is now shown on the product pages (e1 $99.99, i1 $499.99, r2 $1,999.99), pulled directly from the live Lemon Squeezy checkout pages. If pricing changes in Lemon Squeezy, update it here too — it isn't pulled dynamically.
