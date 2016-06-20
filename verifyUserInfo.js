// Validate user info and assign a date when all correct

var user = {
  name: {
    first: "Steve",
    last: "McGee"
  },
  email: "smcgee@gmail.com",
  password: "password"
};
var errorName = "Please enter a valid first and last name";
var errorEmail = "Please enter a valid email address";
var errorPassword = "Please enter a password";


function checkUserInfo(user) {
  if(!user.name.first && !user.name.last) {
    console.log(errorName);
  }
  if(user.password === "") {
    console.log(errorPassword);
  }
  var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if(user.email.search(emailRegEx) === -1) {
    console.log(errorEmail);
  }
  user.date = new Date();
  console.log("Your information has been verified and added at " + user.date);
}

checkUserInfo(user);
