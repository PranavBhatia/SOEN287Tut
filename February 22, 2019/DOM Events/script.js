var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function() {
    console.log("CLICK!");
})

button.addEventListener("mouseenter", function() {
    console.log("MOUSE ENTER!");
})

button.addEventListener("mouseleave", function() {
    console.log("MOUSE LEAVE!");
})