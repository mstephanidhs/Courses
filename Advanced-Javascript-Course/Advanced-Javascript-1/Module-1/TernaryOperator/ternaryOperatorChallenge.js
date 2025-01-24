const playerGuess = 3;
const correctAnswer = 6;

/*
Challenge 
1. Refactor the if else statement to use a ternary operator.
2. Now improve the functionality of this code by 
   letting the player know if their guess was too high, 
   too low, or exactly right.
*/

// let message = '';
// if (playerGuess === correctAnswer) {
//   message = 'Correct!';
// } else {
//   message = 'Wrong!';
// }

const message =
  playerGuess === correctAnswer
    ? 'Exactly right!'
    : playerGuess > correctAnswer
    ? 'Too high!'
    : 'Too low!';

console.log(message);
