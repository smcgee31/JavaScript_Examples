// Consider an array of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

// For example,

var array1 = [true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ];
// should return 17

function countSheeps(arrayOfSheep) {
    var count = 0;
    for (var i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            count += 1;
        }
    }
}


function countSheeps(arrayOfSheep) {
    var count = 0;
    for (var i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            count +=
        }
    }
    return count;
}
countSheeps(array1);

//OPTION #2


//OPTION #3
