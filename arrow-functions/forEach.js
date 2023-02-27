// array functions

const students = ['Miguel', 'Renato', 'Maria', 'Marie', 'Flavio']

// forEach
/*
  to be able to use the following functions
  forEach does not return anything
  map
  filter
  find
  findIndex
  every
  some
  fill
  reduce
  reduceRight
  our variables must be a array
*/
// forEach using anonymous function 
students.forEach(function (student, index) {
  console.log(student, index);
});

// forEach using arrow function
students.forEach((student, index) => {
  console.log(student, index)
})

// students.forEach((student, index) => console.log(student, index))

