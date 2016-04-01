var myGroceryList = ["apples", "oranges", "chips"];

function removeItem(myGroceryList, item) {
  for (var i = 0; i < myGroceryList.length; i++) {
    if (myGroceryList[i] === item) {
      myGroceryList.splice(i,1);
    }
  }
  return myGroceryList;
}



function addItem(myGroceryList, item) {
    if (myGroceryList.indexOf(item) === -1) {
      myGroceryList.push(item);
    }
  return myGroceryList;
}




console.log(removeItem(myGroceryList, "chips"));
console.log(addItem(myGroceryList, "juice"));
