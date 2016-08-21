// Create a function called myLoop that takes in two parameters, the first
// parameter should represent a starting number and the second is how many
// times the starting number should be incremented. Use a forloop to increment
// the first parameter a number of times equal to the second parameter.
// Then return the modified number. For example if the first parameter is 3 and
// the second parameter is 4, the number three should be increased by one each
// time the forloop runs, and the for loop should run 4 times. This should return the number 7

function myLoop(num, inc) {
    for (var i = 0; i < inc; i++) {
        num++;
    }
    return num;
}
