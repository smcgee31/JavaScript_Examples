// delete operator is for objects - NOT for arrays
// for arrays you want to use .splice()

// Create a function called truthyObject that takes in a user object.
// This function should loop through the user object checking to make sure
// that each of its values is truthy. If a value is not truthy then remove
// it from the object. Return the updated object after looping through it.

// BETTER CHECK THIS TO SEE IF IT WORKS BEFORE SUBMITTING IT!!!

function truthyObject(user) {
	  for (var prop in user ) {
	    if (user[prop]) {
			continue;
	    }
		else {
			delete user[prop];
		}
  		return user;
	}
}

var user = {name: "steve", age: 45, title: false};

truthyObject(user);
