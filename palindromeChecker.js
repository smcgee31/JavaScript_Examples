// Write a function that checks whether a passed in string parameter is
// a Palindrome (spelled the same backwards as forwards)


// Solution #1 - mine
function palindrome(str) {
  var newStr = str.replace(/[^a-z0-9]/ig, '').toLowerCase();
  var revNewStr = newStr.split('').reverse().join('');
  return (newStr === revNewStr);
}

palindrome("race car");


// Solution #2 - mine
// same as above just turned into a one-liner
function palindrome2(str) {
  return ((newStr = str.replace(/[^a-z0-9]/ig, '').toLowerCase()) === (revNewStr = newStr.split('').reverse().join(''))) ;
}

palindrome2("race car");

