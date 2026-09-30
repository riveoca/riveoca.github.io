# Portafolio · Iker Rivera

Portafolio personal de **Iker Santiago Rivera Ocampo**, estudiante de Ingeniería Mecatrónica en la Universidad ECCI, Bogotá.

Es una sola página en HTML y CSS, sin dependencias ni pasos de compilación.

## Estructura

```
index.html          Página del portafolio
config.js           Tus proyectos y el contador de visitas (lo único que necesitas editar)
CV_Iker_Rivera.pdf  Hoja de vida (botón "Descargar CV")
img/iker.jpg        Foto de la portada
img/                Capturas, fotos y GIFs de los proyectos
```

## Publicar con GitHub Pages

1. Sube estos archivos a la raíz del repositorio.
2. En GitHub ve a **Settings → Pages**.
3. En **Source** elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`. Guarda.
4. En uno o dos minutos la página queda en **https://riveoca.github.io/**.

## Agregar proyectos

Abre `config.js` y agrega un bloque a la lista `PROYECTOS`. Basta con el nombre del repo:

```js
{ repo: "nombre-del-repo" },
```

El título, la descripción y el lenguaje se toman de GitHub automáticamente. Para ponerle una imagen, súbela a `img/` y agrega la ruta:

```js
{ repo: "nombre-del-repo", imagen: "img/captura.png" },
```

Un proyecto sin repo, como un montaje físico, también sirve:

```js
{ titulo: "Brazo robótico", imagen: "img/brazo.jpg", tipo: "Mecatrónica" },
```

Mientras haya menos de 3 proyectos aparece una tarjeta de "Próximo proyecto".

## Contador de visitas

Usa [GoatCounter](https://www.goatcounter.com), que es gratis y no usa cookies.

1. Crea una cuenta en https://www.goatcounter.com/signup con el código `riveoca`.
2. En **Settings**, activa **Allow adding visitor counts on your website**.
3. Si usaste otro código, cámbialo en `config.js`.

El número de visitas aparece en el pie de página. En GoatCounter puedes ver más detalles, como de dónde llegan las visitas.

## Actualizar el CV

Reemplaza `CV_Iker_Rivera.pdf` por la nueva versión con el mismo nombre.
