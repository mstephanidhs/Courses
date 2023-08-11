"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  // ES6 using destructure
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  // ES6 new syntax for writing methods inside objects
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicous pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object (with its key and values)
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//////////////////////////////////////////////////////////////////
// Optional chaining, if the property exists (before the open) then it will print the console.log, otherwise immediately undefined will happen but not an error will be raised
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  //   console.log(day);
  // returns 0 for saturday, which is a falsy value, that's why I use ?? operator
  const open = restaurant.openingHours[day]?.open ?? "closed"; //same as openingHours.mon
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
// checks if the corresponding method exists
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "Jonas", email: "hello@jonas.io" }];
console.log(users[0]?.name ?? "User array empty");

////////////////////////////////////////////////////////////
// The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//can still use continue and break keywords
for (const item of menu) console.log(item);

//when we need the index of the element
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);

// SETS
// unique values, they are also iterable just like arrays

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet); // all the duplicates are actually gone

console.log(new Set("Jonas")); //a set with the letters of the name

console.log(ordersSet.size); //how many different meals are going to be cooked
console.log(ordersSet.has("Pizza")); //check if a certain element is in the set
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread"); // add new items into the set
ordersSet.add("Garlic Bread"); //it will be added only one time
ordersSet.delete("Risotto"); //delete elements from the set
console.log(ordersSet[0]); //there are no indexes, so we can't get out items from a set, only know if it is in a set or not
// ordersSet.clear(); //delete all elements from the set

for (const order of ordersSet) console.log(order); //looping through the set

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
//interested only in which are the different specialties that the restaurant has
const staffUnique = [...new Set(staff)]; //want to convert to an array again
console.log(staffUnique);
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("jonassschmedtmann").size);

//////////////////////////////////////////////////////////
// MAPS
// key and value

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal")); //it also prints the map

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

// the datatype of the key matters when we want to recover the content of the key (=> value)
console.log(rest.get("name"));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

//check if a map contains a certain key
console.log(rest.has("categories"));
rest.delete(2); //delete a key - value
console.log(rest.size);
// rest.clear();

rest.set([1, 2], "Test");

rest.set(document.querySelector("h1"), "Heading");

// console.log(rest.get([1, 2])); //it's not the same on the heap so I should have do that instead: arr = [1, 2]; so that they refer in the same address in memory

//another way of populating a map without using the set function
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);

console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//iteration on maps
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);
if (question.get("correct") === answer) console.log(question.get(true));
else console.log(question.get(false));

// Covert map to an array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
