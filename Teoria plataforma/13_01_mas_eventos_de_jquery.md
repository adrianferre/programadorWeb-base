# Más eventos de jQuery

## Document ready

El método `$(document).ready()` nos va a permitir ejecutar una función solo cuando está cargado todo el contenido de nuestra página, de esta manera evitamos que se ejecute un JavaScript que busque algún elemento que no este cargado. Siempre que trabajamos con jQuery vamos a escribir el código que inicia nuestra aplicación dentro de este método.

```js
$(document).ready(function () {
  console.log('Init App')
  // Espacio para escribir el código de nuestra aplicación
})
```

> En este caso el `console.log` se va a ejecutar solo cuando se haya cargado todo el contenido de nuestra página, no importa si el JavaScript se importó al principio del body en el HTML o al final.

## On

El método `.on()` nos va a permitir ejecutar una función cuando se dispare el evento que le pasamos como parámetro. Esto nos permite suscribirnos a cualquier evento que no este implementado en jQuery como método particular.

```js
$('#button').on('click', handleButtonClick)
```

> Cuando se haga un click sobre el botón de Id `button` se va a llamar a la función `handleButtonClick`.

## One

El método `.one()` nos va a permitir ejecutar una función cuando se dispare el evento que le pasamos como parámetro, pero solo la primera vez. Esto nos permite suscribirnos a cualquier evento y que asegurarnos que se ejecute solo la primera vez que se dispara.

```js
$('#button').on('click', handleButtonClick)
```

> Cuando se haga un click sobre el botón de Id `button` se va a llamar a la función `handleButtonClick`, pero si se presiona por segunda vez no va a pasar nada.

## Keydown

El método `.keydown()` nos va a permitir ejecutar una función cuando el usuario presione una tecla. Dentro de la función usando la propiedad which del evento vamos a poder diferenciar que tecla fue la que se presionó.

```js
$(document).keydown(handleKeyDown)

function handleKeyDown(event){
  if(event.which === 32){
    console.log('Se presionó la barra espaciadora')
  }
}
```

> Cuando se presione la barra espaciadora en cualquier parte del documento se va a mostrar en consola el mensaje `Se presionó la barra espaciadora`.