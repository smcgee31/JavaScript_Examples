// Your task is to make a function that can take any non-negative integer as a argument
// and return it with it's digits in descending order. Descending order means that you
// take the highest digit and place the next highest digit immediately after it.

var num = 1254859723;

function descendingOrder(n){
  n = n.toString()
    .split('')
    .sort(function(a,b){return b-a;})  // this line could also read .sort().reverse()
    .join('')
  ;
  n = Number(n);
  return n;
}

console.log(descendingOrder(num));

// the same solution above could be shortened to:
function descendingOrder(n){
  return Number(String(n).split('').sort().reverse().join(''));  // and Number could have been replaced with parseInt
}
