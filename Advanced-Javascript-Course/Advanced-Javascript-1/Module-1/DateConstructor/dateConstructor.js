/*
Challenge:
    1. Search online to find out how we can get just the year
       using the Date() constructor. Then update the code in
       the console.log.
*/

// in-built constructor have always an uppercase first letter
const dateSnapshot = new Date()
console.log(dateSnapshot.toString());
console.log(`Copyright ${dateSnapshot.getFullYear().toString()} all rights reserved.`)
// luxon helps to work with date and times in javascript easier

