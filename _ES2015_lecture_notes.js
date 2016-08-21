// Use const always, use let when you can't and never use var again!

// Destructuring
let obj = {
    name: 'steve',
    age: 45,
    hobbies: 'coding'
};

let {name, age, hobbies} = obj;

// Destructured assignment
import {stuff} from './stuff';  // <-- where './stuff' is from a module.exports file
// the code above would be like :
import stuff from './stuff';
// if it was from the component below:
export default class stuff extends Component {

}

// Fat arrow functions
const foo = function(param) {
    console.log(param);
};

const bar = param => console.log(param); // very useful for anonymous functions
// also, dont forget that when you declare a function by using var or let or const to assign a function name the variables will not be hoisted...
// that only happens when you start your function declaration with "function"

// better string concatination
let a = 'steve';
let b = `hello, my name is ${a}`;   // uses backticks instead of quotes
console.log(b);
// OR
let x = 'steve';
let y = `hello,   // mulitline is ok and returns as multiline? try it.
my name
is ${x}`;
console.log(y);

// the constructor function with the "new" keyword can now be written
// as class with behavior built into the object from the get-go

// for - of loops instead of a traditional for loop
let arr = ['apple', 'banana', 'orange'];
for ( let i of arr ) {
    console.log(arr);
}
