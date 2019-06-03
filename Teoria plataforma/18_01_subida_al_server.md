# Subida al servidor

*Para completar nuestro curso vamos a realizar una subida a un servidor de nuestro trabajo práctico final, para esto vamos a usar la plataforma Heroku que nos provee de servidores gratuitos para distintos lenguajes*

Siguiendo estos pasos:

1. Crear una cuenta en Heroku, para esto tenemos que ingresár a la página principal de (heroku)[https://www.heroku.com/] y completar nuestros datos y confirmar el e-mail de registro.

2. Clickear en el botón de nueva aplicación (new) y crea una nueva app de Heroku, eligiendo algún nombre disponible para nuestra App.

![Nueva App de Heroku](https://github.com/adrianc4/programadorWeb-base/blob/master/Teoria%20plataforma/18_01_nueva_app_heroku.png?raw=true)

> Los nombres de las App no pueden contener espacios ni ningún otro carácter no soportado en una URL.

3. Ir a la pestaña de configuración (Settings).

![Nueva App de Heroku](https://github.com/adrianc4/programadorWeb-base/blob/master/Teoria%20plataforma/18_01_configuracion.png?raw=true)

4. Elegir la opción de agregar un Buildpack y seleccionar el de PHP.

![Nueva App de Heroku](https://github.com/adrianc4/programadorWeb-base/blob/master/Teoria%20plataforma/18_01_seleccionar_php.png?raw=true)

5. Crear en la carpeta template el archivo `index.php` y escribir adentro el siguiente código.

```
<?php header( 'Location: /index.html' ) ;  ?>
```

> Esto expone nuestro `index.html` como archivo principal del proyecto.

6. Luego correr en consola el comando 

`heroku login`

Esto nos permite autenticarnos en Heroku para poder subir al servidor nuestro trabajo.

7. Agregar en nuestro repo en Git la ruta remota de Heroku, para esto debemos estar parados al nivel de la carpeta programador-web-XXXX.

`heroku git:remote -a <Nombre de nuestra App en Heroku>`

8. Como solo queremos subir el proyecto final y no todo nuestro repo de Git al momento de terminar nuestro Workshop, luego de haber corrido el comando `npm run build` y preparado el commit, vamos a subir solo la carpeta public usando el siguiente comando.

`git subtree push --prefix 'Clase 17 - 18/Profe/Workshop final/public/' heroku master`

9. En la solapa Resumen (Overview) de Heroku vamos a ver el progreso de la subida al servidor y cualquier error que pueda ocurrir, si todo sale bien en la URL (https://<Nombre de nuestra App en Heroku>.heroku.app.com/)[https://<Nombre de nuestra App en Heroku>.heroku.app.com/] vamos a poder ver nuestra App funcionando igual que si estuviéramos corriendo el proyecto local con `npm start`.









