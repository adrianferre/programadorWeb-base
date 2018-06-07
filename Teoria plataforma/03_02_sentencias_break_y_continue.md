# Sentencias break y continue

Las palabras reservadas break y continue, nos permiten salir de un ciclo o saltearnos una iteración del ciclo respectivamente, evitando tener que hacer el ciclo completo.

## Salir - break

La palabra reservada `break` nos permite cortar toda la ejecución de un ciclo para evitar un ciclo completo cuando no es necesario. Se suele utilizar con algún condicional de la siguiente manera:

```js
for(var i = 1 ; i < 10 ; i++){
  console.log(i)

  if(i === 5){
    break
  }
}
```
En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `i` en uno `var i = 1`.
2. Verifica que se cumpla la condición booleana `i < 10`.
3. Ejecuta el código dentro de las llaves imprimiendo en pantalla el valor de la variable `i`.
4. Verifica la condición dentro del `if`, si es verdadera corta el ciclo con el `break` si no continua.
5. Le suma un 1 a la variable `i++`.
6. Repite desde el paso 2 al 5 hasta que la condición booleana no se cumpla o el break se ejecute y corte el ciclo.

> Esto nos da como resultado que se muestran en consola los números del 1 al 5, la condición cortaría en `i < 10` pero el `break` hace que corte en `i === 5` y no siga más.

## Seguir - continue

La palabra reservada `continue` nos permite corta la ejecución de una pasada de un ciclo para evitar tener que realizar un ciclo completo. Se suele utilizar con algún condicional de la siguiente manera:

```js
for(var i = 1 ; i < 5 ; i++){
  if(i === 3){
    continue
  }
  console.log(i)
}
```
En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `i` en uno `var i = 1`.
2. Verifica que se cumpla la condición booleana `i < 5`.
3. Verifica la condición dentro del `if`, si es verdadera saltea esa pasada del ciclo si no sigue.
4. Imprime en pantalla el valor de la variable `i`.
5. Le suma un 1 a la variable `i++`.
6. Repite desde el paso 2 al 5 hasta que la condición booleana no se cumpla y el ciclo corte.

> Esto nos da como resultado que se muestran en consola los números 1, 2 y 4, la condición corta en `i < 5` pero el `continue` hace que se saltee el 3`.

