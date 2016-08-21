// Ten ways to reverse a string

// method #1
// use built-in methods in a chain
const revString = (str) => str.split('').reverse().join('');

// method #2
// use a decrementing for loop
const revString2 = (str) => {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

// method #3
// use recursion
const revString3 = (str) => {
  if (str === '') {return '';}
  else {return revString3(str.substr(1)) + str.charAt(0);}
};

// method #4
// same as #3 but using a conditional operator (ternary)
const revString4 = (str) => {
  return (str === '') ? '' : revString4(str.substr(1)) + str.charAt(0);
};

// method #5
// incrementing/decrementing for-loop with two arrays
const revString5 = (str) => {
  let newStr = [];
  for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
    newStr[j] = str[i];
  }
  return newStr.join('');
};

// method #6
// incrementing for-loop with array pushing and charAt
const revString6 = (str) => {
  let newStr = [];
  for (let i = 0; i <= str.length; i++) {
    newStr.push(str.charAt(str.length - i));
  }
  return newStr.join('');
};

// method #7
// decrementing while-loop with concatenation and substring
const revString7 = (str) => {
  let newStr = '';
  let i = str.length;
  while (i > 0) {
    newStr += str.substring(i - 1, i);
    i--;
  }
  return newStr;
};
