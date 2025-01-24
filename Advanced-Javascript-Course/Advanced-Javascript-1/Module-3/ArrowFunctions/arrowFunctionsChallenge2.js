const distanceTraveledMiles = [267, 345, 234, 190, 299]

// const distanceTraveledKm = distanceTraveledMiles.map(function(distance){
//     return Math.round(distance * 1.6)
// })

/*
Challenge
1. Refactor this .map method so the inline function is
   an arrow function.
2. Write the least amount of code possible.
*/

const distanceTraveledKm = (distanceTraveledMiles) => distanceTraveledMiles.map(distance => Math.round(distance * 1.6));

console.log(distanceTraveledKm);
