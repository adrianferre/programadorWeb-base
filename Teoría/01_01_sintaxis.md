# Sintaxis

En JavaScript como en otros lenguajes de programación existe una sintaxis que es la forma para darle ordenes o instrucciones a la computadora. La sintaxis tiene palabras reservadas que vamos a ver en el siguiente tema, pero también un orden. Siempre los programas se leen de arriba hacia abajo y para poder usar un valor tiene que estar declarada antes y asignado.

Un ejemplo de sintaxis en JavaScript es:

```js
var firstName

firstName = 'Juan'

console.log('Hola ' + firstName) // Resultado
```

> En este ejemplo le pedimos a la computadora varias cosas:
> 1. Crear una variable llamada `firstName` sin ningún valor asignado, esto lo hacemos escribiendo `var` espacio el nombre de la variable.
> 2. Asignarle a la variable `firstName` el string `Juan`, esto se hace poniendo el nombre de la variable igual al valor que le queremos asignar. Todo lo de la derecha del igual se guarda en lo de la izquierda, en este caso el string `Juan` se guarda en la variable `firstName`.
> 3. Que muestre en consola `Hola ` seguido del string almacenado en la variable `firstName`, dando como resultado `Hola Juan`. Esto se logra escribiendo `console.log()` y poniendo dentro de los paréntesis el string que queremos mostrar en pantalla.
> 4. También podemos observar un texto libre que está escrito luego de dos barras `//`, esto en JavaScript es un comentario y es solo informativo la computadora lo saltea.

[Siguiente tema](01_02_palabras_reservadas.md)