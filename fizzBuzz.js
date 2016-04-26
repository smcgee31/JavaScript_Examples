


function fbzOne(count) {
  var array = [];
  for(var i = 0; i <= count; i++) {
    array.push(i);
    if(array[i] % 15 === 0) {
      array[i] = "fizzbuzz";
    }
    if(array[i] % 3 === 0) {
      array[i] = "fizz";
    }
    if(array[i] % 5 === 0) {
      array[i] = "buzz";
    }
  }
  console.log(array);
}

fbzOne(30);





// Cole's answer:
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function lotto(arr){
  var newArr = [];
  for(var i = 0; i < 6; i++){
    newArr.push(getRandomInt(1,10));
    if(arr[i] === newArr[i]){
      console.log("Match at " + i);
    }else{
      console.log("Mismatch at " + i);
    }
  }
  return newArr;
}

console.log(lotto([1,1,2,3,5,8]));






// Jason's answer:
var yourGuess = [1, 5, 3, 3, 5, 4];

function lotto(arr){
 var randomNum = [];
 for (var i = 0; i < 6; i++) {
   var selector = Math.floor(Math.random() * 10);
   randomNum.push(selector);
 }
 if(arr === randomNum){
   alert("Congrats. You Win! . . .cheater. . .");
   }
 else {
   alert("Sorry. You lose . . .");
   }
}

lotto(yourGuess);
