// function sayHello(){
//     console.log("Hello");
// }

// sayHello();

// var sayBye = function() {
//     console.log("Bye");
// }

// sayBye();

function sing(nameOfSong) {
    console.log(nameOfSong);
}

sing("Despacito");
sing("ABC");
sing("XYZ");


function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "that's too hard!";
    } else {
        return a * b;
    }
}

// multiply(5, 10);
alert(multiply(5, 10));
