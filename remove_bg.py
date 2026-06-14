import sys
from PIL import Image

def make_white_transparent(img_path):
    try:
        img = Image.open(img_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # item is (R, G, B, A)
            r, g, b, a = item
            
            # If the pixel is very bright (close to white), we make it transparent.
            # We can use an average brightness threshold.
            brightness = (r + g + b) / 3
            if brightness > 240:
                # Solid white -> fully transparent
                newData.append((r, g, b, 0))
            elif brightness > 200:
                # Near white (anti-aliasing) -> partially transparent
                # This helps smooth the edges of the red logo
                alpha = int((240 - brightness) / 40 * 255)
                newData.append((r, g, b, alpha))
            else:
                newData.append((r, g, b, a))

        img.putdata(newData)
        img.save(img_path, "PNG")
        print(f"Success: {img_path}")
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        make_white_transparent(sys.argv[1])
    else:
        print("Usage: python remove_bg.py <image_path>")
