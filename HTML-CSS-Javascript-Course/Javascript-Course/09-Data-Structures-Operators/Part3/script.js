// 4 built-in data structures
// simple list -> array or sets
// key/value pairs -> objects or maps (key allow us to describe values)

"use strict";

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes.`
);

// 4
for (const [key, value] of gameEvents) {
  const str =
    key < 45
      ? `[FIRST HALF] ${key}: ${value}`
      : `[SECOND HALF] ${key}: ${value}`;
  console.log(str);
}

/////////////////////////////////////////////////
// Working with strings
// methods don't mutate the string but return a new one

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r")); //strings are zero-based (first occurence)
console.log(airline.lastIndexOf("r")); //last occurence in the string
console.log(airline.indexOf("portugal")); //returns -1 if it doesn't exist in the string

console.log(airline.slice(4)); //begin parameter (where the slice will happen), returns a new string
console.log(airline.slice(4, 7)); //begin and end parameter (stops extracting before the end parameter)

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" "))); //don't need the end parameter since it will extract 'til the end of the string if we don't specify it

console.log(airline.slice(-2)); //extracts from the end
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat");
  else console.log("You got lucky");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

// boxing -> takes a string and puts it into a box, converts a string primitive to a string object with the same content and so on that object the methods are called
console.log(new String("jonas"));
console.log(typeof new String("jonas"));

console.log(typeof new String("jonas").slice(1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

//do it all in one step
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to barding door 23. Boarding door 23!";

console.log(announcement.replaceAll("door", "gate"));

// Booleans string methods
const planeNew = "A320neo";
console.log(planeNew.includes("A320"));
console.log(planeNew.includes("Boeing"));
console.log(planeNew.startsWith("Air")); //it doesn't have to match the whole first word

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

/////////////////////////////////////////////////////////////
// Part3 - Working with strings

console.log("a+very+nice+string".split("+")); //stores the result in elements of a new array
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toLowerCase()));
  }

  console.log(namesUpper.join(" "));
};

capitalizeName("jessica and smith davis");
capitalizeName("jonas Schmedtmann");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(35, "+")); //add characters to beginning of the string
console.log("Jonas".padStart(25, "+"));

const maskCreditCard = function (number) {
  const str = number + ""; //returs the number as a string
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

maskCreditCard(433546151654645);
maskCreditCard("1351313131351351351");

// Repeat
const message2 = "Bad weather... All Departures Delayed...";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"planes".repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const [firstWord, secondWord] = row.toLowerCase().trim().split("_");
    const output = `${firstWord}${secondWord.replace(
      secondWord[0],
      secondWord[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

// String Practice

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""} ${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(36);
  console.log(output);
}
