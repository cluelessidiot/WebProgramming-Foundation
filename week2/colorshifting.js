var img = new SimpleImage('duke_blue_devil.png');
print(img);
for (var pixel of img.values()) {
    var temp = pixel.getGreen()
    if (pixel.getGreen() == 59) {
        // print(pixel)
        pixel.setRed(255)
        pixel.setGreen(255)
        pixel.setBlue(0)
    }
}
print(img)