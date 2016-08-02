from PIL import Image

im = Image.open("bridge_medium.jpg")
im.rotate(45).show()

print("Process has finished...")
