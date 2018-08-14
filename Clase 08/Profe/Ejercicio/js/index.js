// Datos iniciales
var texts = [ 'Ed', 'Edd', 'Eddy' ]

// Busco la lista vacía
var mainListNode = document.getElementById('mainList')

// Declaro la variable en la cual voy a ir guardando los nodos li
var liNode

// Recorro el array
for (var i = 0; i < texts.length; i++) {
  // Creo el nodo li
  liNode = document.createElement('li')

  // Le agrego su texto interno
  liNode.innerHTML = texts[i]

  // Le setteo la clase 'list-group-item'
  liNode.className = 'list-group-item'

  // Agrego el nodo al final de la lista
  mainListNode.appendChild(liNode)
}
