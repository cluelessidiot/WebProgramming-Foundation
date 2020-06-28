function black(pixel) {
    pixel.setRed(0)
    pixel.setGreen(0)
    pixel.setBlue(0)

    return pixel;

}



var img = new SimpleImage('smallpanda.png');

print(img);
for (var pixel of img.values()) {

    //  print(pixel.getX())
    if (pixel.getX() < 10 || pixel.getX() < img.getWidth() && pixel.getX() > img.getWidth() - 10)
        pixel = black(pixel);
    if (pixel.getY() < 10 || pixel.getY() < img.getHeight() && pixel.getY() > img.getHeight() - 10)
        pixel = black(pixel);






}

print(img)