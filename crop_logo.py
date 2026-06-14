from PIL import Image

def crop_more(img_path):
    img = Image.open(img_path)
    width, height = img.size
    if height > 1050:
        cropped = img.crop((0, 0, width, 1050))
        cropped.save(img_path, "PNG")
        print("Cropped successfully to Y=1050")
    else:
        print(f"Image height is {height}, too small to crop to 1050")

if __name__ == '__main__':
    crop_more('src/assets/logo.png')
