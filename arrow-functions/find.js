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
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    rate: 6.5
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    rate: 3.5
  }
]

// find
// is used to search in an array, it only returns one object
// if no exists return undefined

const movie = movies.find(movie => movie.title === 'The Dark Knight')
console.log(movie) // movies[0]

// findIndex 
// -1: no exists
// < -1: exist

const movieIndex = movies.findIndex(movie => movie.title == 'The Dark Knight')
console.log(movieIndex) // 0


