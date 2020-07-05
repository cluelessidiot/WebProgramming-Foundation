function buttonred() {
    var dd1 = document.getElementById("div1");
    dd1.style.backgroundColor = "yellow";
    var ctx = dd1.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillstyle = "Red"
    ctx.fillRect(10, 10, 40, 40)
        // alert('inside function');
}

function buttonblue() {
    var dd1 = document.getElementById("div2");
    dd1.style.backgroundColor = "Red";

    var ctx = dd1.getContext("2d");

    ctx.fillStyle = "yellow"
    ctx.fillRect(80, 80, 800, 800)
    ctx.fillStyle = "black";
    ctx.font = "60px"
    ctx.fillText("hello", 15, 85)
    ctx.clearRect();

}

function text() {
    var dd1 = document.getElementById("div1");
    var dd2 = document.getElementById("div2");
    dd1.innerHTML = "121212222"
    dd2.innerHTML = "wwwwwwwww"
}