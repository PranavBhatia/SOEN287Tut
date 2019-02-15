// Simple Calculator =>
var first = prompt("enter first number");
var second = prompt("enter second number");
var sum = Number(first) + Number(second);
alert("The sum is: " + sum);

// IF, ELSE IF and ELSE Condition =>
var name = "PB";
if (name === "PB" || name == "KS") {
	alert("Hi PB or KS");
} else if (name === "Bob") {
	alert("Hi Bob");
} else {
	alert("I don't know you!");
}

// IF Condition with &&
var firstName = "Pranav";
var lastName = "Bhatia";
if (firstName === "Pranav" && lastName === "Bhatia"){
	alert("Hi Pranav Bhatia");
}

// IF Condition with !
if (!(name === "PB")){
	alert("Hi not PB");
}

// Exercise 4