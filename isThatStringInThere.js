// Write a function that Given two arrays of strings a1 and a2 
//return a sorted array r in lexicographical order of the strings 
// of a1 which are substrings of strings of a2.
// examples:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]
// example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []


// Solution #1 - mine
function inArray(a1,a2){
  var result = [];
  for (var i = 0; i < a1.length; i++) {
    for (var j = 0; j < a2.length; j++) {
      var re = new RegExp(a1[i], 'gi');
      if (re.test(a2[j])) {
        if (result.indexOf(a1[i]) === -1) {
          result.push(a1[i]);
        }
      }
    }
  }
  return result;
}

inArray(["live", "mice", "mstro", "ong"], ["lively", "alive", "harp", "sharp", "armstrong"]); //returns [ 'live', 'mstro', 'ong' ]