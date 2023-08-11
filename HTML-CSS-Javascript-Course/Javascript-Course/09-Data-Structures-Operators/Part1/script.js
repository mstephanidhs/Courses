"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
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
  },

  order: function (starterIndex, mainIndex) {
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

const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

//if numGuests=0 then It will give me 10, which is not what I want
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//OR assignment operator
// rest1.numGuests ||= 10; //exactly as the above but in a more consise way
// rest2.numGuests ||= 10;

//that's the way I use to resolve the above problem
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest2.owner = rest2.owner && "<ANONYMOUS";
rest1.owner = rest1.owner && "<ANONYMOUS";

rest1.owner &&= "<ANONYMOUS";
rest2.owner &&= "<ANONYMOUS>";

restaurant.numGuests = 0;
const guests5 = restaurant.numGuests || 10;
console.log(guests5);

// ?? -> works with the concept of nullish values (null and undefined, doesn't include 0 or ''), so they are not falsy values but truthy values
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log("----------OR---------");
//Use ANY data type, return ANY data type, short-circuting or short-circuit evaluation (if the first value is a truthy value, it will return this one and won't procceed to check the other one)
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuests = 23;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("------AND------");
console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log("Hello" && 23 && null && "jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// Destructuring

//SPREAD, because on RIGHT side of =
const arr2 = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; //it doens't collect skipped elements like in the mainMenu
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (
  ...numbers //pack the values
) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 6, 2, 1, 4);

const xy = [23, 5, 7];
add(...xy); //unpack the values

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms"); //otherIngredients will be [] because it couldn't collect anything

////////////////////////////////////////////////////////////////

//add new elements to an existing array using spread operator
const arr1 = [7, 8, 9];
const newArr = [1, 2, ...arr1]; //whenever we write seperate values using comma
console.log(newArr);
console.log(...newArr); //print the elements of the array invidually

const newMenu = [...restaurant.mainMenu, "Gnocci"]; //building essentially a new array from scratch
console.log(newMenu);

//Copy array (shallow copy)
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays or more
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

//spread operator works on all iterables (arrays, strings, maps or sets but NOT objects)
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);

// Real-world example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" }; //created a brand new object

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name); //they have different names

////////////////////////////////////////////////////////////////

//passing an object as an argument
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 2,
});

//object destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//have different variables names than the object's property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//set default values (menu) in case the property I am trying to retrieve, doesn't exist in the object
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let aa = 111;
let bb = 999;
const obj = { a: 23, b: 7, c: 14 };

// {} -> means code block which can't be equal to anything so I have to use parentheses
({ a: aa, b: bb } = obj);
console.log(aa, bb);

//Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

///////////////////////////////////////////////////////////////

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//declare all three variables at the same time
const [x, y, z] = arr;
console.log(x, y, z); //destructuring the array
console.log(arr); //the original array is not affected by it

let [main, , secondary] = restaurant.categories; //as many as the variable are, we can also skip and go to the next element using , ,
console.log(main, secondary);

//switch values using temp technique
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//using the destructure technique to switch the variables content
[main, secondary] = [secondary, main];

//receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested -> an array inside an array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

//get the values inside the nested array, destructuring inside destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); //3rd one will be undefined since there isn't a third element in the specific array

//store default values if there isn't an element in the speicfic index
const [p = 1, q = 1, r = 1] = [8, 9];
