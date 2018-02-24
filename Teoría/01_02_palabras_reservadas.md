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

[Siguiente tema](01_03_variables.md)