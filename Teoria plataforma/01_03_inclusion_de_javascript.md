# Inclusión de JavaScript

Para incluir JavaScript en nuestro archivo HTML tenemos dos formas:

- Incluyendo los tags `<script></script>` y escribiendo nuestro código JavaScript adentro.
- Importando un archivo que contenga JavaScript usando el mismo tag `<script src="./js/index.js"></script>`, pero con la propiedad src. Esta forma es similar a como importar distintas hojas de estilos cada archivo nuevo que importemos se combina con el anterior, si repetimos nombres de variables se pueden pisar.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="tab icon" href="./favicon.png">
  <title>Clase 01 - En clase</title>
</head>
<body>
  <!-- Inclusión de JavaScript desde un archivo externo -->
  <script src="./js/index.js"></script>
</body>
</html>
```

> A lo largo del curso vamos a utilizar la segunda forma y vamos a ir viendo también como evitar los conflictos cuando usamos más de un archivo.