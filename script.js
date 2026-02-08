function yesClicked(){
    document.getElementById("message").innerHTML =
    "Muahhhhh ehehehhehehe well Congratulations you're my Valentine now Mrs Gupta 🧸❤️";
}

function moveNo(){
    var noBtn = document.getElementById("noBtn");

    var x = Math.floor(Math.random() * (window.innerWidth - 150));
    var y = Math.floor(Math.random() * (window.innerHeight - 150));

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}