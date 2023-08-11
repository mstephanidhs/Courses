const day = 'saturday';

//becomes less and less used
switch (day) {
    case 'monday': //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break; //with the break, it stops executing, so without it it goes to the next line
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

//same with the switch expression
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

//statement doesn't produce anything, it's just like a full sentence
//expressions produce values

//------------------------------------------------------------

const age = 23;
//ternary operator
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? 'wine!' : 'water!';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine!';
} else {
    drink2 = 'water!';
}

console.log(drink2);

//template literals can have a ternary operator, it's not an if-else replacement, but only when we need to take a quick decision
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
TEST DATA: Test for bill values 275, 40 and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/

const billValue = 275;
const tip = billValue >= 50 && billValue <= 300 ? billValue * 15 / 100 : billValue * 20 / 100;

console.log(`The tip you have to pay is ${tip}`);

//backwards compatible -> old features are never removed, not really new versions just incremental updates in order for the websites to work forever (don't break the web)
//forwards compatible -> future versions doesn't work in the current browsers 

