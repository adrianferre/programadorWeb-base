# Crear una función constructora de objetos Student

- Crear una función que permita crear un objeto Student mediante el constructor `new`, el objeto deberá tener las siguientes propiedades:
   - Publicas:
      - `firstName`
      - `lastName`
      - `dni`
      - `email`
    - Privadas:
      - `id` generada automáticamente al crear el objeto.
- El objeto deberá tener las siguientes métodos:
   - Públicos:
     - `getId` deberá devolver el `id` del objeto
     - `getFullName` deberá devolver un String con el nombre completo del objeto, salvando los casos donde el `firstName` o`lastName` sea `undefined`.
- Crear tres alumnos usando los datos de prueba y probar sus métodos.

**Datos de prueba:**

```js
var students = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]
```

> Existe una función que devuelve un número random que nos puede servir para hacer un id único.

```js
var randomNumber = Math.random() // Esto devuelve un número del estilo 0.11296860298890499
```

**Documentación:**

[Math random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

[new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
