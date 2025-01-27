/*
Challenge: Refactor the Library System Code.

You are working with a piece of code that handles
information about books in a library system. The
current code is functional but can be improved to
be more concise and efficient by using short-circuiting,
nullish coalescing, and Optional Chaining.

The existing code performs the following tasks:
- Pushes an object with title, author, year published,
  and availability to an array 'collection'
- Provides default values for missing information.
*/

const collection = [];

function addBookToCollection(title, author, yearPublished, libraryData) {
  // Explicitly check for title
  //   if (title === undefined || title === null || title === '') {
  //     title = 'Unknown Title';
  //   }
  title = title || 'Unknown Title';

  // Explicitly check for author
  //   if (author === undefined || author === null || author === '') {
  //     author = 'Unknown Author';
  //   }
  author = author || 'Unknown Author';

  // Explicitly check if yearPublished is undefined or null
  //   if (yearPublished === undefined || yearPublished === null) {
  //     yearPublished = 'Not Specified';
  //   }
  yearPublished = yearPublished ?? 'Not Specified';

  // Explicitly check for availability at main library
  //   if (libraryData) {
  //     if (libraryData.locations) {
  //       if (libraryData.locations.mainLibrary) {
  //         availability = 'Available';
  //       }
  //     }
  //   }
  availability = (libraryData?.locations?.mainLibrary && 'Available') || 'Not Available';

  // Push the book object to 'collection'
  collection.push({
    title: title,
    author: author,
    yearPublished: yearPublished,
    availability: availability,
  });
}
// Examples of adding a book
addBookToCollection('JavaScript: The Good Parts', 'Douglas Crockford', 2008, {
  locations: { mainLibrary: true },
});
addBookToCollection('', 'William Shakespeare', null, null);
addBookToCollection('House of Giants', 'Gemma Small', '', null, {
  locations: { mainLibrary: null },
});
console.log(collection); // House of Giants is not yet published!!
