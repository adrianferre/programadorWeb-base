# Crea una función que permita buscar un nombre en un array de alumnos

- La función no debe distinguir mayúsculas de minúsculas.
- Tiene que poder encontrar coincidencias parciales.
- Debe encontrar coincidencias en `firstName` o `lastName`.
- En caso de encontrarlo devolver la posición del alumno en el array.

# Crear una función que permita agregar un alumno a un array

- Debe recibir como parámetros `firstName` y `lastName`.
- Debe validar que los datos ingresados sean de tipo string no nulo, en caso contrario pedir de nuevo el que corresponda.
- La función tiene que guardar un objeto alumno de la forma `{ firstName: 'Adrián', lastName: 'Ferré' }`.

# Crear una función que permita gestionar un array de alumnos

- Las opciones pueden ser buscar, agregar o eliminar y tienen que pedir los datos que correspondan y usar las funciones que sean necesarias del ejercicio anterior.

```js
var objectList = [
  { firstName: 'Adrián', lastName: 'Ferré' },
  { firstName: 'Mateo', lastName: 'Molina' },
  { firstName: 'Maria', lastName: 'Fernandez' }
]
```