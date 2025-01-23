// Object Types Challenge
// Based on what we discussed we need to make up our Property Objects and array,
// can you create that array, making sure to assign the correct Types?
// tuple -> [type, type]

// Enum Types mini-challenge
// Replace the value of loyaltyUser to a GOLD_USER, SILVER_USER or BRONZE_USER, making sure to
// use what we learnt about Enums in the previous lesson. Make Sheia GOLD, Andrzej BRONZE
// and Omar SILVER.
// 2. export the enum
// 3. Fix the function in the utils to show Sheias star as she is a GOLD_USER.

// Union Types Challenge
// 1. Fix the function to show the price per night for each property card only
// if isLoggedIn is true, or the you object has Permissions. (all permissions should work)
// 2. See what happens when a null object to be passed to the you objects permissions.

// Literal Types
// 1. Based on what we have learnt about literal types with the price, can you make
// a Country literal type? You only have to include the countries we are dealing with in
// the project.
// 2. Can you create a file and store all your types aliases in there?

// Function Types challenge - Pass the code review
// 1. Add types to the function that returns the top 2 reviews specifically based on
// descending order. Make sure to use what you learned in the previous lessons.
// 2. Add types to the function in this file that shows the reviews when we click the button

// Classes
// As with other JavaScript language features, TypeScript adds type
// annotations and other syntax to allow you to express relationships
// between classes and other types.
// 1. Add a Class that will let us create a main image, it should allow us to
// store the reviews, the src and the title

// Wrapping up our Dashboard
// 1. Create All the other interfaces you think are needed for this board
// 2. Using the Class, visually show the main Image above the review button

import { showReviewTotal, populateUser, getTopTwoReviews } from './utils';
import { Permissions, LoyaltyUser } from './enums';
import { Review, Property } from './interfaces';
import MainProperty from './classes'; // because of export default

const propertyContainer: HTMLElement | null =
  document.querySelector('.properties');
const reviewContainer: HTMLElement | null = document.querySelector('.reviews');
const container: HTMLElement | null = document.querySelector('.container');
const button: HTMLElement | null = document.querySelector('button');
const footer: HTMLElement | null = document.querySelector('.footer');

let isLoggedIn: boolean;

// Reviews
const reviews: Review[] = [
  {
    name: 'Sheia',
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: '01-04-2021',
  },
  {
    name: 'Andrzej',
    stars: 3,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: '28-03-2021',
  },
  {
    name: 'Omar',
    stars: 4,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: '27-03-2021',
    description: 'Great hosts, location was a bit further than said',
  },
];

const you = {
  firstName: 'Bobby',
  lastName: 'Brown',
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
};

// Array of Properties
const properties: Property[] = [
  {
    image: 'images/colombia-property.jpg',
    title: 'Colombian Shack',
    price: 45,
    location: {
      firstLine: 'shack 37',
      city: 'Bogota',
      code: 45632,
      country: 'Colombia',
    },
    contact: [+112343823978921, 'marywinkle@gmail.com'],
    isAvailable: true,
  },
  {
    image: 'images/poland-property.jpg',
    title: 'Polish Cottage',
    price: 30,
    location: {
      firstLine: 'no 23',
      city: 'Gdansk',
      code: 343903,
      country: 'Poland',
    },
    contact: [+1298239028490830, 'garydavis@hotmail.com'],
    isAvailable: false,
  },
  {
    image: 'images/london-property.jpg',
    title: 'London Flat',
    price: 25,
    location: {
      firstLine: 'flat 15',
      city: 'London',
      code: 35433,
      country: 'United Kingdom',
    },
    contact: [+34829374892553, 'andyluger@aol.com'],
    isAvailable: true,
  },
];

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);

let authorityStatus: any;

isLoggedIn = true;

function showDetails(
  authorityStatus: boolean | Permissions,
  element: HTMLDivElement,
  price: number
) {
  if (authorityStatus) {
    const priceDisplay = document.createElement('div');
    priceDisplay.innerHTML = price.toString() + '/night';
    element.appendChild(priceDisplay);
  }
}

// Add the properties
for (let i = 0; i < properties.length; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = properties[i].title;

  const image = document.createElement('img');
  image.setAttribute('src', properties[i].image);
  card.appendChild(image);

  propertyContainer!.appendChild(card);

  showDetails(authorityStatus, card, properties[i].price);
}

//Broken code
let count = 0;
function addReviews(reviews: Review[]): void {
  if (!count) {
    count++;
    const topTwo = getTopTwoReviews(reviews);
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement('div');
      card.classList.add('review-card');
      card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
      reviewContainer!.appendChild(card);
    }
    container!.removeChild(button);
  }
}

button!.addEventListener('click', () => addReviews(reviews));

let currentLocation: [string, string, number] = ['London', '11.03', 17];
footer!.innerHTML =
  currentLocation[0] +
  ' ' +
  currentLocation[1] +
  ' ' +
  currentLocation[2] +
  '°';

// Classes
class Car {
  make: string;
  year: number;
  color: string;

  constructor(make: string, year: number, color: string) {
    this.make = make;
    this.year = year;
    this.color = color;
  }
}

let yourMainProperty = new MainProperty(
  'images/italian-property.jpg',
  'Italian House',
  [
    {
      name: 'Olive',
      stars: 5,
      loyaltyUser: LoyaltyUser.GOLD_USER,
      date: '12-04-2021',
    },
  ]
);

const mainImageContainer: HTMLElement | null =
  document.querySelector('.main-image');
const image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer!.appendChild(image);
