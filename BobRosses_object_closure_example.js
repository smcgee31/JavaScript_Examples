// This is an example of objects creation and object having a function as a value


function createPainterTeam(teamName) {
var members = [];
  return function(teamMemberName) {
    members.push(teamMemberName);
    return {
      tName: teamName,
      roster: members
    }
  }
}

var bobRossesFn = createPainterTeam("Bob Rosses");
var rossesRoster = bobRossesFn("Leo");
rosses = bobRossesFn("Alex");
rosses = bobRossesFn("Pablo");

console.log(rossesRoster);

var pinkWalrusFn = createPainterTeam("Pink Walrus");
var walrusRoster = pinkWalrusFn("Mikey");
walrusRoster = pinkWalrusFn("Sam");
walrusRoster = pinkWalrusFn("Jeremy");

console.log(walrusRoster);
