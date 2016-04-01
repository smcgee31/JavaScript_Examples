var myArray = [];
    myArray.foo2 = "";
    myArray.foo = "bar";
    myArray.funky = false;
    myArray.age = 50;
    myArray.name = "ernest";

function onlyTheTruthy(myArray) {
    for (var i in myArray) {
        if (!myArray[i]) {
            delete myArray[i];
        }
    }return myArray;
}
