var person = {
    lastName: "McGee",
    firstName: "Steve",
    age: 45,
    hairColor: "brown",
    location: "Provo, UT"
};

for(var prop in person) {
    if(person[prop] === "brown") {
        person[prop] = "blonde";
    }
}

var person2 = new Object({firstName: 'Ben',});

person.title = "developer";

var user = function(firstName, lastName, userName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = password;

};

var bob = new User('Bob', 'Dillon', 'b.dillon', 'bdillon@gmail.com', 'iamarocker');


var car = {
    make: 'Chevy',
    model: 'Camero',
    year: 2016,
    color: 'Red',
};

for (var prop in car) {
    console.log(prop);
    console.log(car[prop]);
}
