const dailyStepsArr = [10000, 12000, 18000, 15000, 11000, 19000, 13000];

// every item has to pass the text in order to return true
const areAllOver10k = dailyStepsArr.every(function (stepCount) {
  return stepCountC >= 1000;
});

console.log(areAllOver10k); // Output: true or false

// at least on of the elements inside the array satisfy the condition
const areSomeOver10k = dailyStepsArr.some(function (stepCount) {
  return stepCountC >= 1000;
});

console.log(areSomeOver10k); // Output: true or false

// ---------------------------------------------------------------------------------------
const invoicesUSDArr = [201, 354, 26, 1299, 1400, 60, 76];

// returns the first element that satisfies the condition
const invoiceOver1k = invoicesUSDArr.find(function (invoice) {
  return invoice > 1000;
});

console.log(invoiceOver1k);

// returns the index of the first element that satisfies the condition
const invoiceIndexOver1k = invoicesUSDArr.findIndex(function (invoice) {
  return invoice > 1000;
});

console.log(invoiceIndexOver1k);

// .indexOf() gives us the index of a given item in the array.
console.log(invoicesUSDArr.indexOf(26));

// I can use negative indexes in comparison with the [] that it doesn't work
console.log(invoicesUSDArr.at(-1));
