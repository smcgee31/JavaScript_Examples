// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even,
// return the middle 2 characters.

// Solution #1
function getMiddle(s) {
  if (s.length === 1 || s.length === 2) {
    return s;
  }
  if (s.length % 2 !== 0) {
    return s.charAt((Math.floor(s.length/2)));
  } else {
    return (s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2));
  }
}

// Solution #2 - same as above just using a Conditional Operator to shorten the code
function getMiddle2(s) {
  if (s.length === 1 || s.length === 2) {
    return s;
  }
  return (s.length % 2 !== 0) ? s.charAt((Math.floor(s.length/2))) : (s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2));
}

// Solution #3 - same as above but realized that the first if statement was unecessary because the math takes care of it anyway.
function getMiddle(s) {
  return (s.length % 2 !== 0) ? s.charAt((Math.floor(s.length/2))) : (s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2));
}
