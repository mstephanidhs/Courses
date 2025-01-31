const athlete1 = { name: 'Alice', age: '50' };
const athlete2 = { name: 'Dave', age: '51' };
const athlete3 = { name: 'Nicky', age: '49' };

const finishers = new Map();

finishers.set(athlete1, 10000);
finishers.set(athlete2, 10200);
finishers.set(athlete3, 9800);

finishers.forEach((value, key) => console.log(key.name, value));

// how many properties inside the Map Object
console.log(finishers.size);

// get the value of a specific key
console.log(finishers.get(athlete3));

// delete a specific property
finishers.delete(athlete3);

// returns true if the specific property exists
console.log(finishers.has(athlete3));

const person = {
  name: 'Micky',
  dob: '200174',
  location: 'Dunwich',
};
person.language = 'English';
person['100'] = 'one hundred';
person['2'] = 'two';

for (let key in person) console.log(person[key]);
