# Build report — Als-in-1 Tuindienste

Built 2026-11-04 from the approved mockups. Not committed, pushed or deployed.

## 1. Pages

| Page | Status |
| --- | --- |
| `/` Tuis | Done. Matches the mockup. Route cards are full-card links. Voor/Na and reviews ship `hidden`. |
| `/woonhuise/` | Done. Price cards keep their `[brackets]` and the `#pryse` anchor works. Voor/Na ships `hidden`. |
| `/plase/` | Done. Stats band, farm logos and testimonial ship `hidden`. Every "Bespreek…" link goes to `/kontak/?tipe=plaas`. |
| `/kontak/` | Done. Netlify Form `kwotasie` works with JS on and off. |
| `/dankie/` | New. Thank-you page with the [24]-hour promise and a WhatsApp button. Set to `noindex`. |
| `/privaatheid/` | New. Short POPIA notice marked `[KLIËNT MOET GOEDKEUR]`. |
| `/404.html` | New. Links back to all four main pages. Set to `noindex`. |

## 2. Lighthouse (mobile, local server)

| Page | Perf | A11y | Best practices | SEO |
| --- | --- | --- | --- | --- |
| Tuis | 100 | 100 | 100 | 85 |
| Woonhuise | 100 | 100 | 100 | 85 |
| Plase | 100 | 100 | 100 | 85 |
| Kontak | 100 | 100 | 100 | 85 |
| Privaatheid | 100 | 100 | 100 | 85 |
| Dankie | 100 | 100 | 100 | 54 (intentional `noindex`) |
| 404 | 98 | 100 | 100 | 54 (intentional `noindex`) |

SEO 85 comes from two failing audits, "canonical" and "robots.txt". Both fail only because `https://[DOMEIN]` isn't a valid URL yet. Once the real domain is filled in, they should pass.

## QA checks

- No horizontal scroll at 360px or 390px on any page.
- Mobile menu works by keyboard. `aria-expanded` toggles, the label changes Menu ↔ Maak toe, and Escape closes the menu and returns focus to the button.
- Global focus ring is 2px `--focus-ring` with a 2px offset. On the dark CTA band it switches to `--on-bark` so it stays visible.
- Contrast passes AA for every text pair used:
  - ink on cream/paper/sand: 9.3 / 10.2 / 8.5
  - ink-muted on cream/paper: 4.7 / 5.2 (never used on sand)
  - bark on cream/paper: 5.0 / 5.5
  - on-bark on bark: 5.0
  - white on leaf-deep: 5.3
  - ink on ochre/sun/leaf-soft: 5.2 / 7.7 / 8.1
- Form with JS off:
  - the nav shows inline;
  - both area `<optgroup>`s are present;
  - Plaasnaam is visible, with "(net vir plase)";
  - the radio segmented control works through CSS only.
- Form with JS on:
  - `?tipe=plaas` preselects Plaas;
  - the area list swaps;
  - Plaasnaam toggles (and is disabled when hidden);
  - the submit label swaps;
  - the SA phone pattern accepts 082 123 4567, 0821234567, +27 82 123 4567 and 27821234567, and rejects short numbers;
  - an over-8 MB photo is blocked with "Die foto is te groot…";
  - required-field messages are in Afrikaans.
- No console errors. Both fonts load. One `h1` per page. No duplicate IDs.
- All 156 internal links and assets resolve.

### Lighthouse in landscape (checked 2026-11-04)

| View | Tuis | Woonhuise | Plase |
| --- | --- | --- | --- |
| Phone landscape 844×390, mobile throttling | 92 | 98 | 97 |
| Tablet landscape 1024×768 | 100 | 100 | 100 |

Accessibility and best practices are 100 in every view. Tuis is 92 in phone landscape only because its stand-in stock photo is full of fine leaf detail (147 KB even at 800px). A lighter real photo should push it over 95.

## 3. Deviations from the mockups

1. **Sizes snapped to tokens.** CLAUDE.md says to use token values only, so mockup values outside the token scale were moved to the nearest token:
   - section `h2`: 34px → 30px (`h2`);
   - CTA heading: 36px → 30px;
   - Huis/Plaas card titles: 26px → 22px (`h3`);
   - price amounts: 34px → 30px;
   - Plase step titles: 20px → 22px;
   - Kontak `h1`: clamp(36–48px) → 40px (`h1`);
   - paddings of 88/72/20/14/10px → the 4px token scale.

   The result looks the same at a glance but is slightly tighter.
2. **Input borders.** The mockup's `#8a8b82` isn't a token, so inputs use `--ink-muted` (5.2:1, which passes the 3:1 control-boundary rule).
3. **Image slots.** The dashed placeholder boxes (`#c9bda3`, also not a token) are now real `<img>` tags. The five content images and the OG image are free Unsplash stand-ins (credits in `content/stock-photos.md`). The four Voor/Na files are still sand placeholders.
3a. **Sticky header.** Added on request. The header stays pinned at every width (146px tall, because the logo is 140px wide). `scroll-padding-top` keeps the `#pryse` jump clear of it, and the mobile menu panel scrolls on its own on short screens. Below 860px the header slides away while you scroll down and comes back as soon as you scroll up. It always shows at the top of the page, while the menu is open, and when it has keyboard focus. Desktop keeps it pinned.
3b. **Landscape.** Phones turned sideways (screens under 500px tall) get their own layout:
   - the hero headline drops from 56px to 40px (the `h1` token);
   - hero text and photo sit side by side, with the photo capped to the screen height;
   - the WhatsApp/Bel bar becomes two round 48px icon buttons in the bottom-right corner (labels stay available to screen readers);
   - the header hides on scroll, including on large phones over 860px wide.

   Tested at 568×320, 667×375, 740×360, 844×390, 932×430, 1024×768, 1180×820 and 1366×1024, plus portrait. No page scrolls sideways at any of these sizes. The hero images now also have an 800px version (`srcset`) for smaller screens.
4. **Mobile header.** Below 860px the nav collapses to a Menu button with a full-width panel, and a sticky WhatsApp + Bel bar is added, as the build prompt asks. The mockup's wrapped mobile nav remains as the no-JS fallback.
5. **Kontak footer.** Kontak uses the full shared footer, not the mockup's one-line footer, because the build prompt says one shared footer.
6. **Voor/Na captions.** Captions read "Voor" / "Na" instead of "Voor · AI-beeld". The "Vervang met regte foto's…" note is now an `<!-- UNHIDE WHEN -->` comment, because AI images may never fill these slots.
7. **Additions:**
   - skip link;
   - "Privaatheid" link in the footer and under the form;
   - photo hint "Een foto, tot 8 MB.";
   - the Plaasnaam field (taken from the canvas source, since the static mockup doesn't have it);
   - WhatsApp and Selfoon in the footer and Kontak are now real links.
8. **Segmented control.** Built with real radio inputs instead of the mockup's `aria-pressed` buttons, so it submits a value and works without JS.
9. **FAQ marker.** A +/− disc replaces the browser's default triangle. It's still `<details>`/`<summary>`.
10. **Plase background.** With the sand "proof" section hidden, "Hoe ons met plase werk" and the FAQ are both cream and sit back to back. This fixes itself when the proof section is unhidden.
11. **Logo.** The header and footer use 280px/420px WebP copies (about 10 KB) instead of the 353 KB PNG. The original PNG is kept.
12. **File input.** The file-picker button text comes from the browser (e.g. "Choose File" in an English browser) and can't be styled into Afrikaans without JS.
13. **Fonts.** Nunito Sans is self-hosted as one variable file that covers 400–700, instead of two static files.
14. **Copy flag (not changed).** The Plase eyebrow says "Breërivier-vallei", but the rest of the site and the image prompts say "Hexriviervallei". Ask the client which one they want.

## 4. Placeholder checklist

Find-and-replace across the repo once the client supplies these. Grouped by page; matches `content/placeholders.md`.

**All pages (header, footer, mobile bar):**
- `27000000000` in every `wa.me/` link and in `tel:+27000000000`. Counts: Tuis 8, Woonhuise 8, Plase 7, Kontak 7, Dankie 6, Privaatheid 5, 404 5. The tel link also uses this number, so if the call number is different, replace `tel:+27000000000` separately first.
- `WhatsApp: [NOMMER]`, `Selfoon: [NOMMER]`, `E-pos: [E-POS]`, `Ma–Vr [07:00–17:00]` in the footer.
- `[DOMEIN]` in the canonical, `og:url`, `og:image` and `twitter:image` tags on every page, plus `robots.txt` (1) and `sitemap.xml` (5).

**Tuis:**
- `[WHATSAPP-NOMMER]` in the hero.
- `[24]` × 2 (Flink, CTA band).
- JSON-LD: `[DOMEIN]` and telephone `+27000000000`.
- Hidden reviews: `[Resensie…]` × 3, `[Naam]` × 3, `[Plaas]`.

**Woonhuise:**
- `[24]` × 2.
- Prices: `[150]`, `[150–500]`, `[500]`, `R[350]–R[500]`, `R[500]–R[850]`, `Vanaf R[850]`, and contract discount `[X]%`.
- `[Veilig vir troeteldiere: bevestig]`.
- FAQ: `[Bevestig met kliënt.]` (call-out fee), `[Bevestig met kliënt: produk, wagtyd en of kliënt PCO-geregistreer is.]`, `[EFT / kontant / kaart: bevestig.]`.

**Plase:**
- `[3]` werksdae.
- `[PCO-registrasie: bevestig]`, `[BTW-geregistreer: bevestig]`, `[bosnyers, sproeiers, bakkie en sleepwa]`.
- FAQ: PCO (Wet 36 van 1947), contract length, `[Lys toerusting.]`, COIDA + liability.
- Hidden: stats `[X]` × 3, `[Plaas-logo]` × 4, testimonial `[Aanbeveling…]`, `[Naam]`, `[Pos]`, `[Plaas]`, `[Area]`.

**Kontak:**
- `[24]`, `WhatsApp [NOMMER]`, `Bel: [NOMMER]`, `E-pos: [E-POS]`, `Ma–Vr [07:00–17:00] · Sa [op afspraak]`.
- The `bv. [Plaasnaam]` input placeholder is copy from the canvas mockup, not client data.
- The `[0-9]` / `[1-9]` grep hits are inside the phone-number regex. They aren't placeholders.

**Dankie:**
- `[24]` × 4 (body plus the description, og and twitter tags).

**Privaatheid:**
- `[KLIËNT MOET GOEDKEUR]` (remove once the client approves) and `[E-POS]` in the body.

**Images:**
- The six content and OG images are currently free Unsplash stand-ins (see `content/stock-photos.md`). Replace them with the client's photos, keeping the same filenames and sizes, and update each `alt` text.
- Voor/Na images must be the client's real photos.

**When unhiding a section:**
- Delete its `hidden` attribute and its `<!-- UNHIDE WHEN -->` comment.

## 5. Netlify: connect, form notifications, custom domain

1. **Repo.** Run `git init`, commit, and push to GitHub. `.gitignore` already excludes `dist/`.
2. **Connect.**
   1. In Netlify, go to **Add new site → Import an existing project → GitHub** and pick the repo.
   2. Leave the build settings empty, because `netlify.toml` sets them: command copies the public files into `dist/`, publish dir is `dist`. `reference/`, `content/` and the handoff docs are never deployed.
   3. Click **Deploy**.
3. **Forms.**
   1. Go to **Site configuration → Forms** and click **Enable form detection**.
   2. Trigger a redeploy (**Deploys → Trigger deploy → Deploy site**) so the `kwotasie` form gets registered.
   3. Check that `kwotasie` shows up under **Forms**.
4. **Notifications.**
   1. Go to **Site configuration → Notifications → Emails and webhooks → Form submission notifications → Add notification → Email notification**.
   2. Set the event to "New form submission", the form to `kwotasie`, and the email to the client's address.
   3. Save, then submit a test from `/kontak/`. It should land on `/dankie/` and the email should arrive. Check the spam folder the first time.
5. **Domain.**
   1. Go to **Domain management → Add a domain** and enter the domain.
   2. Either point the registrar's nameservers to Netlify DNS (easiest), or keep the registrar's DNS and add:
      - `A @ → 75.2.60.5`
      - `CNAME www → <site-name>.netlify.app`
   3. Under **HTTPS**, wait for the Let's Encrypt certificate (usually under an hour), then turn on **Force HTTPS**.
6. **Go-live edits.**
   1. Replace `[DOMEIN]` everywhere with the bare domain (no `https://`, since the files already include it).
   2. Replace the other placeholders.
   3. Bump `?v=1` to `?v=2` on every page whenever `css/` or `js/` changes, because those files are cached for a year.
