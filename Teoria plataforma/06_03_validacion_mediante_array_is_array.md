# Array.isArray()

El objeto Array tiene un método llamado `.isArray()` que nos permite evaluar si un valor es Array o no, el método devuelve `true` en caso correcto y `false` si el valor no es un Array. Esto nos va a permitir validar un valor para luego usar los métodos o propiedades de Array sin riesgo de errores.


```js
var numbers = [1, 2, 3]

Array.isArray(numbers) // Devuelve como resultado true

var obj = {}

Array.isArray(obj) // Devuelve como resultado false
```

> Al aplicar el método `.isArray()` puedo comprobar que la variable `numbers` contiene un Array, pero que la variable `obj` no. Esto me permite identificar que métodos y propiedades podre usar en cada caso.


