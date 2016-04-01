
function fireWeapon(player) {
    if (this === player) {
        console.log(this.weapon.name)
    }
}

var player = {
    name: 'sumo man',
    weapon: {
        name: 'big belly'
    },
  attack: fireWeapon      // this line could also have been written as a function value like up above
};
var player2 = {
    name: 'beard man',
    weapon: {
        name: 'gnarly beard'
    },
  attack: fireWeapon
};

player.attack();   // whatever is left of the (dot) is what 'this' is referencing
player2.attack();         // this is the most common way of using 'this'

/////  EXPLICIT BINDING   ////////

// .call

function fireWeapon(range, power) {
    console.log(range);
    console.log(power);
    console.log(this.weapon.name)
}

var player = {
    name: 'beard man',
    weapon: {
        name: 'gnarly beard'
    },
    attack: fireWeapon
};

fireWeapon.call(player, 10, 300);


// .apply is the same as call except we would use an array for the arguments
fireWeapon.apply(player, [10, 300]);


// .bind   -- unlike .call and .apply, .bind will not invoke the function immediately when used,
//            instead it gives us a reference to the function that we can then call
//            it basically creates another function.

function multiplyAndDivide(multiplyBy, divideBy) {
    return this.val * multiplyBy / divideBy;
}

var calculator = multiplyAndDivide.bind({val: 20}, 10, 2);   //  <--- this is an object, and the order of the
//                                                                     arguments matters... 10 is 'multiplyBy'
//                                                                                           2 is the 'divideBy'

calculator();

//  New Binding and prototypes

function PlayerCreator(playerName, weaponName) {
    var player = {
        name: playerName,
        weapon: weaponName
        fire: function() {
            console.log(this.weapon.name);
        }
    }
    return player
}

//    --- this is the same as above ---

function Player(playerName, weaponName) {
    this.name: playerName;
    this.weapon: weaponName;
}

Player.prototype.fire = function() {           // this is a powerful way to add a common item to all the
    console.log(this.weapon.name)              // players that get created!
}

var player2 = new Player('sumoMan', {name: 'big belly'});

// there is no need for a return, it does that for us.
// we have to use the 'new' keyword or our function would point to the window
