# Als-in-1 Tuindienste

Garden services — lawns & edges, beds. *(Service area to confirm with the client.)* **Flink · Netjies · Betroubaar.**

This system is built from one source: the client's logo. Every colour was sampled from the logo file; the type is matched to its letterforms. Use it for the website and for social media so both read as one brand.

## Brand in one line

A local, hands-on garden team that shows up when they say they will and leaves your garden neater than they found it.

## Voice — Flink, Netjies, Betroubaar

The three words on the logo are the messaging pillars. Every headline, caption and post should prove at least one of them.

| Pillar | Means | Say it like | Avoid |
| --- | --- | --- | --- |
| **Flink** (quick, capable) | Fast quotes, on-time arrival, work done in one visit | "Kwotasie binne 24 uur." | Rush-job language, "cheap & fast" |
| **Netjies** (neat) | Clean edges, swept paths, no mess left behind | "Skerp kante. Skoon paadjies." | Vague "beautiful gardens" fluff |
| **Betroubaar** (reliable) | Same team, same day, every time | "Ons kom elke Dinsdag. Punt." | Over-promising, guarantees they can't keep |

- **Language:** Afrikaans only — website and social media. Keep sentences short and plain, the way the owner would say it over the fence. No English toggle in v1.
- **Tone:** friendly, practical, proud of the work. No exclamation-mark spam, no emoji in headlines (one in a social caption is fine).
- **Proof over adjectives:** a before/after photo of a cut edge beats "professional service".

## Colour

The palette is the logo: three canopy colours, trunk brown, charcoal type, cream ground.

- **Ground:** `surface-cream` is the default background everywhere — web and social. Alternate long pages with `surface-sand`; raise cards on `surface-paper`.
- **Brand:** `bark` (trunk brown) is the primary colour — primary buttons, links, eyebrow labels. Hover is `bark-deep`. Text on brown is always `on-bark`.
- **Text:** `ink` for body and headings, `ink-muted` for secondary.
- **Canopies are fills, not text.** `leaf`, `ochre` and `sun` are decoration — discs, highlight blocks, post backgrounds. Text sitting on them is `on-accent` (ink). None of the three is legible as text on cream.
- **Green text or a green button** uses `leaf-deep` — reserved for WhatsApp and success states, so green always means "message us / done".
- **Ratio guide:** ~70% cream/sand/paper · ~15% ink · ~10% bark · ~5% canopy accents. `sun` appears at most once per screen or post.

## Type

- **Display — Josefin Sans** (Google Fonts, 600). Geometric with tall, narrow capitals like the logo's "A" and the spaced-out TUINDIENSTE. Headings and button labels.
- **Body — Nunito Sans** (Google Fonts, 400/700). Rounded, friendly, very readable on phones. All running text.
- The `eyebrow` style (13px, 0.24em tracking, uppercase, `bark`) is the logo's TUINDIENSTE line used as a section label. Use it above section headings — it's the single strongest brand cue after colour.
- Load both from Google Fonts: `family=Josefin+Sans:wght@600&family=Nunito+Sans:wght@400;700`.

## Shape & layout

- **Round canopies → round UI.** Buttons and chips are pills (`radius-full`); cards and photos use `radius-md`. Decorative circles in the three canopy colours are the brand's graphic device.
- **Straight trunks → straight structure.** Grids are plain and aligned; no tilted cards, no blobs.
- Spacing runs on a 4px base: `space-4` mobile gutter, `space-6` card padding, `space-24` desktop section padding.
- Shadows are soft and low (`shadow-card`); never heavy drop shadows.

## Imagery

- **Real gardens, real work.** Photos of freshly cut lawns, crisp edges, cleaned-out beds — ideally the client's own jobs. Before/after pairs are the highest-value content.
- Natural daylight, warm grade, slightly lifted shadows so photos sit comfortably on cream.
- No stock-photo smiling-gardener shots; no visible competitor branding.
- **Launch phase: AI-generated images** stand in until the client supplies real photos. Prompt for local scenes (Worcester homes, Hex River Valley vineyards and mountains), daylight, warm grade, no people, no text. Never present an AI image as a before/after of a real job: those slots go to the client's own photos first.

## Iconography

Simple line icons (2px stroke, rounded caps), coloured `bark` on light grounds or `on-bark` on dark. A free set like Lucide fits. Keep icons functional — phone, WhatsApp, map pin, calendar, check.

## Logo

- **Primary working file:** `assets/Logos/als-in-1-logo-transparent.png` — raster PNG, 1111 × 960, transparent background, clean edges, no watermark. Use this everywhere.
- `assets/Logos/als-in-1-logo.png` is the original cream-background version (carries an AI-generator sparkle mark bottom-right) — reference only, don't publish it.
- Place on `surface-cream`, `surface-paper`, white, or a light, uncluttered area of a photo. Never on `bark`, `surface-bark` or dark photos — the brown letters disappear. On dark grounds, put the logo on a cream panel or disc.
- Minimum width: 140px on screen; clear space on every side = the height of the "A".
- **Size ceiling:** at 1111px wide it is sharp for the website and social media, but not for anything printed larger than ~A5 (vehicle decals, banners, shirts). Those need a true vector redraw.
- **Still to make:** a horizontal lockup for the website header (logo stacked is too tall for a nav bar) and a square/circle avatar for social profiles.

## Social media

- **Formats:** 1080 × 1350 (4:5) for feed posts, 1080 × 1920 for stories/reels covers.
- **Three post types, rotated:**
  1. **Before / After** — photo split, cream band with `eyebrow` label ("VOOR · NA") and one line in `h3`.
  2. **Service card** — cream ground, one canopy disc, service name in `h1`, one-line benefit, WhatsApp number.
  3. **Quote / tip** — `surface-bark` ground, `on-bark` text, short tip or client review.
- Every post carries the logo or wordmark small in a corner and the contact line in `small`.
- Captions follow the voice above; end with one clear action ("WhatsApp vir 'n kwotasie").

## Components

Plain HTML/CSS classes in `components/bundle.css` (prefix `ai1-`), built only from tokens: **Button** (primary, WhatsApp, outline), **Chip** (service tags), **ServiceCard**, **SocialPost** (feed post layout). Each has a guideline and live preview.
