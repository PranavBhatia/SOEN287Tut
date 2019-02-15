var database = [
	{
		username: "pranav",
		password: "secret"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "messi",
		password: "777"
	}
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var usernamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(user, pass) {
	for (var i = 0; i < database.length; i++) {
		if (database[i].username === user && 
			database[i].password === pass) {
			console.log(newsfeed);
		} else {
	        alert("Sorry, wrong username and password");
		}
	}
}

signIn(usernamePrompt, passwordPrompt);
