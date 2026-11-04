# Organizer for Gemini – landing site

Static site (plain HTML/CSS, no build). Placeholders live in `assets/config.js`:
`CHROME_WEB_STORE_URL`, `CREEM_CHECKOUT_MONTHLY_URL`, `CREEM_CHECKOUT_LIFETIME_URL`, `SUPPORT_EMAIL`.

## Deploy to GitHub Pages
1. Create a repo, push the contents of this folder (index.html at root).
2. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Site appears at `https://<user>.github.io/<repo>/` (all links are relative). Optional custom domain: add it in Pages settings + a `CNAME` DNS record.

## Deploy to Cloudflare Pages
1. Cloudflare dashboard → Workers & Pages → Create → Pages → connect the Git repo (or "Upload assets" and drag this folder).
2. Framework preset: None; build command: empty; output directory: `/`.
3. Optionally add a custom domain.

Local preview: `python3 -m http.server` then open http://localhost:8000.
