/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK */

//TEST DATA 1, likewise for TEST DATA 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

// -----------------------------------------------------

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

//template literals using ``. good for multiline strings also
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular string...`);

console.log('String with \n\
multiple  \n\
lines');
//using `` and enter in order to change line
console.log(`String
multiple
lines`);

// -----------------------------------------------------

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license ');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young! Wait another ${yearsLeft} years!`);
}

const birthYearNew = 1991;
// every variable declared inside a code-block using let keyword, won't be accessible outside of it
if (birthYearNew <= 2000) {
    let century = 20;
} else {
    let century = 21;
}

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 😉
GOOD LUCK
*/

if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher that John's!");
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
    console.log("John's BMI is higher than Mark's!");
}

// ------------------------------------------------------------


// convert only to number, string, boolean
const inputYear = '1991';
console.log(Number(inputYear)); //convert string to number
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); //it will return NaN (not a number)
console.log(typeof NaN);

console.log(String(23), 23); // number to string

//type coercion (+ operator converts a number to a string)
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); //minus operator triggers the oposite (converts string to number)

// ------------------------------------------------------------

// 5 falsy values: 0, '', undefined, null, NaN
// values that are not false but if we attempt to convert them in boolean, false will be returned. All the other values will return true

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
//it tries to convert it into boolean 
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined!");
} else {
    console.log("Height is UNDEFINED");
}

// ------------------------------------------------------------

// equality operators
let ageNew = '18';
if (ageNew === 18) console.log("You just became an adult"); // === -> strict equality operator, doesn't perform type coersion, in comparison to ==
if (ageNew == 18) console.log('Everything is fine');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite); //it's a string

if (favourite === 23) { //'23' == 23, in contrary to ===
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?"); //!== -> strict version, != -> loose version

// ------------------------------------------------------------

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive');
} else {
    console.log("Someone else should drive...");
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log("Someone else should drive...");
}

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/

dolphinsAverageScore = (96 + 108 + 89) / 3;
koalasAverageScore = (88 + 91 + 110) / 3;

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log("The Dolphins Gymnastics Team won");
} else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100) {
    console.log("The Koalas Gymnastics Team won");
} else if (dolphinsAverageScore === koalasAverageScore && koalasAverageScore >= 100) {
    console.log("There was a draw");
} else {
    console.log("Neither of the 2 teams won!");
}