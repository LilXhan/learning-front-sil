const numbers = [1, 1, 1, 1, 1, 1]

// every: true - false 

// the function every is used to evaluate that the condition is fulfilled in all the elements
// and = &&
const result = numbers.every(n => n === 1)
console.log(result) // true: all elements are 1

const numbers2 = [1, 1, 1, 2, 1]

// some: true - false
// the function some is used to evaluate that the condition is met at least one case
// or = ||
const result2 = numbers.some(n => n === 2)
console.log(result2) // true: numbers2 has a number 2
