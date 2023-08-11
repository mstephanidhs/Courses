"use strict";

const bookings = [];

// ES6 way of creating default values
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1; // default: 1
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123"); //the others parameters are undefined because they are not defined
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

//cannot skip arguments (we can although use undefined in order to skip the specific parameter)
createBooking("H123", undefined, 1000);

///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};

// flightNum (primitive type) is a completely different var to the flight var
// passenger (reference type) is a reference to the object in the memory heap thus passenger and jonas are the same thing
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) {
    alert("Check in");
  } else {
    alert("Wrong passport!");
  }
};

// checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

///////////////////////////////////////////////////////////////

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

//upperFirstWord and oneWord are called callback functions
transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
// split up our code in more reusable parts
// allow us to create a level of abstraction (hide the detail of some code implementation because we don't care about this level of detail)
const high5 = function () {
  console.log("Hello!");
};

document.body.addEventListener("click", high5);

["Jonas", "Martha", "Adam"].forEach(high5);

////////////////////////////////////////////////////
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// const greeterHey = greet("Hey!");
// greeterHey("Jonas");
// greeterHey("Steven");

// greet("Hello")("Jonas");

// const greet = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// or
// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greet("Hi")("Jonas");

const lufthansa = {
  airline: "Lufthansa",
  dataCode: "LH",
  bookings: [],
  // instead of book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.dataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.dataCode}${flightNum}` });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  dataCode: "EW",
  bookings: [],
};

//because of first-class functions, it's just a regular function
const book = lufthansa.book;

//this keyword points to undefined, DOES NOT WORK
// book(23, "Sarah Williams");

book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  dataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

////////////////////////////////////////////////////////
// Apply method
// apply doesn't receive a list of arguments after the this keyword but instead it will take an array of arguments
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

// not used that much anynore in JS, because we can do the above using the spread operator
book.call(swiss, ...flightData);

////////////////////////////////////////////////////////
// Bind method
// more important than apply or call method
// doesn't immediately call the function (IMPORTANT) but returns a function to the object that the this keyword refers to

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

// it will be always book(23, ,), so I have to define only the second argument each time I call the function
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtmann");
bookEW23("Martha Cooper");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// this keyword points to the object (lufthansa)
// lufthansa.buyPlane();

// in an event handler the this keyword always points to the element that is called, so in this case it's the button
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// first argument of bind is the this keyword but in this case we don't care about so we can put null
// if the rate is always the same
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTAXNEW = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVATNEW = addTAXNEW(0.23);
console.log(addVATNEW(100));
