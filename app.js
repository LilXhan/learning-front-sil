
let surname = 'Tucto'

// var messageTwo = 1

function saludar() {
  console.log('Surname:', surname)
  let message = 'hello, how are you'
  let messageTwo = 2
  // console.log(window.messageTwo) -> 1
  // console.log(messageTwo) -> 2
}

// cuando una variable se crea sin prefijo por defecto es var
a = 1 // var a = 1

saludar()


const edad = '20' // string 
console.log(Number(edad)) // number

const isActive = true || false 

let address // undefined
console.log('address', address)

console.log(typeof address) // type undefined

const exist = address || false
console.log(exist) // false

const isInactive = 0 || false // 0 -> true, 1 -> false
console.log(isInactive)

const particularCase = 0 ?? false 
console.log(particularCase) // 0

const secondCase = undefined ?? false 
console.log(secondCase) // false

const numbers = [1, 2, 3, 4, 5, 6]
console.log(typeof numbers) // object

const names = ['Juan', 'Pepe', 'Lucas']
console.log(typeof names) // object

const particular = numbers ?? false 
console.log(particular) // [1, 2, 3, 4, 5, 6]

const objects = {1:true, 2:'Flavio', 3:3.5, 4:4, 5:5}

const fullName = 'Linder Hassinger'
const user = {fullName}
console.log(user) // { fullName: 'Linder Hassinger' }


// condiciones
const age = 11
if (age > 18) {
  console.log('he is older')
} else {
  console.log('is minor')
}

if (age === 18) {
  console.log('has 18 years')
} else if (edad === 15) {
  console.log('has 15 years')
} else {
  // template string
  console.log(`has ${age} years`)
}

// Operador ternario

const message = edad > 18 ? 'He is older' : 'is minor'
console.log(message) // He is older 

const numbers2 = [1, 1, 1, 1, 1]
const condicion = numbers.every(n => n === 1)
const message2 = condicion ? 'all are one': 'some is different'
console.log(message2) // all are one

// Switch 

switch(edad) {
  case 1:
    console.log('has one')
    break;
  case 2:
    console.log('has two')
    break;
  case 3:
  case 4:
    console.log('has three or four')
  default:
    console.log('Null')
}

// Whiles

let i = 0
while (i < 5) {
  console.log('i ->', i)
  i++
}

// Functions 

function greet(name) {
  return `Hi ${name} how are you`
}

greet('Juan')

// anonymous function
const greet2 = function (name) {
  return `Hi ${name} how are you`
}

greet2('Pepe')

// arrow function, cannot use this

const greet3 = (name) => {
  return `Hi ${name} how are you`
}

greet3('Flavio')

// arrow function in line

const greet4 = (name) => `Hi ${name} how are you`
greet4('Dangel')

console.log(typeof greet4) // function


// Exercise 

const unordered = [2, 3, 4, 1, 10, 9, 8, 7]

const ordered = unordered.sort() // sorted by first number: [1, 10, 2, 3, 4, 7, 8, 9]
console.log(ordered)

const ordered2 = unordered.sort((a, b) => a - b) // sorted by numbers: [1, 2, 3, 4, 7, 8, 9, 10]
console.log(ordered2)