var img = new SimpleImage('drewRobert.png');
var bg = new SimpleImage('dinos.png');
print(img);
for (var pixel of img.values()) {
    var temp = pixel.getGreen()
    if (pixel.getGreen() >= pixel.getRed() + pixel.getBlue() + 20) {
        var bpix = bg.getPixel(pixel.getX(), pixel.getY());

        pixel.setRed(bpix.getRed())
        pixel.setGreen(bpix.getGreen())
        pixel.setBlue(bpix.getBlue())
    }
}
print(img)