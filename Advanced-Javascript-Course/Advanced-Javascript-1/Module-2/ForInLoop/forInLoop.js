const character1 = {
  title: 'Ninja',
  emoji: '🥷',
  powers: ['agility', 'stealth', 'aggression'],
};

for (let property in character1) {
  console.log(property);
}

// for...of vs for...in
// They both iterate over object data structures
// Arrays are objects too

// for...in
// iterates over all enumerable property keys of an object

// for...of
//  iterates over the values of an iterable object (examples of iterable objects include arrays, string)
