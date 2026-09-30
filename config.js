/* =====================================================================
   CONFIGURACIÓN DEL PORTAFOLIO
   Este es el único archivo que necesitas editar para tus proyectos.
   ===================================================================== */

/* ---------- PROYECTOS ----------
   Cada proyecto va entre { } y separado por coma. Todos los campos son
   opcionales menos uno: pon al menos "repo" o "titulo".

   Lo mínimo:           { repo: "nombre-del-repo" }
   Con imagen:          { repo: "nombre-del-repo", imagen: "img/foto.jpg" }
   Sin repo (montaje):  { titulo: "Brazo robótico", imagen: "img/brazo.jpg" }

   Si pones "repo", el título, la descripción y el lenguaje se toman de GitHub
   automáticamente. Lo que escribas aquí tiene prioridad sobre lo de GitHub.

   Campos:
     repo         nombre del repositorio en github.com/riveoca
     titulo       nombre que se muestra en la tarjeta
     descripcion  una o dos líneas: qué hace y qué problema resuelve
     imagen       ruta a una captura, foto o GIF dentro de la carpeta img/
     tipo         categoría corta: "Desarrollo web", "Mecatrónica", "Automatización"...
     tags         tecnologías, por ejemplo ["C++", "Arduino"]
     demo         enlace a una demo en línea o a un video
*/
const PROYECTOS = [
  {
    repo: "proyecto_practicas_laravel",
    titulo: "Gestión de horarios y usuarios",
    descripcion: "Aplicación web para gestionar usuarios, horarios y días festivos colombianos, con calendario interactivo, roles y permisos, e importación y exportación en CSV.",
    tipo: "Desarrollo web",
    tags: ["Laravel 12", "PHP 8.2", "FullCalendar", "Tailwind", "SQLite"],
    // imagen: "img/horarios.png",   <- quita las dos barras cuando subas una captura
  },

  // Copia este bloque para agregar otro proyecto:
  // {
  //   repo: "nombre-del-repo",
  //   imagen: "img/mi-proyecto.jpg",
  //   tipo: "Mecatrónica",
  // },
];

/* ---------- CONTADOR DE VISITAS (GoatCounter) ----------
   1. Crea una cuenta gratis en https://www.goatcounter.com/signup
      y usa como código "riveoca" (o el que elijas).
   2. En GoatCounter ve a Settings y activa
      "Allow adding visitor counts on your website".
   3. Si usaste otro código, cámbialo aquí. Déjalo vacío ("") para desactivarlo.
*/
const GOATCOUNTER = "riveoca";
