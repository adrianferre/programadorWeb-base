# Propiedades de un objeto

Las propiedades de los objetos son todas aquellas variables que recibe o están definidas dentro de la función constructora. Estas propiedades pueden ser publicas o privadas dependiendo de como fueron definidas.

## Propiedades privadas

Las propiedades privadas son aquellas variables que la función constructora tiene y usa dentro de su definición, pero que no pueden ser modificadas ni leídas desde fuera del scope de la función.

```js
function User(name) {
  var modified = false

  console.log('Hola mi nombre es ', name)
}

var user = new User('Mónica') // Muestra en consola 'Hola mi nombre es  Mónica', porque ejecuta el console.log definido dentro de la función constructora.

console.log(user.modified) // Muestra en consola undefined

console.log(user.name) // Muestra en consola undefined

user.name = 'Pato'
```

> La función constructora `User` recibe como argumento una variable `name` y cuando es instanciada mediante la palabra `new` crea un nuevo objeto usuario que es asignado a la variable `user`. Este objeto tiene las propiedades privadas `name`, que fue recibida como parámetro y `modified` que es declarada dentro de la función. Al tratar de mostrar en consola el valor de `modified`, vemos que nos devuelve `undefined` porque solo es visible dentro del scope de la función, lo mismo sucede al querer mostrar en consola el valor de `name`. Cuando hacemos `user.name = 'Pato'` lo que estamos haciendo es definir una propiedad publica `name` para `user` y asginandole el valor `Pato`, pero la variable `name` que usa dentro de la función sigue guardando el valor `Mónica`.

## Propiedades publicas

Las propiedades publicas son aquellas que se pueden tanto leer como modificar por fuera del scope de la función constructora. Para poder declarar estas variables dentro de la función constructora tenemos que usar la palabra reservada `this`, seguido de `.` y el nombre de la propiedad que queremos hacer publica.

```js
function User(name) {
  this.firstName = name

  this.age = 45
}

var user = new User('Mónica')

console.log(user.name) // Muestra en consola undefined

console.log(user.firstName) // Muestra en consola el string 'Mónica'

console.log(user.age) // Muestra en consola el number 45

user.firstName = 'Pato'

console.log(user.firstName) // Muestra en consola el string 'Pato'
```

> La función constructora `User` recibe como argumento una variable `name` y cuando es instanciada mediante la palabra `new` crea un nuevo objeto usuario que es asignado a la variable `user`. Este objeto tiene las propiedades publicas `firstName`, que se inicializa con el valor recibido en la variable `name` y `age` que es declarada dentro de la función. Al tratar de mostrar en consola el valor de `name`, vemos que nos devuelve `undefined` porque solo es visible dentro del scope de la función, pero cuando mostramos `firstName` o `age` nos muestra el valor porque son propiedades publicas. Esto también nos permite modificar el valor de `firstName` y asignarle el nuevo valor `Pato`, para luego mostrarlo en consola.

[Más info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)