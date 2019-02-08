function sayHello(){
    console.log("Hello");
}

// sayHello();

// Function Expression =>
// This function is also called anonymous function.
var sayBye = function() {
    console.log("Bye");
}

// sayBye();

// 
function sing(song) {
    console.log(song);
}

// sing("Saa Ree Gaa");
// sing("Despacito");


function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "that's too hard!";
    } else {
        return a * b;
    }
}

alert(multiply(5, 10));