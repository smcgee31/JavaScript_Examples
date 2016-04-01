function longer(arr1, arr2) {
  if(arr1.length > arr2.length) {
    return arr1;
  }
  else {
    return arr2;
  }
}

var arr1 = [1,2,4,5,8,7,9,10];
var arr2 = [1,2,3,4,5,6,7,8,9,78,96];


console.log(longer(arr1, arr2));
