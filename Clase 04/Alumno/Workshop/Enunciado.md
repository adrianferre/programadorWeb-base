# Workshop

Se deberán crear tres funciones que iremos combinando para lograr un programa complejo.

## Crear una función que calcule el promedio de un Array

- Debe recibir como parámetro un Array de números y devolver el calculo del promedio de todos los números. Recordar que el promedio es la suma de todos los números, divido la cantidad de notas del Array.

```js
var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]
```

## Crear una función que muestre en consola un alumno

- Debe recibir como parámetro un objeto alumno y mostrar en consola todos los datos, nombre, apellido, edad y promedio. Deberá usar la función anterior para calcular el promedio de cada uno y mostrarlo junto con el nombre. Ej: `1. Juan, Pérez, DNI:45678987, Promedio: 5`.

```js
var student = {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    examResults: [ 7, 5, 6, 4, 3, 2, 8 ]
  }
```

## Crear una función que permita buscar un alumno

- Debe recibir como parámetro un texto y buscarlo en un Array de alumnos por nombre o apellido, al encontrarlo usar la función anterior para mostrar todos los datos del estudiante, si no lo encuentra mostrar un mensaje en consola. La función solo encuentra coincidencias exactas, por ejemplo encuentra `Fernandez`, pero no `Fer` o `fernandez`.

```js
var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    examResults: [ 7, 5, 6, 4, 3, 2, 8 ]
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    examResults: [ 3, 4, 5, 6, 7, 3, 4, 5 ]
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    examResults: [ 3, 8, 7, 5, 6, 4, 5, 4, 3 ]
  },
  {
    firstName: 'Daniela',
    lastName: 'Hernandez',
    dni: 45678983,
    examResults: [ 10, 8, 9, 7, 8, 7, 10 ]
  }
]
```

[Video ejemplo](https://www.useloom.com/share/763f25bf87064831945eb815039d87a2)

**Documentación:**

- [prompt](https://developer.mozilla.org/es/docs/Web/API/Window/prompt)

- [console.log](https://developer.mozilla.org/es/docs/Web/API/Console/log)

- [for](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for)

- [length](https://www.w3schools.com/jsref/jsref_length_array.asp)