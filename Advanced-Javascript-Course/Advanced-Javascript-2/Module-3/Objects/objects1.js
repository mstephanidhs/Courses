const books = {
  b001: { title: 'To Kill a Mockingbird', price: 18.99, isAvailable: true },
  b002: { title: '1984', price: 15.99, isAvailable: false },
  b003: { title: 'The Great Gatsby', price: 12.49, isAvailable: true },
  b004: { title: 'Moby Dick', price: 22.5, isAvailable: false },
};

/*
Challenge:
  1. Use Object.keys to get an array of keys. 
     You can store it in a const 'bookKeys'. 
  2. Iterate over bookKeys twice.
     A) First log each individual key in the array.
     B) Then log only the book titles.
*/

const bookKeys = Object.keys(books);

// bookKeys.forEach((bookKey) => console.log(bookKey));
// bookKeys.forEach((bookKey) => console.log(books[bookKey].title));

/*
Challenge:
  1. Create an array of values using Object.values
  2. Iterate over it and log out each book price.
*/

const bookValues = Object.values(books);
bookValues.forEach((bookValue) => console.log(bookValue.price));
