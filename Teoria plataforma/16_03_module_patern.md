# Module Pattern

El Module Pattern es un patrón de diseño que se utiliza en JavaScript para aislar partes del código en módulos independientes y de esta manera poder agrupar distintas funcionalidades. Antes este patrón se implementaba utilizando el mismo lenguaje, pero actualmente con herramientas como Webpack se puede hacer de manera automática al escribir distintos archivos e importarlos que es como lo vamos a utilizar en nuestro proyecto.

[Versión solo con JavaScript](https://toddmotto.com/mastering-the-module-pattern/)

## Creando el módulo

Para poder crear nuestro primer modulo vamos a crear un archivo de JavaScript dentro de nuestra carpeta src/js/utils llamado `localStorage.js`:

![Ejemplo 1](https://github.com/adrianc4/programadorWeb-base/blob/master/Teoria%20plataforma/16_03_module_example_1.png?raw=true)

Y dentro de ese este archivo vamos a poner nuestras funciones que manipulan el localStorage:

```js
/**
 * La función getLocalList permite obtener una lista en formato
 * JavaScript del localStorage. Si la lista no existe devuelve un
 * array vacío.
 * @param { string } key 
 * @returns { array }
 */
function getLocalList (key) {
  if (typeof key === 'string') {
    var localList = localStorage.getItem(key)
    if (localList) {
      var parsedList = JSON.parse(localList)
      return parsedList
    } else {
      return []
    }
  }
}

/**
 * La función setLocalList permite guardar una lista
 * en el localStorage en formato JSON
 * @param { string } key 
 * @param { array } list 
 */
function setLocalList (key, list) {
  if (typeof key === 'string' && Array.isArray(list)) {
    var strList = JSON.stringify(list)
    localStorage.setItem(key, strList)
  }
}
```

Luego en el final del archivo vamos a agregar la siguiente línea de código que nos permite exportar estas funciones para ser utilizadas por fuera:

```js
export { getLocalList, setLocalList }
```

> Esto permite exportar ambas funciones, si solo queremos importar una o queremos que una sea la que se exporte por defecto usamos `export default <Nombre de la función o variable>`.

[Documentación export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)

## Importando el módulo

Para poder utilizar alguna de las funciones que exportamos en nuestro modulo lo que tenemos que hacer es importarlo en el archivo que lo precisemos usar:

```js
import { setLocalList } from './utils/localStorage'

setLocalList('Pato', [ 1, 2, 3, 4 ])
```
> De esta forma podemos utilizar la función `setLocalList` desde otro archivo como si estuviese definida en este mismo código. Esto va a guardar un array en formato JSON en el localStorage con la key `Pato`.

