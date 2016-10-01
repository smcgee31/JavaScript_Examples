// Write a function that returns a sentence title cased.
// example:
// "sHoRt AnD sToUt' should return as "Short And Stout"


// Solution #1 - mine
function titleCase(str) {
 return str.split(' ')
  .map(function (word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  })
  .join(' ');
}

titleCase("I'm a little tea pot");


// Solution #2 - mine -- ES6
const titleCase2 = str => str.split(' ').map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' ');

titleCase2("I'm a little tea pot");