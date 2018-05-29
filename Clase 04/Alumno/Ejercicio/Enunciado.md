# Workshop I

## Crear una función que permita buscar un alumno

- Debe recibir como parámetro un texto y un Array de alumnos y buscar dentro del Array por nombre o apellido, si lo encuentra deberá devolver la posición en el Array del alumno, en caso contrario `-1`. La función solo encuentra coincidencias exactas, por ejemplo encuentra `Fernandez`, pero no `Fer` o `fernandez`.

[Video ejemplo](https://www.useloom.com/share/3f040a320aa147509ae546ed7dee86b3)

**Datos de prueba:**

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

**Documentación:**

- [prompt](https://developer.mozilla.org/es/docs/Web/API/Window/prompt)

- [console.log](https://developer.mozilla.org/es/docs/Web/API/Console/log)

- [for](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for)

- [length](https://www.w3schools.com/jsref/jsref_length_array.asp)