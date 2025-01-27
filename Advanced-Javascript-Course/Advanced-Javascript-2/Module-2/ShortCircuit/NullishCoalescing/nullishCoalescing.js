function fetchUserBalance() {
  // This is where we would make call to bank's database

  const userBalance = 10;
  return userBalance;
}

/*
Challenge:
    1. Figure what problem this code has and why it’s happening.
       Don’t try to fix anything yet.
    2. Swap the logical OR operator for a Nullish Coalescing operator.
    Ignore any red lines you see in the editor!
*/

const balance = fetchUserBalance();
const displayBalance = balance ?? 'currently not available';

console.log(`Your balance is ${displayBalance}.`);

// is going to return the right hand operand truthy value if the left-hand operand
// is specifically null or undefined
