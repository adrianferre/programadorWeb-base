/**
 * getLocalList es una función que devuelve un Array guardado en el 
 * localStorage en formato JavaScript
 * @param {string} key 
 * @returns {Array}
 */
function getLocalList (key) {
  // Valido que reciba un string
  if (typeof key === 'string') {
    // Trato de recuperar la lista del localStorage
    var localList = localStorage.getItem(key)
    if (localList) {
      // Si la lista existía la tranformo en JavaScript y la devuelvo
      var parsedList = JSON.parse(localList)
      return parsedList
    } else {
      // Sino existía devuelvo un array vacío
      return []
    }
  }
}

// Pruebo la función
var studentsList = getLocalList('studentsList')

if (studentsList) {
  // Muestro el resultado de la función
  console.log(studentsList)
  if (studentsList.length) {
    console.log('Tiene guardados ' + studentsList.length + ' estudiantes')
  } else {
    console.log('La lista esta vacía')
  }
} else {
  console.log('Le pase una key incorrecta')
}
