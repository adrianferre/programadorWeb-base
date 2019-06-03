# Creación e instalación de la estructura de un proyecto SPA

## Organización de las carpetas del proyecto

Vamos a empezar a organizar nuestro proyecto para poder construir una SPA, para esto vamos a dividir nuestro proyecto en tres carpetas principales una public que va a contener lo que vamos a subir al servidor, otra src que va a tener los archivos sin procesar y una template que simplemente tiene archivos base.

![Ejemplo de estructura de carpetas 1](https://github.com/adrianc4/programadorWeb-base/blob/master/Teoria%20plataforma/16_02_folders_example_1.png?raw=true)

> En la carpeta template vamos a guardar el los archivos ya procesados de JavaScript (La carpeta Recursos), mientras que en la carpeta src vamos a guardar los archivos sin procesar de cada modulo de nuestro proyecto.

## Creación del package.json

Antes de empezar a instalar dependencias tenemos que generar nuestro archivo `package.json` que es el que va a contener la información de nuestro proyecto así como las dependencias del mismo. Para esto vamos a correr el siguiente comando desde la consola estando dentro de la carpeta de nuestro proyecto (en este caso Workshop final):

`npm init`

Luego de ejecutar los comandos vamos a ir completando los datos que sean necesarios si no sabemos que poner en alguno dejamos el valor por defecto, de todos modos más adelante vamos a poder modificarlos. El `package.json` debería quedar similar al siguiente:

```js
{
  "name": "workshop-final",
  "version": "1.0.0",
  "description": "Workshop final - Camada 2935",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Adrian Ferre",
  "license": "ISC"
}
```

## Instalación de dependencias del proyecto

Dentro de la misma carpeta del proyecto vamos a ir corriendo comandos para poder instalar las dependencias que vamos a necesitar en nuestro proyecto.

### jQuery

Para manipular el DOM, realizar consultas AJAX y responder a los eventos vamos a utilizar la biblioteca de jQuery.

`npm install jquery`

**(docs)[https://jquery.com/download/]**

### Boostrap

Para la parte visual vamos a utilizar Boostrap para simplificar el trabajo de maquetado y también vamos a instalar Popper que es requerido para algunos componentes, jQuery también es requerido pero lo instalamos en el paso anterior.

`npm install bootstrap@4.1.2 popper.js@^1.14.3`

> Al utilizar el `@` en la instalación nos permite seleccionar versiones especificas de los paquetes de NPM.

**(docs)[https://getbootstrap.com/]**

### Crossroads

La biblioteca Crossroads nos va a permitir crear un Router para nuestra aplicación que nos va a ayudar a manejar la navegación entre pantallas y hacer el cambio de contenido junto con jQuery.

`npm install crossroads`

**(docs)[http://millermedeiros.github.io/crossroads.js/]**

### Webpack

Para poder trabajar nuestro código en distintos archivos y luego compilarlo en uno solo que sea el que importe el usuario final en la carpeta public vamos a utilizar Webpack, también vamos a incluir su dev-server que nos va a permitir realizar el desarollo simulando un servidor localmente.

`npm install --save-dev webpack webpack-cli webpack-dev-server`

> Al utilizar `--save-dev` vamos a instalarlo como una dependencia de desarrollo. Esto en el `package.json` va a quedar dentro `devDependencies`, en lugar de en `dependencies`.

**(docs)[https://webpack.js.org/]**

*Weback require de distintos procesadors para poder interpretas cada tipo de lenguaje, js, html, css, etc. Para esto vamos a tener que instalar los distintos loaders para nuestro proyecto.*

- Html-loader

El procesador html-loader nos va a permitir procesar archivos de HTML.

`npm install --save-dev html-loader`

**(docs)[https://github.com/webpack-contrib/html-loader]**

- Imágenes

Para las imágenes vamos a utilizar un loader que simplmente las copia en el directorio destino.

`npm install --save-dev file-loader`

- CSS

Para poder utilizar leer archivos CSS, precisamos instalar los siguientes dos loaders.

`npm install --save-dev style-loader css-loader`

**(docs)[https://www.npmjs.com/package/style-loader]**
**(docs)[https://www.npmjs.com/package/css-loader]**

- Copiar otros archivos

Este plugin nos permite copiar todos los otros archivos desde un template y generarlos automaticamente.

`npm install --save-dev copy-webpack-plugin`

**(docs)[https://github.com/webpack-contrib/copy-webpack-plugin]**

## Configuración

Por último vamos a agregar algunos archivos y líneas de código que nos van a permitir terminar de configurar nuestro proyecto.

### Webpack

Para terminar de configurar Webpack vamos a agregar un archivo en la carpeta de nuestro proyecto, al mismo nivel del `package.json` con el nombre `webpack.config.js` y dentro vamos a escribir el siguiente código:

```js
var CopyWebpackPlugin = require('copy-webpack-plugin')
var webpack = require('webpack')

var path = require('path')

module.exports = {
  entry: [ './src/js/index.js' ],
  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif|svg|ico|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    hot: true
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './template'),
        to: path.resolve(__dirname, './public')
      }
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}
```

> Esto configura el archivo de entrada y salida para JavaScript y crea una regla para poder importar y procesar los CSS desde nuestro archivo principal.

### Package.json

En el archivo `package.json` vamos a agregar el siguiente script:

```js
  "scripts": {
    "start": "webpack-dev-server --open --mode development",
    "build": "webpack --mode production"
  },
```

> Esto nos va a permitir iniciar Webpack en modo desarrollo corriendo el comando `npm start` en consola, si corremos `npm build` lo hacemos en modo productivo.

## Archivos principales de nuestra aplicación

1. En src/ debemos agregar el archivo `index.js` y dentro al comienzo el código:

```js
import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
```

> Esto va a agregar Popover.js, Boostrap, sus estilos y nuestros archivos de JavaScript y CSS principales y a nuestro proyecto.

2. En src/js/ debemos agregar el archivo `router.js` que va a ser el archivo JavaScript principal de nuestra aplicación.

> Como Webpack compila todo el código en el archivo `index.js` no es necesario importar nada más.

Al final nos tiene que quedar una estructura como la siguiente:

![Ejemplo de estructura de carpetas 2](https://github.com/adrianc4/programadorWeb-base/blob/master/Teoria%20plataforma/16_02_folders_example_2.png?raw=true)

## ¿Como usarlo?

A partir de este punto vamos a escribir nuestro código JavaScript en los archivos ubicados en src/js y en consola vamos a dejar corriendo el comando `npm start`. Cada vez que haya un cambio en algún archivo importado en nuestro archivo `index.js` ubicado en src o en algún archivo importado por este Webpack va a volver a compilar el código y actualizar el `index.js` de la carpeta public y solo va a recargar la página para que veamos los cambios en http://localhost:3000/.

*Importante deshabilitar cache y tener la consola abierta al momento de usarlo, para que refresque los cambios!!!*

![Ejemplo de estructura de carpetas 2](https://github.com/adrianc4/programadorWeb-base/blob/master/Teoria%20plataforma/16_02_disabled_cache.png?raw=true)
