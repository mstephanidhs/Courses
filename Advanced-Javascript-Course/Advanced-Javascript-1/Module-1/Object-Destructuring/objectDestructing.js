const favouriteFilm = {
  title: 'Top Gun',
  year: '1986',
  genre: 'action',
  star: 'Tom Cruise',
  director: 'Tony Scott',
};

// REMINDER: DRY rule violation
// const title = favouriteFilm.title;
// const year = favouriteFilm.year;
// const genre = favouriteFilm.genre;
// const star = favouriteFilm.star;
// const director = favouriteFilm.director;

const { title, year, genre, star, director } = favouriteFilm;

console.log(
  `My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}.`
);
