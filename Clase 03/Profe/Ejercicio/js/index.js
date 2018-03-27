// Ejercicio 1

// function showMessage () {
//   var firstName
//   var lastName

//   firstName = prompt('Ingresa tu nombre')
//   lastName = prompt('Ingresa tu apellido')

//   console.log('Hola ' + firstName + ' ' + lastName)
// }

// showMessage()

// Ejercicio 2

function dayOfTheWeekMessage (dayOfTheWeek) {
  switch (dayOfTheWeek) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
      console.log('El ' + dayOfTheWeek + ' es día de semana')
      break
    case 'Sábado':
    case 'Sabado':
    case 'Domingo':
      console.log('El ' + dayOfTheWeek + ' es fin de semana')
      break
    default:
      console.log(dayOfTheWeek + ' es un valor invalido')
      break
  }
}

var day1
day1 = prompt('Ingrese un día')
dayOfTheWeekMessage(day1)

var day2
day2 = prompt('Ingrese un día')
dayOfTheWeekMessage(day2)

var day3
day3 = prompt('Ingrese un día')
dayOfTheWeekMessage(day3)
