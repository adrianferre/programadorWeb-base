# Evento blur

El evento blur puede ser escuchado usando el manejador (on-event handler), asignando le una función a la propiedad `onblur` del nodo del DOM. Esta función se va a ejecutar cuando el usuario haga pierda el foco sobre ese elemento. Este suele ser un evento muy usado para validar formularios.

```html
<input type="text" id="input-text" />
```

```js
var inputText = document.getElementById('input-text')

inputText.onblur = showMessage

function showMessage(){
  console.log('El usuario perdió foco')
}
```

> En este código al perder el foco en el input se va a mostrar un mensaje en consola que diga `'El usuario perdió foco'`.

En todos los eventos se recibe un objeto `event` como primer parámetro que contiene propiedades que identifican que elemento fue disparó el evento de perdida de foco. En este caso nos va a servir para levantar el valor del input en el momento que se perdió el foco.

```html
<input type="text" id="input-text" />
```

```js
var inputText = document.getElementById('input-text')

inputText.onblur = showMessage

function showMessage(event){
  var inputNode =  event.target

  console.log('El usuario perdió foco y el input tiene el valor ' + inputNode.value)
}
```

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario perdió foco y el input tiene el valor <valor de input en ese momento>'`.