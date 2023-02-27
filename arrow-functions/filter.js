const movies = [
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    rate: 9.5
  },
  {
    title: 'The Godfather',
    year: 2007,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    rate: 6.5
  },
  {
    title: 'The Godfather: Part II',
    year: 2011,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    rate: 3.5
  }
];

const movieFilter = movies.filter((movie, index) => movie.year < 2009)
console.log(movieFilter) 


