// rock - paper - scissors
// Write a function that generates one of the three choices and then
// compares the random choice to your choice and decides the winner... you or the computer.

// rock beats scissors
// sissors beats paper
// paper beats rock



function rps(yourChoice) {
    var choices = ['rock', 'paper', 'sissors'];
    var choiceNum = Math.floor(Math.random() * (3 - 0)) + 0;
    var compChoice = choices[choiceNum];
    if (yourChoice === 'rock' && compChoice === 'scissors') {
        console.log('You WIN!!');
    }
    if (yourChoice === 'rock' && compChoice === 'paper') {
        console.log('You LOSE!!');
    }
    if (yourChoice === 'rock' && compChoice === 'rock') {
        console.log('Its a TIE!!');
    }

}



// Cole's solution
var options = ["rock", "paper", "scissors"];

function getRandomInt() {
  return Math.floor(Math.random() * (3 - 0)) + 0;
}

function rps(player1){
  var p2n = getRandomInt();
  var player2 = options[p2n];
  var p1n = options.indexOf(player1);
  console.log(player1 + " vs " + player2);

  if((p2n === 0 && p1n === 2) || p2n === p1n+1){
    console.log("You Lost To " + player2);
  }
  else if(p2n === p1n){
    console.log("You Tied With " + player2);
  }
  else{
    console.log("You Beat " + player2);
  }
}

// setInterval(function(){rps(options[getRandomInt()]);}, 1000);
rps("rock");
