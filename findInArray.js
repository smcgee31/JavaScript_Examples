var numbers = [7,5,8,9,4,3,1];

function findInArray(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
    else {
      return false;
    }
  }
}

console.log(findInArray(numbers, -7));
