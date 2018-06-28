# Evento click

El evento click puede ser escuchado usando el manejador (on-event handler), asignando le una función a la propiedad `onclick` del nodo del DOM. Esta función se va a ejecutar cuando el usuario haga click sobre ese elemento. Este evento suele ser muy usado sobre botones para permitirle al usuario tomar acciones.

```html
<input type="button" id="button" />
```

```js
var button = document.getElementById('button')

button.onclick = showMessage

function showMessage(){
  console.log('El usuario hizo click')
}
```

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario hizo click'`.

En todos los eventos se recibe un objeto `event` como primer parámetro que contiene propiedades que identifican que elemento fue el que recibió el click del usuario.

```html
<input type="button" id="button" />
```

```js
var button = document.getElementById('button')

button.onclick = showMessage

function showMessage(event){
  var inputNode =  event.target
  
  console.log('El usuario hizo click en el elmento con id ' + inputNode.id)
}
```

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario hizo click en el elmento con id button'`.