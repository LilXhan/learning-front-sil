const students = ['Miguel', 'Renato', 'Maria', 'Marie', 'Flavio']

const iteration = students.map(function(student, index) {
  return `${index + 1}) ${student}`
})
console.log(students)
console.log(iteration)

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

// my version
const change = movies.map(obj => {
  const objMap = {}
  for(let [key, value] of Object.entries(obj)) {
    objMap[key] = value
    if (key == 'rate') {
     objMap[key] = value > 9 ? 'Excelent' : value > 5 ? 'Good' : 'Bad'
    }
  }
  return objMap
})

console.log(change)
console.log(movies)


