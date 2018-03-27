# Sintaxis

En JavaScript como en otros lenguajes de programación existe una sintaxis que es la forma para darle ordenes o instrucciones a la computadora. La sintaxis tiene palabras reservadas que vamos a ver en el siguiente tema, pero también un orden. Siempre los programas se leen de arriba hacia abajo y para poder usar un valor tiene que estar declarada antes.

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

# Palabras reservadas

Las palabras reservadas son especiales porque las usamos para darle instrucciones a la computadora, estas palabras no se pueden usar para nombres de variables ni funciones por eso se llaman reservadas. 

*Existen muchas palabras reservadas que vamos a ir viendo de a poco, pero como ayuda prestemos atención a que muchos editores de texto las marcan con un color distinto para diferenciarlas como en el siguiente ejemplo:*

```js
var firstName

firstName = 'Juan'

if(firstName === 'Juan'){
  alert('Tu nombre es Juan!')
}

```

> Vemos algunas palabras como `var` (en rojo) que la usamos para declarar una variable o el `if` que nos permite decirle a la computadora que evalúe una condición booleana, esta son palabras reservadas. También vemos otras palabras como `alert()` (en violeta) que son llamados a métodos del sistema. Estas no son palabras reservadas, pero hay que tener cuidado de no generar nombres de variables que puedan confundirse con estas funciones.