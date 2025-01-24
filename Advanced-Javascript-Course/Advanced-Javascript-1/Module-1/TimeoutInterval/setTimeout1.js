/*
Challenge:
1. Make the third console.log fire 3 seconds after 
   the answer appears.
*/

console.log('What is the capital of Peru?');

// setTimeout(function, delay in millieseconds)
setTimeout(function () {
  console.log('Lima!');
}, 3000);

setTimeout(function () {
  console.log('Ready for next question?');
}, 6000);
