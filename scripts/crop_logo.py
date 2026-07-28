from PIL import Image
import numpy as np

src = Image.open("Logo.png").convert("RGBA")
arr = np.array(src)
h, w = arr.shape[:2]

rgb = arr[:, :, :3]
white = (rgb > 245).all(axis=2)
content = ~white

row_density = content.sum(axis=1)
nonzero_rows = np.where(row_density > w * 0.01)[0]

gaps = []
in_gap = False
start = None
for y in range(int(nonzero_rows[0]), int(nonzero_rows[-1]) + 1):
    empty = row_density[y] < w * 0.005
    if empty and not in_gap:
        in_gap = True
        start = y
    elif not empty and in_gap:
        in_gap = False
        gaps.append((start, y - start))

circle_bottom = None
for gstart, glen in gaps:
    if glen >= 8 and gstart > nonzero_rows[0] + 50:
        circle_bottom = gstart
        break
if circle_bottom is None:
    circle_bottom = int(nonzero_rows[0] + (nonzero_rows[-1] - nonzero_rows[0]) * 0.55)

top = int(nonzero_rows[0])
bottom = int(circle_bottom)
sub = content[top:bottom, :]
sub_ys, sub_xs = np.where(sub)
left = int(sub_xs.min())
right = int(sub_xs.max()) + 1
bottom = top + int(sub_ys.max()) + 1
top = top + int(sub_ys.min())

pad = 2
left = max(0, left - pad)
top = max(0, top - pad)
right = min(w, right + pad)
bottom = min(h, bottom + pad)

cropped = arr[top:bottom, left:right].copy()
ch, cw = cropped.shape[:2]
cy, cx = ch / 2.0, cw / 2.0
radius = min(ch, cw) / 2.0 - 2.0

yy, xx = np.ogrid[:ch, :cw]
dist = np.sqrt((xx - cx) ** 2 + (yy - cy) ** 2)
inside = dist <= radius

crgb = cropped[:, :, :3].astype(np.float32)
luminance = 0.299 * crgb[:, :, 0] + 0.587 * crgb[:, :, 1] + 0.114 * crgb[:, :, 2]

# Keep only clearly light pixels as the W (avoid circle-edge white halo)
is_letter = inside & (luminance >= 160)
is_navy = inside & ~is_letter

out = np.zeros((ch, cw, 4), dtype=np.uint8)
out[is_navy, 0] = 0
out[is_navy, 1] = 27
out[is_navy, 2] = 68
out[is_navy, 3] = 255
out[is_letter, 0] = 255
out[is_letter, 1] = 255
out[is_letter, 2] = 255
out[is_letter, 3] = 255

# Soft circular alpha falloff at rim (navy only)
rim = (dist > radius - 1.5) & (dist <= radius)
for y, x in zip(*np.where(rim)):
    t = float(np.clip((radius - dist[y, x]) / 1.5, 0, 1))
    out[y, x, 3] = int(out[y, x, 3] * t)

result = Image.fromarray(out)
result.save("public/logo.png")
print("saved", result.size)
a = np.array(result)
print("white letter px", int(((a[:, :, 0] > 200) & (a[:, :, 3] > 0)).sum()))
print("navy px", int(((a[:, :, 2] == 68) & (a[:, :, 3] > 200)).sum()))
print("corner alpha", a[0, 0, 3], a[0, -1, 3], a[-1, 0, 3], a[-1, -1, 3])
