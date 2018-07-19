# Load de jQuery

El método `load()` de jQuery nos permite cargar dinámicamente código HTML dentro de un componente y luego ejecutar una función que le pasamos como parámetro cuando la carga esta completa.

`index.html`

```html
...
<div id="root"></div>
...
```

`home.html`

```html
<h1>Home page</h1>
```

`router.js`

```js
$('#root').load('./partials/home.html', function(){
  console.log('Se cargo la home')
})
```

> Este código carga todo el contenido de `home.html` dentro del `<div id="root"></div>` del `index.html`.

# Patrón MVC

El patrón de diseño MVC (Model, View, Controller) nos permite organizar nuestro código siguiendo una estructura clara y haciendo lo más legible y fácil de mantener. Este patrón de diseño tiene tres partes:

1. Model: Es el código encargado de manipular nuestras fuentes de datos, normalmente también valida permisos y accesos. En nuestro caso es el localStorage o los datos en la API de Star Wars.
2. View: Es la parte del código encargada de mostrarle la información al usuario. En nuestro caso es el HTML.
3. Controller: Va a ser el JavaScript asociado a una vista en particular. Por ejemplo el código que valida el formulario está asociado a la vista en HTML del mismo, pero no guarda relación con el HTML de la tabla de personajes.

## Cargar controladores con jQuery

Al usar el método `load()` de jQuery cargamos dentro de un contenedor un HTML y también ejecutamos un código de JavaScript cuando el HTML está totalmente cargado, ese código va a ser nuestro controlador asociado a la vista. Vamos a usar un controlador por cada vista de nuestra aplicación.

`index.html`

```html
...
<div id="root"></div>
...
```

`home.html`

```html
<h1>Home page</h1>
```

`homeController.js`

```js
function homeController(){
  console.log('Se cargo la home')
}

export default homeController
```

`router.js`

```js
import homeController from './controllers/homeController'

$('#root').load('./partials/home.html', homeController)
```

> Este código carga la vista de home y cuando termina de cargalo ejecuta el código del archivo `homeController.js` mostrando en consola `Se cargo la home`.