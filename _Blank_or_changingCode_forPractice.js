// Write a function that checks whether a passed in string parameter is
// a Palindrome (spelled the same backwards as forwards)


// Solution #1 - mine
function palindrome(str) {
  var newStr = str.replace(/[^a-z0-9]/ig, '').toLowerCase();
  var revNewStr = newStr.split('').reverse().join('');
  return (newStr === revNewStr);
}

palindrome("eye");
