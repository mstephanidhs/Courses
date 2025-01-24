const exerciseTimeMins = 40;

// let message = '';

// if (exerciseTimeMins < 30) {
//   message = 'You need to try harder!';
// } else if (exerciseTimeMins < 60) {
//   message = 'Doing good!';
// } else {
//   message = 'Excellent!';
// }

// assign a value to a variable is the perfect scenario for the ternary operator
const message =
  exerciseTimeMins < 30
    ? 'You need to try harder!'
    : exerciseTimeMins < 60
    ? 'Doing good!'
    : 'Excellent!';

console.log(message);
