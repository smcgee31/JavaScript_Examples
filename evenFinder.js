function evenFinder(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
   }
  return newArray;
}

var array = [1,2,4,5,8,7,9,10];

console.log(evenFinder(array));
