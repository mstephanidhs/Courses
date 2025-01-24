const characters = [
  {
    title: 'Ninja',
    emoji: '🥷',
    powers: ['agility', 'stealth', 'aggression'],
  },
  {
    title: 'Sorcerer',
    emoji: '🧙',
    powers: ['magic', 'invisibility', 'necromancy'],
  },
  {
    title: 'Ogre',
    emoji: '👹',
    powers: ['power', 'stamina', 'shapeshifting'],
  },
  {
    title: 'Unicorn',
    emoji: '🦄',
    powers: ['flight', 'power', 'purity'],
  },
];

// forEach method
// a method for iterating over arrays
// not much different comparing to the for...of loop
// just neat and cleaner

/*
Challenge:
1. Nest a forEach to log out each individual
   power in each characters powers array.
*/
characters.forEach(function(character) {
    character.powers.forEach(function(power) {
        console.log(power);
    })
});

// second parameter -> index of the current element in the array
characters.forEach(function(character, index){
    console.log(index, character.title)
})