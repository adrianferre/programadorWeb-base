
# Operadores lógicos

Los operadores lógicos nos permiten evaluar dos elementos que arrojen resultados booleanos o puedan evaluarse como tales y devolver un resultado que también puede ser evaluado como un booleano. En el caso del NOT la operación la hace solo con un elemento.


## NOT

El operador de negación evalúa una sentencia de un solo termino, si la evaluación es verdadera devuelve `false` y si la evaluación es falsa devuelve `true`.
En JavaScript hay una lista de valores son falsos, todos los que no están en esta lista son verdaderos.

### Lista de falsos - falsy list

- El string vacío `''`
- El número cero `0` o menos cero `-0`
- El símbolo `NaN`
- El nulo `null` o indefinido `undefined`
- El falso `false`


```js
!false // Devuelve true

!null // Devuelve true

!!'' // Devuelve false, porque niega el '' convirtiéndolo en true y luego lo vuelve a negar a false

!'Hola' // Devuelve false

!('Hola' === 'Hola')// Devuelve false, porque el estrictamente igual devuelve true y luego la negación lo convierte en false
```

## AND

El operador AND se declara utilizando dos veces el símbolo ampersand `&&` y compara dos expresiones que puedan ser evaluadas como `true` o `false`. El valor que retorna es de uno de los dos términos, según la siguiente tabla:


| Expresión 1   | Expresión 2   | Resultado   -> Booleano  |
| :-----------: |:-------------:| :----------------------- |
| `true`        | `true`        | Expresión 2 -> `true`    |
| `true`        | `false`       | Expresión 2 -> `false`   |
| `false`       | `true`        | Expresión 1 -> `false`   |
| `false`       | `false`       | Expresión 1 -> `false`   |


```js
'Juan' && 'Pedro' // Devuelve 'Pedro', que se puede evaluar como true

'Juan' && 0 // Devuelve 0, que se puede evaluar como false

'' && true // Devuelve '', que se puede evaluar como false

7 > 9 && false // Devuelve 7 > 9, que puede evaluarse como false
```


## OR

El operador OR se declara utilizando dos veces el símbolo barra vertical `||` y compara dos expresiones que puedan ser evaluadas como `true` o `false`. El valor que retorna es de uno de los dos términos, según la siguiente tabla:


| Expresión 1   | Expresión 2   | Resultado   -> Booleano  |
| :-----------: |:-------------:| :----------------------- |
| `true`        | `true`        | Expresión 1 -> `true`    |
| `true`        | `false`       | Expresión 1 -> `true`    |
| `false`       | `true`        | Expresión 2 -> `true`    |
| `false`       | `false`       | Expresión 2 -> `false`   |


```js
'Juan' || 'Pedro' // Devuelve 'Juan', que se puede evaluar como true

'Juan' || 0 // Devuelve 'Juan', que se puede evaluar como true

'' && true // Devuelve true, que es true

7 > 9 && false // Devuelve false, que es false
```