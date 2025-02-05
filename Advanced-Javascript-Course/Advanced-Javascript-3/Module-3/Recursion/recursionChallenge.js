let str = 'SCRIMBA';

function reverseStr(str) {
  /*
Challenge:
    1. Write logic for a recursive function 
       that reverses a string.
    🛟 hint.md for help!
*/
  if (str.length === 0) return str;
  return reverseStr(str.slice(1)) + str.slice(0, 1);
}

console.log(reverseStr(str));

// What is the smallest bite of the problem? Remove the first letter from str.
// What is the base case? The strings length being zero.
// SCRIMBA
// CRIMBA
// RIMBA
// IMBA
// MBA
// BA
// A
// ""
// A
// AB
// ABM
// ABMI
// ABMIR
// ABMIRC
// ABMIRCS
