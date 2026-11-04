Build the Als-in-1 Tuindienste website from the approved mockups in this folder.

Start by reading `CLAUDE.md`, then `reference/design-system/README.md` and `reference/design-system/tokens.json`. Next, open all four files in `reference/mockups-static/` and the screenshots in `reference/screenshots/`. Finally, read `content/placeholders.md` and `content/image-prompts.md`. The mockups are client-approved: match their sections, order and copy exactly.

## Target structure

```
/index.html               ← Tuis
/woonhuise/index.html
/plase/index.html
/kontak/index.html
/dankie/index.html        ← form success page (new, small)
/privaatheid/index.html   ← short POPIA privacy notice (new, small, linked from footer + form)
/404.html
/css/tokens.css           ← every token from tokens.json as a CSS custom property
/css/main.css             ← base, layout, components (buttons, chips, cards, sections, header, footer, form)
/js/main.js               ← mobile nav + contact-form behaviour only
/fonts/                   ← self-hosted woff2 (Josefin Sans 600, Nunito Sans 400/700)
/images/                  ← placeholder WebP files at the filenames in content/image-prompts.md
/assets/logo/             ← existing logo + favicon set generated from it
netlify.toml, robots.txt, sitemap.xml
```

Remove the `reference/` folder from deployment using netlify.toml or a deploy-ignore. Don't delete it from the repo.

## Build in phases

Commit after each phase.

### Phase 1 — Foundation
- `tokens.css` built from `tokens.json`.
- Font files and `@font-face` rules with `font-display: swap`. Preload the display font.
- `main.css` with reusable classes. Turn the mockups' repeated inline styles into components: `.btn` with `--primary`, `--whatsapp`, `--outline` and `--on-dark` variants; `.eyebrow`; `.chip`; `.card`; `.section`; `.section--sand`; `.section--paper`; `.cta-band`. No inline styles in the final HTML.
- Shared header and footer. Paste the same markup into each page; there's no build step and no JS includes.
- Header on mobile (below 860px):
  - The logo stays at 140px.
  - The nav collapses into a menu button (`aria-expanded`, `aria-controls`) that opens a full-width panel.
  - Add a sticky bottom bar with two buttons: **WhatsApp** (`--leaf-deep`) and **Bel** (`tel:`).
- Active nav state on the current page, plus `aria-current="page"`.

### Phase 2 — Tuis
- Build `index.html` section by section from `mockups-static/index.html`.
- The hero's two "Vir my huis / Vir my plaas" route cards are the most important element on the site. Make them large and fully clickable.
- The reviews and Voor/Na sections ship `hidden`, per CLAUDE.md.

### Phase 3 — Woonhuise
- Match `mockups-static/woonhuise.html`.
- The price cards keep their `[bracket]` values and `#pryse` anchor.
- The Voor/Na section ships `hidden`.

### Phase 4 — Plase
- Match `mockups-static/plase.html`.
- The stats band, farm logos and testimonial ship `hidden`.

### Phase 5 — Kontak + forms
- Netlify Form named `kwotasie`: `data-netlify="true"`, `netlify-honeypot`, hidden `form-name`, `enctype="multipart/form-data"`, and `action="/dankie/"`.
- Required fields: Naam, Selfoon (`type="tel"`, SA pattern), Huis/Plaas and Area.
- The Woonhuis/Plaas toggle is a radio-group styled as the segmented control in the mockup. It must work without JS.
- JS then:
  - swaps the Area options (Woonhuise: Worcester-Sentraal, Brandwacht, Worcester-Wes; Plase: De Wet, Nonna, Aan de Doorns, Overhex; both lists end with "Ander");
  - shows the Plaasnaam field only for Plaas;
  - switches the submit label between "Stuur my kwotasie-versoek" and "Bespreek terreinbesoek".
- Without JS, show both area lists as `<optgroup>`s.
- Photo upload: one image, max 8 MB, checked client-side with a clear Afrikaans message.
- Support `/kontak/?tipe=plaas` to preselect Plaas, and point every "Bespreek 'n terreinbesoek" link on Plase to it.
- `dankie/index.html` thanks the visitor in Afrikaans, repeats the [24]-hour promise, and offers a WhatsApp button.
- `privaatheid/index.html` is a short POPIA notice in Afrikaans:
  - what is collected and why (quote only);
  - kept by Als-in-1 Tuindienste;
  - contact `[E-POS]` to see or delete your data;
  - mark it `[KLIËNT MOET GOEDKEUR]`.

### Phase 6 — WhatsApp, SEO, meta
- Every `wa.me/27000000000` link gets a prefilled, URL-encoded Afrikaans message, depending on the page:
  - Tuis: "Hallo, ek wil graag 'n kwotasie kry."
  - Woonhuise: "Hallo, ek wil graag 'n kwotasie vir my tuin kry. My area is: "
  - Plase: "Hallo, ek wil graag 'n terreinbesoek vir ons plaas bespreek."
- Per page: unique Afrikaans `<title>` (≤60 chars) and meta description (≤155 chars), canonical, Open Graph and Twitter tags using `og-image`.
- JSON-LD `LocalBusiness` on Tuis: name, `areaServed` (all 7 areas), services, telephone placeholder, url placeholder.
- `sitemap.xml` and `robots.txt` (domain placeholder `https://[DOMEIN]`).
- Favicons generated from the logo's tree mark: 32px, 180px apple-touch, 512px.

### Phase 7 — Images + netlify.toml
- Create placeholder WebP files at every filename in `content/image-prompts.md`, at the exact size: a solid `--surface-sand` fill with the slot name in small text. Real images can then be dropped in later with no code change.
- Use `<img>` with `width`/`height`, `alt` in Afrikaans, `loading="lazy"` below the fold, `fetchpriority="high"` on the hero image.
- `netlify.toml`:
  - pretty URLs;
  - 404 handling;
  - long cache headers for `/fonts/`, `/images/`, `/css/` and `/js/`;
  - security headers: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and a CSP that allows only self + Netlify Forms.

### Phase 8 — QA (don't skip)
- Serve locally. Screenshot every page at 390px and 1440px and compare against `reference/screenshots/`. List any differences.
- Check:
  - no horizontal scroll at 360px;
  - keyboard-only navigation through menu, route cards, FAQ and form;
  - visible focus everywhere;
  - all text contrast passes AA, using the token pairs in README.md;
  - the form works with JS off;
  - no console errors;
  - all internal links resolve.
- Run Lighthouse (mobile) on each page and report the scores.
- Grep for every `[`, `27000000000` and `[DOMEIN]`. Output the full list as a final checklist grouped by page, matching `content/placeholders.md`.

## Report back

When done, give me:
1. The page list with a one-line status each.
2. Lighthouse scores.
3. Every deviation from the mockups and why.
4. The placeholder checklist.
5. Exact steps to connect the repo to Netlify, enable form notifications to the client's email, and set the custom domain.

Don't push or deploy.
