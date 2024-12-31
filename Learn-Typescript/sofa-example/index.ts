// Number Types mini-challenge
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.

// String Types mini-challenge
// Write a function that will display the most recent reviewers name next to the review total,
// making sure to assign a type to the parameter, to prevent unwanted behaviour.

// Boolean Types mini-challenge
// if the last reviewer is a loyalty User, can you add a star to the end of their name?
// please do so in the existing function, and make sure to declare what type of
// parameters the function takes.

// Fixing the Website
// Can you fix my code to show 'Welcome back Bobby' in the Nav Bar for
// our couch surfing website? Do this by assigning types to the parameters
// we pass to our populateUser function, so that we can be aware of
// errors in our user objects in the future.

// Type Assignment and Type Interference
// add a isOpen variable and assign it the boolean type

// Array Types mini-challenge
// Can you assign the correct Type to the reviews const? Please bear in mind everything
// we have learnt about String, Boolean, Number, Object and Array Types for this.

const returningUserDisplay = document.querySelector(
  '#returning-user'
) as HTMLInputElement;
const userNameDisplay = document.querySelector('#user') as HTMLInputElement;
const reviewTotalDisplay = document.querySelector(
  '#reviews'
) as HTMLInputElement;

let isOpen: boolean;

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}[] = [
  {
    name: 'Sheia',
    stars: 5,
    loyaltyUser: true,
    date: '01-04-2021',
  },
  {
    name: 'Andrzej',
    stars: 3,
    loyaltyUser: false,
    date: '28-03-2021',
  },
  {
    name: 'Omar',
    stars: 4,
    loyaltyUser: true,
    date: '27-03-2021',
  },
];

// solution
function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
  const iconDisplay = isLoyalty ? '⭐' : '';
  reviewTotalDisplay.innerHTML =
    'review total ' +
    value.toString() +
    '| last reviewed by ' +
    reviewer +
    ' ' +
    iconDisplay;
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

const you: {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  age: number;
  stayedAt: string[];
} = {
  firstName: 'Bobby',
  lastName: 'Brown',
  isReturning: true,
  age: 35,
  stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
};

function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = 'back';
  }
  userNameDisplay.innerHTML = userName;
}

populateUser(you.isReturning, you.firstName);
