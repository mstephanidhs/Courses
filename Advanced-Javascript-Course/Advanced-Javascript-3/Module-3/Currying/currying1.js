// function calculateVolume(length, width, height) {
//   return length * width * height;
// }

// const volume = calculateVolume(2, 3, 4);

// console.log(volume);

// INSTEAD

function calculateVolume(length) {
  return function (width) {
    return function (height) {
      return length * width * height;
    };
  };
}

// const withLength = calculateVolume(2)
// const withLengthAndWidth = withLength(3)
// const volume = withLengthAndWidth(4)

const volume = calculateVolume(2)(3)(4);

/*
Challenge:
    1. Convert this to arrow functions.
*/

const calculateVolume = (length) => (width) => (height) =>
  length * width * height;
