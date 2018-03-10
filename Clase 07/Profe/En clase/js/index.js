// Agregar al localStorage

// localStorage.setItem('firstName', 'Pato')

// localStorage.setItem('lastName', 'Donald')

// localStorage.setItem('age', 46)

// var obj = {
//   firstName: 'Pato',
//   height: 181
// }

// var stringfiedObj = JSON.stringify(obj)

// localStorage.setItem('obj', stringfiedObj)

// Sacar info del localStorage

// console.log(typeof localStorage.getItem('age') === 'string')

// var savedObj = localStorage.getItem('obj')

// var parsedObj = JSON.parse(savedObj)

// console.log(parsedObj.firstName)

// parsedObj.firstName = 'Ana'

// console.log(parsedObj.firstName)

// Guardar cambio en el localStorage

// var savedObj = localStorage.getItem('obj')

// var parsedObj = JSON.parse(savedObj)

// parsedObj.firstName = 'Ana'

// var stringfiedObj = JSON.stringify(parsedObj)

// localStorage.setItem('obj', stringfiedObj)

// Borrar un item de localStorage

// localStorage.removeItem('lastName')

// Borrar todo el localStorage

// localStorage.clear()

// sesionStorage

// localStorage.setItem('name', 'Pato')

// sessionStorage.setItem('name', 'Pato')

// var movies = [
//   'Alien',
//   'Matrix',
//   'Titanic',
//   'Terminator',
//   'Los bañeros locos',
//   'La naranja mécanica',
//   'The warrios'
// ]

// var stringMovies = JSON.stringify(movies)

// localStorage.setItem('movies', stringMovies)

// Mostrar lo del localStorage

var localMovies = localStorage.getItem('movies')

var parsedMovies

if (JSON.parse(localMovies)) {
  parsedMovies = JSON.parse(localMovies)
} else {
  parsedMovies = []
}

// console.log(parsedMovies[2])
if (parsedMovies && Array.isArray(parsedMovies)) {
  console.log(parsedMovies.length)
  // if (localMovies !== null || localMovies !== undefined) {
  for (var i = 0; i < parsedMovies.length; i++) {
    console.log(parsedMovies[i])
  }
}
