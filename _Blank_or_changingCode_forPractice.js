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
function inArray(array1,array2){
  var r = [];
  for (var i = 0; i < a1.length; i++) {
    for (var j = 0; j < a2.length; j++) {
      if (a2[j].substring(a2.length - a1.length) === a1[i]) {
        r.push(a1)  // but what when it gets pushed again and there is two or more of the same string?
      }
    }
  }
  
  
}