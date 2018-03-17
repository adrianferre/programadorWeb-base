# Ayuda para modificar el localStorage

```js
var temporalList = localStorage.getItem('savedList')

temporalList = temporalList ? JSON.parse(temporalList) : []


 // Acá haces los cambios que sean necesarios en la lista, ya sea agregar o eliminar elemento
 // -------------
 // Agregan asi:

temporalList.push(newElement)

 // entre paréntesis va el elemento que quieren agregar.
 // -------------
 // Eliminan asi:
 
temporalList.splice(index,1)

 // el index es la posición del elemento que quieren eliminar del array.
 // -------------
 // Modifican asi:

temporalList[index] = newElement

 // el index es la posición del elemento que quieren reemplazar por uno nuevo.


var parsedList = JSON.stringify(temporalList)

localStorage.setItem('savedList', parsedList)
```