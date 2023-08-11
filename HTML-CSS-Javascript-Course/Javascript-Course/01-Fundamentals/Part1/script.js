/* part1

// camel case notation  preferably
    // can't start variable names with numbers or a reserved javascript keyword
    // must contain only numbers, letters, underscores, $ sign

    let js = 'amazing';

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415; // uppercase letters conventionally are used for constant variables

let myFirstJob = 'Coder'; // give proper and descriptive names for variables
let myCurrentJob = 'Teacher';

console.log(myFirstJob);

*/

/* Part2

// dynamic typing -> don't have to declare the type of the variable

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true); //prints the type of the value/variable

console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year); //at this point it's undefined
console.log(typeof year);

year = 1991;
console.log(typeof year); //now it does have a type

console.log(typeof null); //it's a bug, not an object as it indicates

*/

/* Part3 

let age = 30; //block scoped
age = 31; //using let when I want to change the variable content

const birthYear = 1991; //immutable variable (can't change) -> I have to initiallize it, otherwise an error will be produced
birthYear = 1990;

var job = 'programmer'; //function scoped
job = 'teacher';

lastName = 'Schmedtmann'; //doens't have to use let/var but it's a terrible idea, because it will create a property in the global scope
console.log(lastName);

*/

// math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas);
console.log(ageSarah, ageJonas);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2** 3 -> 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // 99 
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah); //  >, <, <=, >=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);