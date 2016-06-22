// write a function that will take an array of numbers and returns an array of functions
// where the function will console.log the array number from the original array

var arr = [0,1,4,6,7,9];
// should return var funcArr = [func...0, func...1, func...4, func...6, func...7, func...9]

function closure(val) {
  return function() {
    console.log(val);
  };
}

function makeNum(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(closure(arr[i]));
  }
  return newArr;
}
