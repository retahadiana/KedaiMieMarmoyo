from PIL import Image
import os
import glob

def clean_background(img_path):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    # Heuristic: fake checkerboard usually has R,G,B > 200
    # Also we want to remove white backgrounds.
    for item in datas:
        r, g, b, a = item
        # If pixel is bright and grayscale-ish (R,G,B are similar and high)
        if r > 200 and g > 200 and b > 200:
            newData.append((255, 255, 255, 0))
        else:
            newData.append((r, g, b, a))

    img.putdata(newData)
    
    # Save as PNG
    base = os.path.splitext(img_path)[0]
    out_path = base + ".png"
    img.save(out_path, "PNG")
    print(f"Saved {out_path}")

if __name__ == "__main__":
    for f in glob.glob("src/assets/*.jpg"):
        clean_background(f)
