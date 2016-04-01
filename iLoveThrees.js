var numbers = [3, 5, 6, 8, 9, 10, 12, 13, 15, 16, 17, 18, 25, 27];

function iLoveThree(numbers) {    
    var threes = [];
    for (i = 0; i < numbers.length ; i++) {
        if (numbers[i] % 3 === 0) {
            threes.push(numbers[i]);
        }
    }
    return threes;
}
