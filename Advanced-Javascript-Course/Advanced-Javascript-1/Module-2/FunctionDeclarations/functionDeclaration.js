// function declaration
// they are hoisted
function getSpendAlert(amount) {
  return `Warning! You just spent £${amount}!`;
}

console.log(getSpendAlert(100));

// function expression / anonymous function
// not hoisted
// are cleaner and easier to read (arguably)
// are the choosen style of some dev reams
const getSpendAlert = function(amount){
    return `Warning! You just spent £${amount}!`
}