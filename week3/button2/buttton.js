function button() {
    var txt;
    var r = confirm("Press a button!");
    if (r == true) {
        txt = "You pressed OK!";
        alert("OK")
    } else {
        txt = "You pressed Cancel!";
        alert("canceling")
    }


    // alert('inside function');
}