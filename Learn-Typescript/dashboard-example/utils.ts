import { LoyaltyUser } from './enums';
import { Review } from './interfaces';

const reviewTotalDisplay = document.querySelector(
  '#reviews'
) as HTMLInputElement;
const returningUserDisplay = document.querySelector(
  '#returning-user'
) as HTMLInputElement;
const userNameDisplay = document.querySelector('#user') as HTMLInputElement;

export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: LoyaltyUser
): void {
  const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? '⭐' : '';
  reviewTotalDisplay.innerHTML =
    value.toString() +
    'Review' +
    makeMultiple(value) +
    '| last reviewed by ' +
    reviewer +
    ' ' +
    iconDisplay;
}

export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning == true) {
    returningUserDisplay.innerHTML = 'back';
  }
  userNameDisplay.innerHTML = userName;
}

// function add(firstValue: number | string, secondValue: number | string) {
//   let result;
//   if (typeof firstValue === 'number' && typeof secondValue === 'number') {
//     result = firstValue + secondValue;
//   }
//   if (typeof firstValue === 'string' && typeof secondValue === 'string') {
//     result = firstValue + ' ' + secondValue;
//   }
//   if (typeof firstValue === 'number' && typeof secondValue === 'string') {
//     console.log('cannot perform this addition');
//   }
//   if (typeof firstValue === 'string' && typeof secondValue === 'number') {
//     console.log('cannot perform this addition');
//   }
// }

function add(firstValue: number, secondValue: number): number {
  return firstValue + secondValue;
}

export function makeMultiple(value: number): string {
  if (value > 1 || value === 0) return 's';
  else return '';
}

// Broken code
export function getTopTwoReviews(reviews: Review[]): Review[] {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0, 2);
}
