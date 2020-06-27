var img = new SimpleImage(200, 200);
print(img);
for (var pixel of img.values()) {

    pixel.setGreen(232);
}
print(img)

// getWidth
// getHeight
// getPixel
// getRed, getGreen, getBlue