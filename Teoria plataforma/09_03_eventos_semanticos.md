# Eventos semánticos

Para suscribirse a un evento de forma semántica vamos a buscar nuestro elemento con alguno de los métodos de `document` y le vamos a asignar al atributo encargado de manejar el evento la función que queremos que ejecute.

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

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario hizo click''`.

Si queremos registrar más de un evento simplemente le vamos asignando nuevas funciones a los manejadores de eventos que correspondan.

```html
<input type="button" id="button" />
```

```js
var button = document.getElementById('button')

button.onclick = showMessage

function showMessage(){
  console.log('El usuario hizo click')
}

button.onmouseover = showMessageOver

function showMessageOver(){
  console.log('El usuario paso el mouse sobre el botón')
}
```

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario hizo click''` y al pasar el mouse por encima un mensaje que diga `'El usuario paso el mouse sobre el botón'`.

*En este caso el HTML se mantiene limpio porque solo es necesario el id en el HTML no importa cuantos manejadores de eventos le agreguemos al mismo elemento. Esto mantiene nuestro código más limpio y ordenado*
