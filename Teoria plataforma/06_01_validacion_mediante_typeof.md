# typeof

Al aplicar el operador `typeof` sobre una variable este nos devuelve un `string` que indica el tipo de valor contenido en la misma, siguiendo la siguiente tabla:


| Tipo           | Resultado      |
|:--------------:|:--------------:|
| `Undefined`    | ``undefined`   |
| `Null`         | `'object'`     |
| `Boolean`      | `'boolean'`    |
| `Number`       | `'number'`     |
| `String`       | `'string'`     |
| `Function`     | `'function'`   |
| `Object`       | `'object'`     |

Como vemos en la siguiente tabla no todos los tipos de valores están contemplados, como es el caso de los Array. Pero para validar que un elemento sea tipo `string` o `number` nos sirve y nos permite poder usar los métodos correspondientes a esos tipos de variables.

```js
var firstName = 'Ana'

typeof firstName === 'string' // Devuelve true

var number = 2

typeof number === 'string' // Devuelve false
```

> Al validar mediante el `typeof` la variable `firstName` y luego usar el estrictamente igual puedo verificar que el tipo de valor que contiene es string, en el caso de `number` valido lo contrario. Esto me permite identificar que métodos y propiedades podre usar en cada caso.


