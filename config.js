// Configuración del portafolio.
//
// Enlace del CV en Google Drive. Pega aquí el enlace de "Compartir" (acceso: "Cualquier persona con el enlace").
// Sirve un PDF subido a Drive o un documento de Google Docs (este último se descarga como PDF ya actualizado).
// Si lo dejas vacío, se usa el archivo CV_Iker_Rivera.pdf del repositorio.
const CV_URL = "https://docs.google.com/document/d/1eE8g6vDCdR7_pvfHdOBdDVuwk4oe_9WVJvGZGj9wXfw/edit?usp=sharing";

// Proyectos, en el orden en que aparecen.
// - id: identificador corto; el lazo de la portada enlaza a #p-<id>.
// - repo: nombre del repositorio en github.com/riveoca (si no hay, no se muestra "Ver código").
// - estado: texto corto opcional, por ejemplo "En desarrollo".
// - privado: true si el código no es público.
// - imagen: captura del proyecto. Si termina en "-1120.webp", en el celular se usa la versión "-640.webp".
// - flujo: si no hay captura, se dibuja este recorrido de los datos (de 3 a 5 pasos).
// - demo: enlace a una versión en línea (opcional).
// - pasos: en qué pasos del lazo de la portada aparece (sensar, procesar, actuar, verificar).
// - Los campos *_en son la versión en inglés; si faltan, se muestra el español.
const PROYECTOS = [
  {
    id: "asistente",
    titulo: "Asistente de voz en Raspberry Pi 5",
    descripcion: "Asistente de voz casero que corre por completo en una Raspberry Pi 5, con pantalla táctil y control de luces inteligentes. Lo construyo por etapas y pruebo cada módulo en local antes de pasarlo a la Pi.",
    titulo_en: "Voice assistant on Raspberry Pi 5",
    descripcion_en: "Home voice assistant that runs entirely on a Raspberry Pi 5, with a touchscreen and smart light control. I am building it in stages and test each module locally before moving it to the Pi.",
    estado: "En desarrollo",
    estado_en: "In progress",
    flujo: ["Micrófono", "Raspberry Pi 5", "API en FastAPI", "Pantalla en QML", "Luces Tuya"],
    flujo_en: ["Microphone", "Raspberry Pi 5", "FastAPI service", "QML screen", "Tuya lights"],
    tags: ["Python", "FastAPI", "WebSocket", "PySide6 / QML", "tinytuya"],
    pasos: ["sensar", "procesar", "actuar"],
  },
  {
    id: "tareas",
    repo: "tareas",
    titulo: "Tareas: de texto a Jira con IA",
    descripcion: "Describo el trabajo con mis palabras y una IA (Claude u Ollama en local) lo divide en épicas y tareas de Jira. La app las sube al sprint y muestra el avance del equipo con bandeja, tablero e informes.",
    titulo_en: "Tareas: from plain text to Jira with AI",
    descripcion_en: "I describe the work in my own words and an AI (Claude or a local Ollama model) splits it into Jira epics and tasks. The app uploads them to the sprint and shows the team's progress with an inbox, a board and reports.",
    imagen: "img/proyecto-tareas-1120.webp",
    tags: ["Python", "FastAPI", "SQLite", "API de Jira", "LLM"],
    tags_en: ["Python", "FastAPI", "SQLite", "Jira API", "LLM"],
    pasos: ["procesar", "actuar", "verificar"],
  },
  {
    id: "horarios",
    repo: "gestion-horarios-laravel",
    titulo: "Gestión de horarios y usuarios",
    descripcion: "Aplicación web para asignar horarios teniendo en cuenta los festivos de Colombia, con calendario interactivo, roles y permisos, importación y exportación en CSV y una API con JWT.",
    titulo_en: "Schedule and user management",
    descripcion_en: "Web application to assign schedules around Colombian public holidays, with an interactive calendar, roles and permissions, CSV import and export, and a JWT API.",
    flujo: ["Navegador", "Laravel 12", "Reglas de festivos", "MySQL", "Calendario"],
    flujo_en: ["Browser", "Laravel 12", "Holiday rules", "MySQL", "Calendar"],
    tags: ["Laravel 12", "PHP 8.2", "FullCalendar", "JWT", "Docker"],
    pasos: ["procesar", "verificar"],
  },
  {
    id: "extraccion",
    titulo: "Extracción de datos y APIs",
    descripcion: "En la práctica en Servitel hice una herramienta que extrae y organiza datos de un aplicativo interno con scraping y los publica en endpoints de API probados con Postman. También automaticé pruebas del aplicativo con Selenium.",
    titulo_en: "Data extraction and APIs",
    descripcion_en: "During my internship at Servitel I built a tool that extracts and organizes data from an internal application with scraping and serves it through API endpoints tested with Postman. I also automated tests of the application with Selenium.",
    privado: true,
    flujo: ["Aplicativo interno", "Scraping", "Datos ordenados", "Endpoints de API", "Postman"],
    flujo_en: ["Internal app", "Scraping", "Clean data", "API endpoints", "Postman"],
    tags: ["Python", "Web scraping", "API", "Postman", "Selenium"],
    pasos: ["sensar", "actuar", "verificar"],
  },
  {
    id: "portafolio",
    repo: "riveoca.github.io",
    titulo: "Este portafolio",
    descripcion: "HTML, CSS y JavaScript sin frameworks, en español e inglés, con modo claro y oscuro. Los proyectos completan sus datos con la API de GitHub y el CV se descarga siempre actualizado desde Google Docs.",
    titulo_en: "This portfolio",
    descripcion_en: "HTML, CSS and JavaScript with no frameworks, in Spanish and English, with light and dark mode. Projects fill in their data from the GitHub API and the CV always downloads up to date from Google Docs.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    flujo: ["config.js", "API de GitHub", "Página", "GitHub Pages"],
    flujo_en: ["config.js", "GitHub API", "Page", "GitHub Pages"],
  },
];

const GOATCOUNTER = "riveoca";
