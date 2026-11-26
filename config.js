// Proyectos que aparecen en el portafolio.
// - repo: nombre del repositorio en github.com/riveoca (opcional; si no hay, la tarjeta no muestra "Código").
// - destacado: true para que ocupe más espacio y vaya primero.
// - estado: texto corto opcional, por ejemplo "En curso".
// - icono: "chip", "code", "test" o "web" (se usa cuando no hay imagen ni repo).
// - privado: true si el código no es público.
// - imagen / demo: ruta de una captura y enlace a una demo (opcionales). Si la imagen termina en "-1120.webp",
//   el navegador del celular usa la versión "-640.webp".
// - titulo_en, descripcion_en, tipo_en, estado_en: textos en inglés (si faltan, se muestra el español).
// Enlace del CV en Google Drive. Pega aquí el enlace de "Compartir" (acceso: "Cualquier persona con el enlace").
// Sirve un PDF subido a Drive o un documento de Google Docs (este último se descarga como PDF ya actualizado).
// Si lo dejas vacío, se usa el archivo CV_Iker_Rivera.pdf del repositorio.
const CV_URL = "https://docs.google.com/document/d/1eE8g6vDCdR7_pvfHdOBdDVuwk4oe_9WVJvGZGj9wXfw/edit?usp=sharing";

const PROYECTOS = [
  {
    titulo: "Asistente de voz en Raspberry Pi 5",
    descripcion: "Asistente de voz casero que corre por completo en una Raspberry Pi 5, con pantalla táctil y control de luces inteligentes. Backend en Python con API local, interfaz en QML y control de dispositivos Tuya. Desarrollo por etapas, probando cada módulo primero en entorno local.",
    tipo: "Mecatrónica · IoT",
    estado: "En curso",
    titulo_en: "Voice assistant on Raspberry Pi 5",
    descripcion_en: "Home voice assistant that runs entirely on a Raspberry Pi 5, with a touchscreen and smart light control. Python backend with a local API, QML interface and Tuya device control. Built in stages, testing each module locally first.",
    tipo_en: "Mechatronics · IoT",
    estado_en: "In progress",
    destacado: true,
    icono: "chip",
    tags: ["Python", "FastAPI", "WebSocket", "PySide6 / QML", "tinytuya", "Raspberry Pi 5"],
  },
  {
    repo: "tareas",
    titulo: "Tareas: IA → Jira",
    descripcion: "App web que convierte la descripción del trabajo en épicas y tareas de Jira usando IA (Claude u Ollama en local), y muestra el avance del sprint con bandeja, tablero e informes de rendimiento.",
    tipo: "Backend · IA",
    titulo_en: "Tareas: AI → Jira",
    descripcion_en: "Web app that turns a description of the work into Jira epics and tasks using AI (Claude or a local Ollama model), and tracks sprint progress with an inbox, a board and performance reports.",
    tipo_en: "Backend · AI",
    imagen: "img/proyecto-tareas-1120.webp",
    tags: ["Python", "FastAPI", "SQLite", "Jira API", "LLM"],
  },
  {
    repo: "gestion-horarios-laravel",
    titulo: "Gestión de horarios y usuarios",
    descripcion: "Aplicación web para gestionar usuarios, horarios y días festivos colombianos, con calendario interactivo, roles y permisos, e importación y exportación en CSV.",
    tipo: "Desarrollo web",
    titulo_en: "Schedule and user management",
    descripcion_en: "Web application to manage users, schedules and Colombian public holidays, with an interactive calendar, roles and permissions, and CSV import and export.",
    tipo_en: "Web development",
    tags: ["Laravel 12", "PHP 8.2", "FullCalendar", "Tailwind", "SQLite"],
  },
  {
    repo: "riveoca.github.io",
    titulo: "Portafolio personal",
    descripcion: "Este sitio: HTML, CSS y JavaScript sin frameworks, con modo claro y oscuro, proyectos cargados desde la API de GitHub y CV que se actualiza desde Google Docs.",
    tipo: "Frontend",
    titulo_en: "Personal portfolio",
    descripcion_en: "This site: HTML, CSS and JavaScript with no frameworks, light and dark mode, projects loaded from the GitHub API and a CV that updates from Google Docs.",
    imagen: "img/captura-portafolio-1120.webp",
    demo: "https://riveoca.github.io",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
  },
  {
    titulo: "Extracción de datos y APIs",
    descripcion: "Herramienta que extrae y organiza datos de un aplicativo empresarial mediante scraping y los expone con endpoints de API validados con Postman. Incluye automatización de navegador con Selenium para probar el aplicativo. Proyecto de la práctica en Servitel (código privado).",
    tipo: "Backend · Automatización",
    titulo_en: "Data extraction and APIs",
    descripcion_en: "Tool that extracts and organizes data from a business application through scraping and exposes it through API endpoints validated with Postman. Includes browser automation with Selenium to test the application. Internship project at Servitel (private code).",
    tipo_en: "Backend · Automation",
    icono: "code",
    privado: true,
    tags: ["Python", "API", "Web scraping", "Postman", "Selenium"],
  },
];

const GOATCOUNTER = "riveoca";
