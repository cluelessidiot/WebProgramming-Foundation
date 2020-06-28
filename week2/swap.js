var img = new SimpleImage('hilton.jpg');
print(img);
for (var pixel of img.values()) {
    var temp = pixel.getGreen()
    pixel.setGreen(pixel.getRed())
    pixel.setRed(temp)
}
print(img)