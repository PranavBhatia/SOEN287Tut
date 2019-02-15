var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study js",
    "eat healthy"
]
var todosLength = todos.length;
for (var index = 0; index < todos.length; index++) {
    console.log(index);
    // todos[index] = todos[index] + '!';
    // todos.pop();
}

todos.forEach(function(todo, index) {
    console.log(todo, index);
})

// var counterOne = 10;
// while(counterOne > 0) {
//     console.log(counterOne)
//     counterOne--;
// }

// var counterTwo = 10;
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0); // > 10 for demonstration

