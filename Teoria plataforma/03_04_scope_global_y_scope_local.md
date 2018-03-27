# Scope global y scope local

El Scope define que puede usar un algoritmo dentro de nuestro programa y que no, todas las partes de nuestro programa no tienen acceso a las mismas variables.

## Scope global

Todas las variables o funciones que definamos dentro de nuestro archivo principal (index.js) o por fuera de cualquier función existen en el Scope global y son visibles para todos los elementos de nuestro programa.

- Ej: 

```js
var name = 'Juan'

function showMessage(){
  console.log(name)
}

showMessage() // Muestra en consola 'Juan'
```
> La función `showMessage` tiene acceso a la variable `name`, por que la misma fue definida dentro del Scope global de nuestro programa.

## Scope local

Todas las variables o funciones que definamos dentro de una función solo son accesibles dentro de la misma o de las funciones que contiene.

- Ej: 

```js
function showMessage(){
  var name = 'Juan'
  console.log(name)
}

showMessage() // Muestra en consola 'Juan'

console.log(name) // Muestra un error indicando que name no esta definida
```
> La función `showMessage` tiene acceso a la variable `name`, por que la misma fue definida dentro de su scope, pero por fuera de la misma la variable `name` no existe.

