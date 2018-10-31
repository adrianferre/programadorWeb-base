# Crear una función que permita buscar un alumno [Pieza del Workshop I]

- Debe recibir como parámetro un texto y un Array de alumnos y buscar dentro del Array por nombre o apellido, si lo encuentra deberá devolver la posición en el Array del alumno, en caso contrario `-1`. La función solo encuentra coincidencias exactas, por ejemplo encuentra `Fernandez`, pero no `Fer` o `fernandez`.
- Probar que funcione correctamente.

[Video ejemplo](https://www.useloom.com/share/3f040a320aa147509ae546ed7dee86b3)

**Datos de prueba:**

```js
var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]
```

**Documentación:**

- [prompt](https://developer.mozilla.org/es/docs/Web/API/Window/prompt)

- [console.log](https://developer.mozilla.org/es/docs/Web/API/Console/log)

- [for](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for)

- [length](https://www.w3schools.com/jsref/jsref_length_array.asp)