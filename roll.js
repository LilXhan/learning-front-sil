
let obj = document.querySelector('#exit')
let luck = parseInt(Math.random() * 6)

let dice = luck + 1

if (dice > 3) {
  obj.innerHTML = `You has won! number ${dice} has come out`
} else {
  obj.innerHTML = `You has lose! number ${dice} has come out`
}

function condition() {
  let condition = document.querySelector('#continue').value

  if (condition === 'yes'.toLowerCase()) {
    
  } else {
    let thanks = document.querySelector('#thanks')
    thanks.innerHTML += 'Thanks for playing'
  }
}





