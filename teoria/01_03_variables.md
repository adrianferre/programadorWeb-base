# Variables

Las variables en JavaScript sirven para almacenar datos de distintos tipos y tiene la particularidad de que puede modificarse su contenido y el tipo contenido a lo largo de la ejecución del programa. Si nosotros escribimos un string `Hola mundo` el mismo es inmutable, pero si este `Hola mundo` se lo asignamos a una variable lo podemos modificar mas adelante en el programa.
Para poder declarar una variable usamos la palabra reservada `var` seguida de un espacio y luego el nombre de la variable, que puede empezar con una letra mayúscula o minúscula `a b c D E z`, un guion bajo `_` o un signo pesos `$`, luego de la primer letra también podemos usar números `1 2 67`.

```js
var firstName 

firstName = 'Juan'

firstName = 'Pedro'

```

> En este caso usamos el nombre `firstName`, luego de la declaración le asignamos el string `Juan` y luego modificamos o pisamos ese valor asignando el string `Pedro`.

La declaración y asignación de un variable también puede realizarse en un solo de la siguiente forma:

```js
var firstName = 'Juan'
```

> Es importante ser descriptivos con los nombres de nuestras variables y que representen lo que van a contener. No es lo mismo que una variable se llame `firstName` o `fN`, en la primera es bien claro que va a contener un nombre mientras que la segunda puede interpretarse otra cosa. 
Los caracteres no se cobran en JavaScript así que úsenlos tranquilos. 😛

[Siguiente tema](01_04_tipos_de_valores.md)
