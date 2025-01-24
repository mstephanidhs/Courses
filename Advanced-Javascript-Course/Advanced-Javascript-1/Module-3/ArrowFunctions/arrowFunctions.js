// different ways of writing arrow functions
// const getSpendAlert = (amount) => {
//   return `Warning! You just spent £${amount}`;
// };

// const getSpendAlert = amount => `Warning! You just spent £${amount}`;
const getSpendAlert = () => `Warning! You just spent some money`;
// const getSpendAlert = (name, amount) => `Hey ${name}! You just spent £${amount}`;

console.log(getSpendAlert(150));

// When to use brackets
// 1 parameter: brackets not needed
// 0 or 2 or more parameters: brackets needed

// When to use {} + return
// Return one line of code without curly braces or the return keyword
// More complex logic requires the curly braces and the return keyword
