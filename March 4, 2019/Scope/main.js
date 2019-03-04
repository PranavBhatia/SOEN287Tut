// Scope

// Root Scope (window)
var fun = 5;

function funFunction() {
    // Child Scope
    var fun = "Hello";
    console.log(1, fun);
}

function funnierFunction() {
    // Child Scope
    var fun = "Bye";
    console.log(2, fun);
}

function funniestFunction() {
    // Child Scope
    fun = "AHHHHHH";
    console.log(3, fun);
}

console.log("window", 1, fun);
funFunction();
funnierFunction();
funniestFunction();
console.log("window", 2, fun);