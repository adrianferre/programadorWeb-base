// Datos iniciales de prueba
var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]

// Creo mi función que recibe como parámetro un Array de números
function calcProm (examResults) {
  // Creo una variable para almacenar la nota y otra para la acumulación de la suma de las notas
  var value
  var prom = 0

  // Recorro el Array de notas y en cada iteración sumo la nota en el acumulador
  for (var i = 0; i < examResults.length; i++) {
    value = examResults[i]
    prom = prom + value
  }

  // Divido el total de la suma de todas la notas por el largo del Array (Cantidad de notas)
  prom = prom / examResults.length

  // Devuelvo el resultado del promedio
  return prom
}

// Uso mi función y guardo el resultado en una variable
var result = calcProm(examResults)

// Muestro el resultado en consola
console.log('El promedio es: ' + result)
