"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  //clear the html element, it returns the whole html that it includes
  containerMovements.innerHTML = "";
  // .textContent = 0

  // create a copy of the array  using the slice method
  const movs = sort ? movements.splice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
            <div class="movements__value">${mov}€</div>
      </div>
      `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, _, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    // create a new proprty, username
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0]) // actively returning even though there isn't the return keyword
      .join("");
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event Handlers
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("clicl", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update the UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin = "";
});

let sorted = false;

btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"];

// // 2 -> index that we will start extracting, doens't mutate the original arr array but returns a new one
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4)); // end parameter isn't included in the output
// console.log(arr.slice(-1)); //-1 is always the last element of the array
// console.log(arr.slice(1, -2));

// // SPLICE
// // it does actually change the original array (mutates it)
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2); // in this case 2 indicates how many elements will be deleted starting from index 1
// console.log(arr);

// // REVERSE
// // does mutate the original array
// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// // does not mutate the original array
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]); // concat method using the spread operator

// // JOIN
// console.log(letters.join("-"));

// ///////////////////////////////////////////////////////
// // The new at method
// const arrNEW = [23, 11, 64];
// console.log(arrNEW[0]);
// console.log(arrNEW.at(0)); // same as the above

// // traditional ways of getting the last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log("jonas.".at(0));
// console.log("jonas.".at(-1));

// //////////////////////////////////////////////////////////
// const movementsNEW = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movementsNEW) {
// for (const [i, movement] of movementsNEW.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// // cannot break out of an foreach loop (cannot use break or continue)
// console.log("-------- FOREACH -----------");
// // calls the function for each iteration and I can pass as a paremeter the element of the array each time
// // the names does not matter at all but the ORDER of the parameters MATTER
// movementsNEW.forEach(function (movement, i, array) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

// ///////////////////////////////////////////////////
// // foreach for Maps and Sets

// // Map
// const currenciesNEW = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currenciesNEW.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// //key is exactly the same as the value, because set does not have keys or indexes
// // _ -> a throw away variable, is not necessary
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${key}: ${value}`);
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = (dogsJulia, dogsKate) => {
//   // 1.
//   const dogsJuliaCorrect = dogsJulia.slice();
//   dogsJuliaCorrect.splice(0, 1);
//   dogsJuliaCorrect.splice(-2);

//   // 2.
//   const dogs = dogsJuliaCorrect.concat(dogsKate);

//   // 3.
//   dogs.forEach(function (dog, i) {
//     if (dog < 3) console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     else
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//   });
// };

// checkDogs(dogsJulia, dogsKate);

///////////////////////////////////////
// The map Method
// gives a brand new array after it applies to each element the callback function

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
  // e.g return 23 -> it will return the array with 23 in each index
});

console.log(movements); // wasn't mutate at all
console.log(movementsUSD);

// instead of using map function but we're talking for a different philosophy
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// Challenge: Use the map function and an arrow callback function
const movementUSDNew = movements.map((move) => move * eurToUsd);

const movementsDesc = movements.map((mov, i) => {
  // if (mov > 0) {
  //   return `Movement ${i + 1}: You deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  // }
  `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
    mov
  )}`;
});

console.log(movementsDesc);

///////////////////////////////////////
// The filter Method

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const depositsFor = [];

// same as the above
// for (const mov of movements) {
//   if (mov > 0) {
//     depositsFor.push(mov);
//   }
// }
// console.log(depositsFor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

///////////////////////////////////////
// The reduce Method

console.log(movements);

// the first parameter is the accumulator
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0); // initialize the value of the acc to 0
console.log(balance);

// using the arrow function instead of function expression
// const balance = movements.reduce((acc, cur) => acc + cur, 0);

//--------------------------------------------------------
// differences between the 2 methods
// avoid the extra variable balance2 since it is already intiallized by the reduce method
let balance2 = 0;

for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

const calcAverageHumanAge = function (ages) {
  // 1.
  const agesHuman = ages.map(function (age) {
    if (age <= 2) return 2 * age;
    else return 16 + age * 4;
  });

  // 2.
  const agesAdult = agesHuman.filter((age) => age >= 18);

  // 3.
  const agesAverage = agesAdult.reduce(function (acc, age) {
    return acc + age;
  }, 0);

  console.log(agesAverage / agesAdult.length);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

///////////////////////////////////////
// The Magic of Chaining Methods

// PIPELINE
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr); //a good way to see what is going on on the array in case it does not display the results we want
    return mov * eurToUsd;
  })
  // .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

const calcAverageHumanAgeNew = (ages) =>
  ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, _, arr) => (acc + age) / arr.length, 0);

const avg1 = calcAverageHumanAgeNew([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAgeNew([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

///////////////////////////////////////
// The find Method
// retrieve an element of the array, returns the first element of the array that satisfies the condition
// find returns the element itself
// filter returns all the elements that satisfy the condition, plus returns a new array

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

// powerful when an array contains subjects very similar to each other
const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

///////////////////////////////////////
// some and every

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some((mov) => mov === -130)); // same as using the include method
// if there are any positive deposits
const anyDeposits = movements.some((mov) => mov > 0);

// EVERY
// if every of the elements in the array are true to the condition it is passed
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

// Seperate callback
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

///////////////////////////////////////
// flat and flatMap

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // create one array with all the elements

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // flat goes only one level deep, but we can define the depth value (default: 1) to change that

// const accountMovements = accounts.map((acc) => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// flat
// use chaining so it's the same thing as the above code
const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance);

// flatMap (has better perfomance)
const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance2);

///////////////////////////////////////
// Sorting Arrays (does sorting based on strings)

// Strings
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort()); // it mutates the original array

// Numbers
console.log(movements);

// return < 0, A, B
// return > 0, B, A
// keeps looping over the array until everything is in ascending order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// for descending order, it will be the other way around

// big improvement comparing to the above one
movements.sort((a, b) => a - b);
console.log(movements); // mutating the array

///////////////////////////////////////
// More Ways of Creating and Filling Arrays

const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
// whenever one argument is passed, it creates a new empty array with a length that's equal to that parameter
const x = new Array(7);
console.log(x);

// fill the array with 1's
x.fill(1);

// fill the spots from 3-5 with 1's
x.fill(1, 3, 5);

arr1.fill(23, 2, 6);
console.log(arr1); // it will mutate the original one

// Array.from
// converts an iterable to an array
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const movementsUI = Array.from(document.querySelectorAll(".movements__value"));
console.log(movementsUI);

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))
  );

  console.log(movementsUI);
});

///////////////////////////////////////
// Array Methods Practice

// 1.
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// Prefixed ++ oeprator
let a = 10;
console.log(a++); // returns the previous value
console.log(a);
console.log(++a); // this is the solution to the problem

// 3.
const { deposits1, withdrawals1 } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? "deposits1" : "withdrawals1"] += cur;
      return sums; // always need in the end to return the accumulator
    },
    { deposits1: 0, withdrawals1: 0 }
  );

console.log(deposits1, withdrawals1);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");

  return capitalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// console.log(dogs[1].weight);

// 1.
dogs.forEach(
  (dog) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

console.log(dogs);

// 2.
const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));

console.log(sarahDog);

// 3.
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

dogs.forEach((dog) => {
  if (dog.curFood > dog.recommendedFood) ownersEatTooMuch.push(dog.owners);
  else ownersEatTooLittle.push(dog.owners);
});

const ownersEatTooLittleFl = ownersEatTooLittle.flat();
const ownersEatTooMuchFl = ownersEatTooMuch.flat();

console.log(ownersEatTooLittleFl);
console.log(ownersEatTooMuchFl);

// 4.
console.log(ownersEatTooLittleFl.join(" and "));
console.log(ownersEatTooMuchFl.join(" and "));

// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// 6.
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter((dog) => checkEatingOkay(dog)));

// 8.
const dogsSorted = dogs
  .slice()
  .sort((prev, cur) => prev.recommendedFood - cur.recommendedFood);

console.log(dogsSorted);
