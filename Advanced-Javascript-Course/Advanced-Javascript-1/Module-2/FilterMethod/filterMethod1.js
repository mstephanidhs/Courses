const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18];
/*
Challenge:
1. Get rid of the if statement and reduce the
   logic in this function to just one line
   of code.
*/
// const adults = ages.filter(function(age) {
//     if (age >= 18) {
//         return true;
//     }
// })

const adults = ages.filter((age) => age > 18);

console.log(adults.length);

// Challenge:
// 1. Use the .filter method to create an array
//    called "children" which holds all of the ages
//    that are under 18.
// */
const children = ages.filter((age) => age < 18);
console.log(children);