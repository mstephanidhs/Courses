/* 
Challenge: 
    1. Write a function that simulates a simple bank account. 
       The function should store the balance and enable users  
       to deposit money, withdraw money, and check the balance.

Requirements:

- The account balance should start at zero.

- The function should return an object containing 
  3 functions. One for depositing money, one for 
  withdrawing money, and a getBalance function which 
  logs the balance and the account holder's name.

- Deposits should add to the balance, and withdrawals should subtract 
  from it. 
*/

function createBankAccount(name) {
  let balance = 0;

  return {
    getBalance: function () {
      console.log(`${name} has £${balance} in their account`);
    },
    deposi: function (amount) {
      balance += amount;
    },
    withdraw: function (amount) {
      balance -= amount;
    },
  };
}

const daveAccount = createBankAccount('dave');
const wendyAccount = createBankAccount('wendy');

daveAccount.deposit(100);
daveAccount.withdraw(50);
wendyAccount.deposit(200);
wendyAccount.withdraw(60);
daveAccount.getBalance();
wendyAccount.getBalance();
