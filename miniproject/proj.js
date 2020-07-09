function uploadImage() {
    var dd1 = document.getElementById("img");
    var img = new SimpleImage(dd1);
    var canvas = document.getElementById("canvas");
    img.drawTo(canvas);
    alert("inside Reset");
}

function greyScale() {
    alert("inside Greyscale");
}

function red() {
    alert("Inside Red");
}

function reset() {
    alert("inside Reset");
}

function buttonred() {
    alert("dddd")
}