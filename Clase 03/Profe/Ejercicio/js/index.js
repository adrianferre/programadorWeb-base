// Array inicial con los días de la semana
var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

// Creo una variable para guardar el mensaje según el caso elegido por el usuario
var message

// Uso un ciclo for para recorrer el Array y evaluar cada día de la semana
for (var i = 0; i < daysOfTheWeek.length; i++) {
  var day = daysOfTheWeek[i]

  // Comparo cada día del Array con todos los casos posibles
  switch (day) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Jueves':
    case 'Viernes':
      message = 'Es un día habíl'
      break
    case 'Sábado':
    case 'Domingo':
      message = 'Es día de fin de semana'
      break
    default:
      message = 'Ingresaste cualquier cosa!'
      break
  }
}

// Muestro en consola el mensaje según el caso con el que coincidió
console.log(message)
