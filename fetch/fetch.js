const url = 'https://pokeapi.co/api/v2/pokemon/'

// for a function consume an API, it must be asynchronous
// this allow use await inside of the function

// note: async, await always go together

// fetch: is a function native of javascript, the which agree how first parameter
// an URL and second the headers

// note: fetch able be used to GET, POST, PUT, DELETE, PATCH
// note: for default fetch always is a GET

const pokemonsContainer = document.querySelector('#pokemons')

async function getPokemons() {
  try {
    const response = await fetch(url)
    const data = await response.json()

    data.results.forEach(pokemon => {
      pokemonsContainer.innerHTML += `<li>${pokemon.name}</li>`
    })

  } catch(error) {
    console.log(error)
  }
}

getPokemons()