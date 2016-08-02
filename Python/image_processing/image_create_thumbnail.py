from PIL import Image
import glob, os

size = 150, 150

for infile in glob.glob("*.jpg"):
    file, ext = os.path.splitext(infile)
    im = Image.open(infile)
    im.thumbnail(size, Image.ANTIALIAS)
    im.save(file + "_thumbnail" + ".jpg", "JPEG")

print("Thumbnail created!")
