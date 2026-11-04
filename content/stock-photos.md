# Stock photos (launch stand-ins)

Temporary images to give the site its intended look until the client's own photos arrive. All six are free photos under the [Unsplash License](https://unsplash.com/license): free for commercial use, no attribution required. Credits are kept here as a courtesy.

They were cropped to the exact slot sizes in `image-prompts.md` and saved as WebP (quality 72; the three heroes at 60 to keep them light). To swap one, drop a new file into `/images/` with the same filename and size. No code change is needed, but do update the image's `alt` text in the HTML.

**The three hero images have two files each:** `*-held.webp` (1200×1500) and `*-held-800.webp` (800×1000, the same picture smaller). Phones and short landscape screens load the 800 version. When you replace a hero, replace both files.

| File | Used on | Photo | Photographer |
| --- | --- | --- | --- |
| `tuis-held.webp` | Tuis hero | [White Cape Dutch house with a brick path](https://unsplash.com/photos/a-white-house-with-a-brick-path-YoQ1_FDzGKM) | Tanya Paquet |
| `tuis-woonhuis.webp` | Tuis, "Woonhuise" card | [White house with lawn and edged bed](https://unsplash.com/photos/green-trees-near-white-house-during-daytime-dSOQHP-ALqw) | Tania Melnyczuk |
| `tuis-plaas.webp` | Tuis, "Plase" card | [Vineyard rows with trees behind](https://unsplash.com/photos/a-vineyard-with-rows-of-vines-and-trees-in-the-background-zdbbjqfE-ZI) | Lukáš Kulla |
| `woonhuise-held.webp` | Woonhuise hero | [House with a striped, freshly mowed lawn](https://unsplash.com/photos/a-house-with-a-large-lawn-in-front-of-it-i0-vqeAWhqs) | Erik Mclean |
| `plase-held.webp` | Plase hero | [Sunlit vineyard rows](https://unsplash.com/photos/rows-of-grapevines-in-a-sunlit-vineyard-DPNmKutv5D4) | Lucas Gallone |
| `og-image.webp` / `.jpg` | Social share preview | [Green lawn with mountains behind](https://unsplash.com/photos/vast-green-field-distant-mountains-trees-and-a-white-gazebo-NPrbdSz5e-0) | Jehad Jansen |

The Voor/Na files (`tuis-voor`, `tuis-na`, `woonhuise-voor`, `woonhuise-na`) are still plain placeholders. Those sections are hidden and must only ever show the client's real job photos, never stock or AI images.

Not Worcester-specific: the woonhuise hero is a North American house and both vineyard shots are European. The Tuis hero, Woonhuis card and OG image are Western Cape. Replace with the client's own photos, or local AI images from `image-prompts.md`, before launch if possible.
