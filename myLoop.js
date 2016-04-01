var numbers = [7,5,8,9,4,3,1];

function findInArray(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
    else {
      return false;
    }
  }
}

findInArray(numbers, 5);
