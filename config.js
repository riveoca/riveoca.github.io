// Proyectos que aparecen en el portafolio.
// - repo: nombre del repositorio en github.com/riveoca (opcional; si no hay, la tarjeta no muestra "Código").
// - destacado: true para que ocupe más espacio y vaya primero.
// - estado: texto corto opcional, por ejemplo "En curso".
// - icono: "chip", "code", "test" o "web" (se usa cuando no hay imagen ni repo).
// - privado: true si el código no es público.
// - imagen / demo: ruta de una captura y enlace a una demo (opcionales).
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
    destacado: true,
    icono: "chip",
    tags: ["Python", "FastAPI", "WebSocket", "PySide6 / QML", "tinytuya", "Raspberry Pi 5"],
  },
  {
    titulo: "Extracción de datos y APIs",
    descripcion: "Herramienta que extrae y organiza datos de un aplicativo empresarial mediante scraping y los expone con endpoints de API validados con Postman. Incluye automatización de navegador con Selenium para probar el aplicativo. Proyecto de la práctica en Servitel (código privado).",
    tipo: "Backend · Automatización",
    icono: "code",
    privado: true,
    tags: ["Python", "API", "Web scraping", "Postman", "Selenium"],
  },
  {
    repo: "proyecto_practicas_laravel",
    titulo: "Gestión de horarios y usuarios",
    descripcion: "Aplicación web para gestionar usuarios, horarios y días festivos colombianos, con calendario interactivo, roles y permisos, e importación y exportación en CSV.",
    tipo: "Desarrollo web",
    tags: ["Laravel 12", "PHP 8.2", "FullCalendar", "Tailwind", "SQLite"],
  },
];

const GOATCOUNTER = "riveoca";
