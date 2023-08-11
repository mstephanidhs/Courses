//makes it easier to write secure javascript code, it has to be the very first line of code in order to work (help us to avoid accidental errors by showing us specific messages/errors)
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; //without strict mode I wouldn't got an error and a new variable would be used, but with strict i get an error
if (hasDriversLicense) console.log("I can drive :D");

// const interface = 'Audio'; //this word is reserved
// const private = 534; //exactly as the above

function logger() {
    console.log('My name is Jonas');
}

logger(); //invoking/running/calling/executing the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); //capturing the return value to a variable
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

//----------------------------------------------------------------

//function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991); //parameter is the placeholder/variable in which the value will be stored but the argument is the actual number/string/value
console.log(age1);

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
} //an anonymous function since it doesn't have name

const age2 = calcAge2(1991);

console.log(age1, age2);

//----------------------------------------------------------------

//arrow function, can't use this keyword which is really important
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

//----------------------------------------------------------------

//functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor1(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor1(2, 3));

//----------------------------------------------------------------

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement1 = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement; //after it returns the value, it will immediately exit from the function
    } else {
        return -1;
    }

    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement1(1991, 'Jonas'));
console.log(yearsUntilRetirement1(1970, 'Mike'));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`The winner is Dolphins with score ${avgDolphins}!`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`The winner is Koalas with score ${avgKoalas}!`);
    } else {
        console.log('None of the teams won');
    }
}

checkWinner(avgDolphins, avgKoalas);

//----------------------------------------------------------------

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

//instead I make an array
const friends = ['Michael', 'Steven', 'Peter']; //literal syyntax
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); //arrays are zero-based (counting starts from 0)
console.log(friends[2]);

console.log(friends.length); //the amount of elements that are in the array (not zero-based)
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

//in each position expects an expression and not something specific
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

//Exercise
const calcAge4 = function (birthYear) {
    return 2037 - birthYear;
}

const years1 = [1990, 1967, 2002, 2010, 2018];

const age4 = calcAge4(years1[0]);
const age5 = calcAge4(years1[1]);
const age6 = calcAge4(years1[years1.length - 1]);
console.log(age4, age5, age6);

const ages = [calcAge4(years1[0]), calcAge4(years1[1]), calcAge4(years1[years1.length - 1])];
console.log(ages);

//array methods

const friends1 = ['Michael', 'Steven', 'Peter'];
const newLength = friends1.push('Jay'); //add element at the end of the array
console.log(friends1);
console.log(newLength);

friends1.unshift('John'); //add the element at the start of the array, returns the length of the array
console.log(friends1);

friends1.pop(); //delete last element of the array, returns the removed element
const popped = friends1.pop();
console.log(popped);
console.log(friends1);

friends1.shift(); //remove first item of the array, returns the removed item
console.log(friends1);

console.log(friends1.indexOf('Steven')); //retunrs the index of the requested element
console.log(friends1.indexOf('Bob')); //returns -1 if there isn't in the array

//returns true or false, depending on if the element is in the array
friends.push(23);
console.log(friends1.includes('Steven'));
console.log(friends1.includes('Bob'));
console.log(friends1.includes('23')); //it is testing with strict equality, if it was 23, it would return true

if (friends1.includes('Peter')) {
    console.log('You have a friend called Peter')
}

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀
*/

const bills = [125, 555, 44];
const tip = [];
const total = [];

const calcTip = (bills, tip, total) => {
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] >= 50 && bills[i] <= 300) {
            tip.push(bills[i] * 0.15);
        } else {
            tip.push(bills[i] * 0.2);
        }
        total.push(bills[i] + tip[i]);
        console.log(`The total bill (including the tip) is ${total[i]}!`);
    }
}

calcTip(bills, tip, total);

//-------------------------------------------------------------

//objects
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

//instead of the above we can use a so called object
const jonas1 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas1.lastName) //get the content of the specific property - lastname
console.log(jonas1['lastName']); //same as above

const nameKey = 'Name';
//the above won't work with the dot notation
console.log(jonas1['first' + nameKey]);
console.log(jonas1['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends?'); //gives job
// console.log(jonas1[interestedIn]); //so I can print the content of jonas1.job, can't use the dot notation

// if (jonas1[interestedIn]) { //means that the object jonas1 have the specific property and it's not empty
//     console.log(jonas1[interestedIn]);
// } else {
//     console.log("Wrong request!");
//     const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends?');
// }

jonas1.location = 'Portugal'; //insert new property to the object
jonas['twitter'] = '@jonasschmedtman'; //insert new property to the object
console.log(jonas1);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas1.firstName} has ${jonas1.friends.length} friends and his best friend is called ${jonas1.friends[0]}`);

//-------------------------------------------------------------

//object methods

const jonas2 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this); //this refers to the current object
    //     return 2037 - this.birthYear;
    // }

    //creates new property jonas2.age and stores the result
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's licence`;
    }
};

console.log(jonas2.calcAge());
// console.log(jonas2['calcAge'](1991));
console.log(jonas2.age);

/*
// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
*/

console.log(jonas2.getSummary());

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
*/

const person1 = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};

const person2 = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};

if (person1.calcBMI >= person2.calcBMI) {
    console.log(`${person1.fullName}'s BMI (${person1.calcBMI()}) is higher than ${person2.fullName}'s (${person2.calcBMI()})`);
} else {
    console.log(`${person2.fullName}'s BMI (${person2.calcBMI()}) is higher than ${person1.fullName}'s (${person1.calcBMI()})`);
}


