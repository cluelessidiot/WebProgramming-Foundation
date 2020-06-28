var img = new SimpleImage('hilton.jpg');
print(img);
for (var pixel of img.values()) {
    if (pixel.getX() <= img.getWidth() / 3)
        pixel.setRed(255);
    if (pixel.getX() > img.getWidth() / 3 && pixel.getX() <= 2 * img.getWidth() / 3)
        pixel.setGreen(255);
    if (pixel.getX() > 2 * img.getWidth() / 3 && pixel.getX() <= img.getWidth())
        pixel.setBlue(255);
}
print(img)