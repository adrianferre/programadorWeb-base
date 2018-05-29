# Sintaxis

En JavaScript como en otros lenguajes de programación existe una sintaxis que es la forma para darle ordenes o instrucciones a la computadora. La sintaxis tiene palabras reservadas que vamos a ver en el siguiente tema, pero también un orden. Siempre los programas se leen de arriba hacia abajo y para poder usar un valor tiene que estar declarada antes.

La sintaxis de un lenguaje de programación se define como el conjunto de reglas que deben seguirse al escribir el código fuente de los programas para considerarse como correctos para ese lenguaje de programación.

La sintaxis de JavaScript es muy similar a la de otros lenguajes de programación como Java y C. Las normas básicas que definen la sintaxis de JavaScript son las siguientes:

- No se tienen en cuenta los espacios en blanco y las nuevas líneas, como sucede con XHTML, el intérprete de JavaScript ignora cualquier espacio en blanco sobrante, por lo que el código se puede ordenar de forma adecuada para entenderlo mejor (tabulando las líneas, añadiendo espacios, creando nuevas líneas, etc.)

- Se distinguen las mayúsculas y minúsculas, al igual que sucede con la sintaxis de las etiquetas y elementos XHTML. Sin embargo, si en una página XHTML se utilizan indistintamente mayúsculas y minúsculas, la página se visualiza correctamente, siendo el único problema la no validación de la página. En cambio, si en JavaScript se intercambian mayúsculas y minúsculas el script no funciona.

- No se define el tipo de las variables, al crear una variable no es necesario indicar el tipo de dato que almacenará. De esta forma, una misma variable puede almacenar diferentes tipos de datos durante la ejecución del script.

- No es necesario terminar cada sentencia con el carácter de punto y coma (;): en la mayoría de lenguajes de programación, es obligatorio terminar cada sentencia con el carácter ;. [Standar JS - No semicolons](https://standardjs.com/)

- Se pueden incluir comentarios, los comentarios se utilizan para añadir información en el código fuente del programa. Aunque el contenido de los comentarios no se visualiza por pantalla, si que se envía al navegador del usuario junto con el resto del script, por lo que es necesario extremar las precauciones sobre la información incluida en los comentarios y tener en cuenta que ocupan espacio.

### JavaScript define dos tipos de comentarios: los de una sola línea y los que ocupan varias líneas.

Ejemplo de comentario de una sola línea (se definen añadiendo dos barras oblicuas `//`):

```js
// A continuación se muestra un mensaje en consola
console.log('Soy un mensaje')
```

Ejemplo de comentario de varias líneas (se definen encerrando el texto entre los caracteres `/*` y `*/`):


```js
/**
 * A continuación se muestra
 * un mensaje en consola
*/
console.log('Soy un mensaje')
```

Ejemplo de sintaxis en JavaScript es:

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

Las palabras reservadas son especiales porque las usamos para darle instrucciones a la computadora, estas palabras no se pueden usar para nombres de variables ni funciones por eso se llaman reservadas. Algunas son `break, case, catch, continue, default, delete, do, else, finally, for, function, if, in, instance of, new, return, switch, this, throw, try, typeof, var, void, while, with`.

*Existen muchas palabras reservadas que vamos a ir viendo de a poco, pero como ayuda prestemos atención a que muchos editores de texto las marcan con un color distinto para diferenciarlas como en el siguiente ejemplo:*

```js
var firstName

firstName = 'Juan'

if(firstName === 'Juan'){
  alert('Tu nombre es Juan!')
}

```

> Vemos algunas palabras como `var` (en rojo) que la usamos para declarar una variable o el `if` que nos permite decirle a la computadora que evalúe una condición booleana, esta son palabras reservadas. También vemos otras palabras como `alert()` (en violeta) que son llamados a métodos del sistema. Estas no son palabras reservadas, pero hay que tener cuidado de no generar nombres de variables que puedan confundirse con estas funciones.