// Write a function that splits an array (first argument) into groups
// the length of size (second argument) and returns them as a
// two-dimensional array.
// examples:
// titleCase('a clash of KINGS', 'a an the of');  returns 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In');  returns 'The Wind in the Willows'
// titleCase('the quick brown fox');  returns 'The Quick Brown Fox'


// Solution #1 - mine
const titleCase = (title, minorWords) => {
  if (title === '') {
    return '';
  }
  if (!minorWords) {
    let titleArr = title.split(' ');
    return (titleArr.map(function(a) {
      return (a.substring(0,1).toUpperCase()) + (a.substring(1).toLowerCase());
    })).join(' ');
  }
  let minorWordsArr = minorWords.split(' ');
  let titleArr = title.split(' ');
  let allFirst = titleArr.map(function(a) {
    return (a.substring(0,1).toUpperCase()) + (a.substring(1).toLowerCase());
  });
  for (let i = 1; i < allFirst.length; i++) {
    for (let j = 0; j < minorWordsArr.length; j++) {
        if (allFirst[i].toLowerCase() === minorWordsArr[j].toLowerCase()) {
          allFirst[i] = minorWordsArr[j].toLowerCase();  
        }
    }
  } 
  return allFirst.join(' ');
};
