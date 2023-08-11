"use strict";

//Hoisting with variables
// console.log(me); //undefined because of hoisting
// console.log(job); //it's in temportal dead zone
// console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;

//Hosting with Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); //it will raise an error
// console.log(addArrow(2, 3)); //same or console.log(addArrow) -> output: undefined

function addDecl(a, b) {
  return a + b;
}

//it's a const variable
const addExpr = function (a, b) {
  return a + b;
};

//if I use the var keyword so I have something like undefined(2, 3) thus the error
const addArrow = (a, b) => a + b;

// Example

console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
// variables created with let and const do not create properties on the global window
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z == window.z);

//THIS KEYWORD
// special variable that is created for every execution context (every function). Takes the value of (points to) the "owner" of the function in which the this keyword is used
//this is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.

//Calling this in arrow function, it will get the parent's function (lexical this)

console.log(this); //global window

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //is not attached to any object
};

calcAge(1991); //this -> undefined because we're in strict mode

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); //is not attached to any object
};

calcAgeArrow(1980); //this will point to the global object (global window, lexical this)

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); //points to jonas brother
    console.log(2037 - this.year);
  },
};

jonas.calcAge(); //this points to jonas because that's the object that called the function

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; //coppied the method from jonas to matilda, method borrowing
matilda.calcAge();

const f = jonas.calcAge; //copy the functions into a new variable

// f(); //regular function call, so this isn't attached to any object that's why it will return undefined

//------------------------------------------------------------
//Regular functions vs arrow functions

const jonas1 = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //solution 1
    // const self = this; // I can use self to solve the problem
    // const isMillenial = function () {
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    const isMillenial = () => {
      console.log(this); //use this keyword from its parent
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

// var firstName = 'Matilda
//then this will print the Matilda because var creates a property to the global window object
jonas1.greet(); // this -> undefined because of the arrow function
console.log(this.firstName); //trying to access a property of an object that doesn't exist, I don't get an error but it returns undefined
jonas1.calcAge(); //this in function isMillenial will be undefined

const addExpr1 = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr1(2, 5);
addExpr1(2, 5, 8, 12); //it's completely legal

//doesn't have the arguments keyword
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

let age = 30;
let oldAge = age;
age = 31;
console.log(age, oldAge);

const me = {
  name: "Jonas",
  age: 30,
};

const friend = me;
friend.age = 27;
//both will print 27 o.o'
console.log("Friend:", friend);
console.log("Me", me);

//objects(reference types) are stored in heap
//only primitves values that are declared with const are immutable but not reference types

///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive Types
let lastName = "Willimas";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

//Reference Types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
//it will print the same things (call stack & heap)
console.log("Before Marriage:", jessica);
console.log("After marriage", marriedJessica);

// marriedJessica = {}; // it's const so I can't do that

//copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

//works only on the first level (i.e. if there is an object inside the object, it won't work - shallow copy)
const jessicaCopy = Object.assign({}, jessica2); //create an entirely new object that has all the properties
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
//both of the object have changed
console.log("Before marriage", jessica2);
console.log("After Marriage", jessicaCopy);
