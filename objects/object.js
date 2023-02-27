const movie = {
  title: 'The Dark Knight',
  year: 2008,
  director: 'Christopher Nolan',
  duration: '2h 32min',
  genre: ['Action', 'Crime', 'Drama', 'Thriller'],
  rate: 9.5
}
// access to properties
const keys = Object.keys(movie)
console.log(keys) // title, year, director, duration, genre, rate

// access to values
const values = Object.values(movie)
console.log(values) // ...

// function that convert object a array
const entries = Object.entries(movie)
console.log(entries) // [[key, value], ..., [key, value]]

entries.forEach(([key, value]) => {
  console.log(key, value)
})

// convert array to obj

const newObj = {}
for(let [key, value] of entries) {
  newObj[key] = value  
}

console.log(newObj)