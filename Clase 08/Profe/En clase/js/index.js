// Traer elemento HTML a JS

// var rootContainer = document.getElementById('root')

// var option = prompt('Desea borrar el contenido')

// if (option === 'si') {
//   rootContainer.innerHTML = ''
// }

// Agregar un texto a mi HTML

// var rootContainer = document.getElementById('root')

// var text = prompt('Escriba el contenido')

// rootContainer.innerHTML = '<h1><strong>' + text + '</strong></h1>'

// var imageUrl =
//   'https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif'

// rootContainer.innerHTML = '<img src="' + imageUrl + '">'

// showProgres(0)

// function showProgres (i) {
//   setTimeout(function () {
//     var progress =
//       '<div class="progress"><div class="progress-bar" role="progressbar" style="width: ' +
//       i +
//       '%" aria-valuenow="' +
//       i +
//       '" aria-valuemin="0" aria-valuemax="100"></div></div>'
//     rootContainer.innerHTML = progress
//     if (i <= 100) {
//       showProgres(i + 5)
//     }
//   }, 500)
// }

// for (var i = 0; i <= 100; i++) {
//   setTimeout(function () {}, 500)
// }

// Como mostrar armar un nodoe y appendearlo

var rootContainer = document.getElementById('root')

// <ul class="list-group">
//   <li class="list-group-item">Cras justo odio</li>
//   <li class="list-group-item">Dapibus ac facilisis in</li>
//   <li class="list-group-item">Morbi leo risus</li>
//   <li class="list-group-item">Porta ac consectetur ac</li>
//   <li class="list-group-item">Vestibulum at eros</li>
// </ul>

var students = [
  {
    firstName: 'Laura',
    lastName: 'Lopez',
    dni: 45678987,
    address: {
      street: 'Cucha cucha',
      number: 1234
    },
    examResults: [ 7, 5, 6, 4, 3, 2, 8 ]
  },
  {
    firstName: 'Ines',
    lastName: 'Sotomayor',
    dni: 45678956,
    address: {
      street: 'La vía',
      number: 3737
    },
    examResults: [ 3, 8, 7, 5, 6, 4, 5, 4, 3 ]
  }
]

rootContainer.innerHTML = '<ul class="list-group" id="list"></ul>'

var listContainer = document.getElementById('list')

var student
var fullName

for (var i = 0; i < students.length; i++) {
  student = students[i]
  fullName = student.firstName + ' ' + student.lastName
  appendStudent(fullName)
}

function appendStudent (fullName) {
  var li = document.createElement('li')

  li.className = 'list-group-item'

  li.innerHTML = fullName

  li.id = fullName

  listContainer.appendChild(li)
}

// Eliminaer elemento del DOM

setTimeout(function () {
  var deletedLi = document.getElementById('Ines Sotomayor')

  listContainer.removeChild(deletedLi)
}, 3000)
