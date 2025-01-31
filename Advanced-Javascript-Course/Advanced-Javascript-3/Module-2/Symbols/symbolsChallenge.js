/*
Challenge:
    1. Add a hidden property to the book object
       holding a librarian’s note to say the book
       has gone missing.
    2. Log out the new property.
*/

const book = {
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  year: 1951,
};

const librarianNote = Symbol();

book[librarianNote] = 'This title has gone missing';

console.log(book[librarianNote]);
