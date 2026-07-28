from PIL import Image
import numpy as np

src = Image.open("Logo.png").convert("RGBA")
arr = np.array(src)
h, w = arr.shape[:2]
rgb = arr[:, :, :3].astype(np.float32)
alpha = arr[:, :, 3].astype(np.float32)

# Non-white content mask from original lockup
near_white = (rgb > 245).all(axis=2)
content = ~near_white

# Find the circular mark: top content block before the first large gap
row_density = content.sum(axis=1)
nonzero = np.where(row_density > w * 0.01)[0]
gaps = []
in_gap = False
start = None
for y in range(int(nonzero[0]), int(nonzero[-1]) + 1):
    empty = row_density[y] < w * 0.005
    if empty and not in_gap:
        in_gap, start = True, y
    elif not empty and in_gap:
        in_gap = False
        gaps.append((start, y - 1, y - start))

circle_bottom = gaps[0][0] if gaps else int(nonzero[0] + (nonzero[-1] - nonzero[0]) * 0.55)
top = int(nonzero[0])
sub = content[top:circle_bottom]
ys, xs = np.where(sub)
left, right = int(xs.min()), int(xs.max()) + 1
bottom = top + int(ys.max()) + 1
top = top + int(ys.min())

# Crop to circle region
cropped = arr[top:bottom, left:right].copy().astype(np.float32)
ch, cw = cropped.shape[:2]
cy, cx = (ch - 1) / 2.0, (cw - 1) / 2.0
yy, xx = np.ogrid[:ch, :cw]
# Slightly inset radius so no square fringe remains
radius = min(cx, cy) - 1.5
dist = np.sqrt((xx - cx) ** 2 + (yy - cy) ** 2)

# Soft circular alpha
circle_alpha = np.clip((radius + 1.25 - dist) / 1.25, 0, 1) * 255.0

crgb = cropped[:, :, :3]
# Rebuild: keep navy circle + white W, drop original white bg
# W is bright (near white) inside circle; navy is dark blue
brightness = crgb.mean(axis=2)
is_w = brightness > 180
is_navy = brightness <= 180

out = np.zeros_like(cropped)
# Navy fill for circle body
out[is_navy, 0] = 0
out[is_navy, 1] = 26
out[is_navy, 2] = 65
# Keep original navy tones where present and dark
navy_mask = is_navy & (circle_alpha > 0)
out[navy_mask, :3] = crgb[navy_mask]

# Pure white W
out[is_w, 0] = 255
out[is_w, 1] = 255
out[is_w, 2] = 255

out[:, :, 3] = circle_alpha
# Only keep W alpha where W pixels are
# Already using circle_alpha for all; W sits on navy so fine

# Tight crop to non-transparent pixels
opaque = out[:, :, 3] > 8
oys, oxs = np.where(opaque)
pad = 2
t, b = max(0, oys.min() - pad), min(ch, oys.max() + 1 + pad)
l, r = max(0, oxs.min() - pad), min(cw, oxs.max() + 1 + pad)
final = out[t:b, l:r].astype(np.uint8)

Image.fromarray(final).save("public/logo.png", optimize=True)
print("saved", final.shape[1], "x", final.shape[0], "alpha", final[:, :, 3].min(), final[:, :, 3].max())
