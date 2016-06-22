// Find the number of divisors of a positive integer n.

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
