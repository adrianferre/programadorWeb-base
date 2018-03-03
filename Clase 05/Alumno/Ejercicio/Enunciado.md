# Hacer un objeto que represente un usuario
​
- Deberá tener las propiedades id `id` (se deberá generar uno automáticamente cuando creo el usuario), nombre `firstName`, apellido `lastName`, edad `age`, dirección `address`.
- Deberá tener los métodos:
   - Mostrar nombre completo `fullName`, deberá mostrar en consola el nombre completo del usuario.
   - Es mayor de edad `isLegalAge` que deberá devolver `true` si tiene 18 años o más y `false` en caso contrario.
- Generar el objeto, pasando los argumentos necesarios y luego llamar a los métodos para ver como funcionan.

Ayuda: Existe una función que devuelve un número random que nos pede servir para hacer un id.

```js
var time = Math.random() // Esto devuelve un número del estilo 0.11296860298890499
```