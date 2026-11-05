"""Convert raw AI images (JPG/PNG) in images-raw/ into the site's WebP files in images/.

Usage (from the repo root):
    python tools/convert-images.py

Drop each generated image into images-raw/ named after its slot, e.g. diens-gras.jpg
or tuis-held.png. The script centre-crops to the slot's ratio, resizes, and writes the
WebP (plus any smaller copies the pages need). Unknown filenames are skipped with a warning.
images-raw/ is git-ignored and never deployed.
"""
from pathlib import Path
import sys

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "images-raw"
OUT = ROOT / "images"
QUALITY = 80

# slot name -> (width, height, [extra smaller widths])
TILE = (1200, 900, [600])
HERO = (1200, 1500, [800])
SLOTS = {
    **{f"diens-{s}": TILE for s in ("gras", "beddings", "rante", "gifbeheer", "vullis")},
    **{f"plaas-diens-{s}": TILE for s in ("gras", "beddings", "rante", "gifbeheer", "vullis")},
    "tuis-held": HERO,
    "woonhuise-held": HERO,
    "plase-held": HERO,
    "tuis-woonhuis": (1280, 720, []),
    "tuis-plaas": (1280, 720, []),
    "og-image": (1200, 630, []),
}


def main() -> int:
    if not RAW.is_dir():
        RAW.mkdir()
        print(f"Created {RAW}. Put your JPG/PNG files in it and run again.")
        return 0
    files = sorted(p for p in RAW.iterdir() if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"})
    if not files:
        print(f"No images in {RAW}.")
        return 0
    for src in files:
        name = src.stem.lower()
        if name not in SLOTS:
            print(f"SKIP  {src.name}: not a known slot name")
            continue
        w, h, extras = SLOTS[name]
        img = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
        if img.width < w or img.height < h:
            print(f"WARN  {src.name}: only {img.width}x{img.height}, smaller than {w}x{h}; upscaling")
        full = ImageOps.fit(img, (w, h), Image.LANCZOS, centering=(0.5, 0.5))
        full.save(OUT / f"{name}.webp", "WEBP", quality=QUALITY, method=6)
        made = [f"{name}.webp"]
        for ew in extras:
            eh = round(h * ew / w)
            full.resize((ew, eh), Image.LANCZOS).save(OUT / f"{name}-{ew}.webp", "WEBP", quality=QUALITY, method=6)
            made.append(f"{name}-{ew}.webp")
        if name == "og-image":
            full.save(OUT / "og-image.jpg", "JPEG", quality=85, optimize=True, progressive=True)
            made.append("og-image.jpg")
        print(f"OK    {src.name} -> {', '.join(made)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
