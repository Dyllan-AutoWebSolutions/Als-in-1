# AI image slots

## How to add an image

1. Generate it in Kie.ai: **nano-banana 2.1**, resolution **2K**, the aspect ratio in the heading. JPG or PNG is fine.
2. Save it to `D:\Work Hub\Client Work\AI1\als-in-1-tuindienste\images-raw\`, named after the heading with your file's own extension: `diens-gras.jpg`, `tuis-held.png`, etc. Lowercase, no spaces, no extra copies.
3. From the repo root run `python tools/convert-images.py`. It crops to the exact size, converts to WebP, and writes every file the site needs into `images/` (including the small `-600` / `-800` copies and the `og-image.jpg`). Run it again any time you add or replace an image.

`images-raw/` is git-ignored and never deployed. Don't save straight into `images/`.

**Rules for every image:**
- Photorealistic, natural daylight, warm grade, Western Cape setting (Worcester / Hex River Valley).
- No people. Show the job through the tools and the half-done work, not a fake crew. AI images must never pose as our team or as before/after shots of real jobs.
- No text, no logos, no brand names on equipment, no watermarks.

**Do not generate the before/after (Voor · Na) images.** Those slots are for the client's real job photos only.

---

## Service tiles: residential set (Tuis page + Woonhuise page)

The photo fills the tile and the text sits on a dark fade at the bottom, so every prompt keeps the **bottom 40% calm and slightly darker**. Subject sits in the upper-middle.

### 1. `diens-gras.webp` — 1200×900 (4:3) — Gras sny

```
Photorealistic photo of a suburban back garden in Worcester, South Africa, mid-job: a lawn being mowed, the left half freshly cut with crisp light-and-dark mowing stripes, the right half still slightly longer and uneven. A plain unbranded petrol lawnmower stands parked on the line between the two halves. A sharp, freshly trimmed edge runs along a grey stone path. Low afternoon sun from the side, warm tones, long soft shadows. Brandwacht mountains faintly visible behind a low garden wall. Camera at hip height, 35mm lens, f/5.6, everything sharp. The bottom 40% of the frame is plain dark-green lawn in soft shadow, calm and even, with no detail competing for attention. No people, no text, no logos, no brand names.
```

### 2. `diens-beddings.webp` — 1200×900 (4:3) — Beddings

```
Photorealistic close-to-medium photo of a garden flower bed in a South African suburban garden being cleaned: dark freshly turned soil with no weeds, rounded pruned shrubs, a few agapanthus and lavender plants. On the lawn edge sits a small pile of pulled weeds and clippings, a hand trowel and pruning shears resting beside it. Clean, crisp spade-cut edge between bed and lawn. Soft morning light, warm natural colours. Camera low, 50mm lens, f/4, bed in sharp focus, background softly blurred. The bottom 40% of the frame is the dark soil and shaded lawn edge, calm and low in detail. No people, no gloves, no hands, no text, no logos.
```

### 3. `diens-rante.webp` — 1200×900 (4:3) — Rante

```
Photorealistic photo of a grassy roadside verge and sloped embankment in front of a house in Worcester, Western Cape, partly cleared: the near section cut short and tidy, the far section still long, dry and overgrown with tall grass and weeds. An unbranded brushcutter (weed eater) with an orange-and-black body lies on the cut grass at the boundary. A low face-brick boundary wall and a quiet tarred street. Bright late-morning light, clear blue sky, dry summer tones. Camera at eye level, 28mm lens, f/8. The bottom 40% of the frame is the freshly cut short grass, even and calm. No people, no text, no logos, no brand names.
```

### 4. `diens-gifbeheer.webp` — 1200×900 (4:3) — Gifbeheer

```
Photorealistic photo of a paved driveway in a South African suburban home with weeds growing in the joints between grey concrete pavers. A plain unbranded backpack pressure sprayer stands on the paving, its spray lance lying beside it. The pavers nearest the sprayer have freshly sprayed weeds, still damp; further back the weeds are green. A white garage door and a neat garden bed at the side, soft morning light, warm tones. Camera low at knee height, 35mm lens, f/5.6. The bottom 40% of the frame is the paving surface in soft shade, calm and even. No people, no protective clothing, no text, no logos, no warning labels.
```

### 5. `diens-vullis.webp` — 1200×900 (4:3) — Tuinvullis weg

```
Photorealistic photo of a white single-cab bakkie with an open steel trailer parked at the kerb of a suburban street in Worcester, South Africa. The trailer is heaped with fresh green garden waste: grass clippings, pruned branches, pulled weeds. The pavement and garden behind are clean and swept with no bags or piles left behind. Late-afternoon golden light, warm tones, mountains in the far background. Camera at eye level, three-quarter view of the trailer, 35mm lens, f/8. The bottom 40% of the frame is the clean tar road and pavement in soft shadow, calm and uncluttered. No people, no text, no number plates, no logos, no brand names on the vehicle.
```

---

## Service tiles: farm set (Plase page)

Same size, same overlay rule. Order matches the Plase page.

### 6. `plaas-diens-rante.webp` — 1200×900 (4:3) — Rante

```
Photorealistic photo of a dirt farm road beside an irrigation dam in the Hex River Valley, Western Cape. The verge on the near side is freshly cut short, the far stretch still tall dry grass and weeds. An unbranded brushcutter lies on the cut verge. Vineyard rows run up toward the Hex River mountains behind, clear sky. Bright morning light, dry summer tones. Camera at eye level, 28mm lens, f/8, everything sharp. The bottom 40% of the frame is the dirt road and cut verge, calm and even. No people, no text, no logos, no brand names.
```

### 7. `plaas-diens-gifbeheer.webp` — 1200×900 (4:3) — Gifbeheer

```
Photorealistic photo of a gravel yard beside a farm packshed in the Hex River Valley, with weeds along the base of a corrugated iron wall and a wire fence line. An unbranded backpack pressure sprayer stands on the gravel with its lance beside it; the weeds nearest it are freshly sprayed and damp. Vineyards and mountains in the background, soft early light, warm tones. Camera low, 35mm lens, f/5.6. The bottom 40% of the frame is the gravel ground in soft shadow, calm and even. No people, no protective clothing, no text, no logos, no warning labels.
```

### 8. `plaas-diens-gras.webp` — 1200×900 (4:3) — Gras sny

```
Photorealistic photo of the lawn in front of a whitewashed Cape Dutch farmhouse with a curved gable in the Hex River Valley, mid-job: half the lawn freshly mowed with clean stripes, the other half slightly longer. A plain unbranded ride-on mower parked on the dividing line. Old oak tree to one side, mountains behind, late-afternoon warm light. Camera at hip height, 35mm lens, f/8. The bottom 40% of the frame is the freshly cut lawn in soft shade, calm and even. No people, no text, no logos, no brand names.
```

### 9. `plaas-diens-beddings.webp` — 1200×900 (4:3) — Beddings

```
Photorealistic photo of the entrance garden at a wine farm tasting room in the Western Cape: neat raised beds edged with stone, filled with lavender, wild rosemary and white roses, soil freshly weeded and dark. A small pile of pulled weeds and a garden fork rest on the gravel path at the edge of the bed. A whitewashed wall and wooden door behind. Soft morning light, warm natural colours. Camera low, 50mm lens, f/4. The bottom 40% of the frame is the gravel path and bed edge in soft shade, calm. No people, no hands, no text, no signage, no logos.
```

### 10. `plaas-diens-vullis.webp` — 1200×900 (4:3) — Tuinvullis weg

```
Photorealistic photo of a white bakkie towing an open steel trailer heaped with cut grass, branches and pulled weeds, driving away along a dirt farm road between vineyard blocks in the Hex River Valley. Light dust trail behind the trailer, verges on both sides freshly cut and tidy, mountains behind, golden late-afternoon light. Camera from behind at a three-quarter angle, 50mm lens, f/8. The bottom 40% of the frame is the dirt road, calm and even. No people visible, no text, no number plates, no logos, no brand names.
```

---

## Replacements for the existing slots

### 11. `tuis-held.webp` — 1200×1500 (4:5) — Tuis hero


```
Photorealistic portrait-format photo of a freshly mowed lawn with clean mowing stripes in front of a whitewashed Cape Dutch house with a curved gable, in Worcester, Western Cape. A swept gravel path leads to the front door, with crisp clean edges where path meets lawn. Neat beds with low shrubs along the house. Hex River mountains behind under a clear sky. Soft early-morning light, warm tones, lifted shadows. Camera at hip height, 28mm lens, f/8, everything sharp. No people, no text, no logos.
```

### 12. `tuis-woonhuis.webp` — 1280×720 (16:9) — Tuis, "Woonhuise" card

```
Photorealistic wide photo of the neat front garden of a white suburban house in Worcester, South Africa: short green lawn, clean flower beds with rounded shrubs and agapanthus, a sharp edge along the path, low face-brick wall at the street. Afternoon sun, warm tones, clear sky, mountains faintly behind. Camera at eye level from across the street, 35mm lens, f/8. No people, no cars, no text, no number plates, no logos.
```

### 13. `tuis-plaas.webp` — 1280×720 (16:9) — Tuis, "Plase" card

```
Photorealistic wide photo of a clean gravel farm road running between green vineyard blocks in the Hex River Valley, Western Cape. Roadside verges on both sides cut short and tidy, Hex River mountains behind, clear blue sky, bright morning light, warm tones. Camera at eye level in the middle of the road, 35mm lens, f/11, deep focus. No people, no vehicles, no text, no logos.
```

### 14. `woonhuise-held.webp` — 1200×1500 (4:5) — Woonhuise hero


```
Photorealistic portrait-format photo of a family back garden in Worcester, South Africa: freshly cut lawn with bold mowing stripes leading the eye back, a sharp trimmed edge along a natural stone path, tidy beds with rose bushes and lavender, a covered patio corner just visible at the side. Late-afternoon golden light, warm tones, long soft shadows. Camera at hip height, 28mm lens, f/8. No people, no toys, no text, no logos.
```

### 15. `plase-held.webp` — 1200×1500 (4:5) — Plase hero


```
Photorealistic portrait-format photo of a straight dirt road running between vineyard rows in the Hex River Valley, Western Cape, verges on both sides cut short and tidy, vines in full green leaf. The Hex River mountains rise behind, catching early-morning light, thin mist in the valley floor. Warm tones, lifted shadows. Camera at eye level in the middle of the road, 35mm lens, f/11, deep focus. No people, no vehicles, no text, no logos.
```

### 16. `og-image.webp` (+ `og-image.jpg`) — 1200×630 (1.91:1) — Social share preview

Generate at **16:9**; the script crops it to 1200×630.

```
Photorealistic wide photo of a neatly kept lawn and garden beds at a whitewashed Cape Dutch farmhouse, Hex River mountains behind, soft morning light, warm tones. All interest sits in the right two-thirds of the frame; the left third is plain soft-focus lawn and sky, calm and uncluttered, for a logo to sit on. Camera at eye level, 35mm lens, f/8. No people, no text, no logos.
```

---

**Later, from the client (real photos only):**

| File | Size (px) | Ratio | Slot |
| --- | --- | --- | --- |
| `tuis-voor.webp` | 1200×900 | 4:3 | Tuis: before |
| `tuis-na.webp` | 1200×900 | 4:3 | Tuis: after (same angle) |
| `woonhuise-voor.webp` | 1200×900 | 4:3 | Woonhuise: before |
| `woonhuise-na.webp` | 1200×900 | 4:3 | Woonhuise: after (same angle) |
