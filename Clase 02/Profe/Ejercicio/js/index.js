var dayOfTheWeek = prompt('Ingrese día de la semana', 'Lunes')

switch (dayOfTheWeek) {
  case 'Lunes':
  case 'Martes':
  case 'Miércoles':
  case 'Jueves':
  case 'Viernes':
    console.log('Es un día habíl')
    break
  case 'Sábado':
  case 'Domingo':
    console.log('Es día de fin de semana')
    break
  default:
    console.log('Ingresaste cualquier cosa!')
    break
}

// console.log(5 / 0)
