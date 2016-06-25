var list = {value: 1, next: {value: 2, next: {value: 3, next: null}}};

// Solution #1
var listToArray = (list) => {
  var arr = [];
  for (var prop in list) {
    var value = list[prop];
    if (typeof value === 'object') arr.push(...listToArray(value));
    else arr.push(value);
  }
  return arr;
};

console.log(listToArray(list));



// Solution #2
const listToArr = (obj, arr) => {
  if (!arr) arr=[];
  arr.push(obj.value);
  if (obj.next) return listToArr(obj.next, arr);
  return arr;
}

console.log(listToArr(list));
