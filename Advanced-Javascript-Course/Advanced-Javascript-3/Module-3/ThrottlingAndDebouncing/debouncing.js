function debounce(func, delay) {
  let debounceTimer;
  return (...args) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      func(...args);
    }, delay);
  };
  /*
Challenge:
  1. Convert this inner function to an arrow function and 
     use rest params to handle passing in arguments.
*/
}

function handleInput(e) {
  console.log('Input detected from element with id ' + e.target.id);
}

document
  .getElementById('name-input')
  .addEventListener('input', debounce(handleInput, 500));
