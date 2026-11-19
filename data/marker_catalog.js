// Catálogo de Íconos estilo Stickers Ilustrados / Caricaturizados (Doodle Art)
// Inspirados en la estética de mapas ilustrados turísticos (estilo Florida / Flaticon)
// Sin contenedores circulares rígidos: ¡Stickers vivos con contorno y color!

const MARKER_CATEGORIES = [
  { id: "deportes", nombre: "⚽ Deportes y Canchas", color: "#0284c7" },
  { id: "servicios", nombre: "🏖️ Paradores y Servicios", color: "#f59e0b" },
  { id: "accesos", nombre: "🪵 Pasarelas y Accesos", color: "#d97706" },
  { id: "nautica", nombre: "⛵ Náutica y Embarcaciones", color: "#3b82f6" },
  { id: "seguridad", nombre: "🛡️ Guardavidas y Seguridad", color: "#ef4444" },
  { id: "vialidad", nombre: "🚦 Tránsito y Velocidad", color: "#f97316" },
  { id: "naturaleza", nombre: "🌿 Dunas, Flora y Fauna", color: "#10b981" },
  { id: "conciencia", nombre: "💚 Carteles de Conciencia", color: "#ec4899" }
];

const MARKER_CATALOG = [
  // --- DEPORTES Y CANCHAS ---
  {
    type: "cancha_beachvolley",
    categoria: "deportes",
    titulo: "Cancha de Beach Volley",
    badgeLabel: "Beach Volley",
    defaultSize: 56,
    descripcion: "Cancha reglamentaria de voleibol de playa con red, postes y pelota sobre arena.",
    svgContent: `
      <g>
        <!-- Cancha de arena -->
        <rect x="2" y="14" width="28" height="14" rx="3" fill="#fde047" stroke="#1e293b" stroke-width="2"/>
        <line x1="2" y1="21" x2="30" y2="21" stroke="#ca8a04" stroke-width="1.5" stroke-dasharray="2,2"/>
        <!-- Postes y Red -->
        <line x1="6" y1="4" x2="6" y2="24" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="26" y1="4" x2="26" y2="24" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="6" y="6" width="20" height="8" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
        <line x1="6" y1="10" x2="26" y2="10" stroke="#0284c7" stroke-width="1.2"/>
        <line x1="11" y1="6" x2="11" y2="14" stroke="#0284c7" stroke-width="1.2"/>
        <line x1="16" y1="6" x2="16" y2="14" stroke="#0284c7" stroke-width="1.2"/>
        <line x1="21" y1="6" x2="21" y2="14" stroke="#0284c7" stroke-width="1.2"/>
        <!-- Pelota de Volley en el aire -->
        <circle cx="23" cy="4" r="3.5" fill="#ffffff" stroke="#1e293b" stroke-width="1.5"/>
        <path d="M20.5 4c1.5.5 3.5.5 5 0M23 1.5c0 1.5 0 3.5 0 5" stroke="#0284c7" stroke-width="1"/>
      </g>
    `
  },
  {
    type: "cancha_beachfootball",
    categoria: "deportes",
    titulo: "Cancha de Beach Fútbol",
    badgeLabel: "Beach Fútbol",
    defaultSize: 56,
    descripcion: "Cancha delimitada de fútbol playa con arcos y pelota clásica sobre arena.",
    svgContent: `
      <g>
        <!-- Cancha de arena -->
        <rect x="2" y="10" width="28" height="18" rx="3" fill="#fef08a" stroke="#1e293b" stroke-width="2"/>
        <circle cx="16" cy="19" r="4.5" fill="none" stroke="#ca8a04" stroke-width="1.5" stroke-dasharray="2,2"/>
        <!-- Arco de fútbol -->
        <rect x="4" y="6" width="12" height="10" rx="1" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
        <line x1="4" y1="9" x2="16" y2="9" stroke="#94a3b8" stroke-width="1"/>
        <line x1="4" y1="12" x2="16" y2="12" stroke="#94a3b8" stroke-width="1"/>
        <line x1="8" y1="6" x2="8" y2="16" stroke="#94a3b8" stroke-width="1"/>
        <line x1="12" y1="6" x2="12" y2="16" stroke="#94a3b8" stroke-width="1"/>
        <!-- Pelota de fútbol -->
        <circle cx="22" cy="17" r="4" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
        <polygon points="22,15 23.5,16.5 22.5,18 21.5,18 20.5,16.5" fill="#1e293b"/>
      </g>
    `
  },
  {
    type: "zona_surf",
    categoria: "deportes",
    titulo: "Zona de Surf / Deportes de Tabla",
    badgeLabel: "Zona Surf",
    defaultSize: 48,
    descripcion: "Tabla de surf clavada en la arena junto a las olas del mar.",
    svgContent: `
      <g>
        <!-- Ola marina -->
        <path d="M2 26c4-3 8-1 13-4 4-2 7-6 10-6s5 3 6 6" stroke="#0ea5e9" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M5 29c4-2 9 0 14-2s8-3 10-1" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" fill="none"/>
        <!-- Tabla de surf -->
        <ellipse cx="14" cy="14" rx="4.5" ry="12" transform="rotate(25 14 14)" fill="#facc15" stroke="#1e293b" stroke-width="2"/>
        <line x1="9" y1="25" x2="19" y2="3" stroke="#e11d48" stroke-width="2.5"/>
        <circle cx="15.5" cy="10" r="1.5" fill="#ffffff"/>
      </g>
    `
  },
  {
    type: "zona_pesca",
    categoria: "deportes",
    titulo: "Zona de Pesca",
    badgeLabel: "Zona Pesca",
    defaultSize: 46,
    descripcion: "Caña de pescar curva con pez saltando en el agua.",
    svgContent: `
      <g>
        <path d="M4 28C8 22 18 10 24 4" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M24 4c2 6 0 12-5 15" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="2,2" fill="none"/>
        <!-- Pez saltando -->
        <path d="M12 21c3-2 7-1 9 1-2 3-6 4-9 2-1-1-1-2 0-3z" fill="#93c5fd" stroke="#1e293b" stroke-width="1.8"/>
        <polygon points="21,22 25,20 25,24" fill="#60a5fa" stroke="#1e293b" stroke-width="1.2"/>
        <circle cx="14" cy="21.5" r="1" fill="#1e293b"/>
      </g>
    `
  },
  {
    type: "gimnasio_playa",
    categoria: "deportes",
    titulo: "Gimnasio de Playa / Calistenia",
    badgeLabel: "Calistenia",
    defaultSize: 46,
    descripcion: "Barras de calistenia y aparatos saludables frente al mar.",
    svgContent: `
      <g>
        <line x1="4" y1="26" x2="28" y2="26" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="8" y1="26" x2="8" y2="8" stroke="#1e293b" stroke-width="2.5"/>
        <line x1="24" y1="26" x2="24" y2="8" stroke="#1e293b" stroke-width="2.5"/>
        <line x1="6" y1="10" x2="26" y2="10" stroke="#10b981" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="10" y1="16" x2="22" y2="16" stroke="#10b981" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="16" cy="13" r="2.5" fill="#fde047" stroke="#1e293b" stroke-width="1.5"/>
      </g>
    `
  },
  {
    type: "zona_paleta",
    categoria: "deportes",
    titulo: "Zona de Paleta de Playa",
    badgeLabel: "Paleta",
    defaultSize: 44,
    descripcion: "Paleta clásica de madera y pelota de goma en la arena.",
    svgContent: `
      <g>
        <circle cx="12" cy="11" r="7" fill="#f59e0b" stroke="#1e293b" stroke-width="2"/>
        <rect x="10" y="16" width="4" height="10" rx="1.5" fill="#b45309" stroke="#1e293b" stroke-width="2"/>
        <line x1="12" y1="18" x2="12" y2="24" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="23" cy="8" r="3.2" fill="#ef4444" stroke="#1e293b" stroke-width="1.8"/>
      </g>
    `
  },

  // --- SERVICIOS Y PARADORES ---
  {
    type: "parador_playa",
    categoria: "servicios",
    titulo: "Parador de Playa",
    badgeLabel: "Parador",
    defaultSize: 52,
    descripcion: "Parador costero con techo de paja, jugos y mesas frente al mar.",
    svgContent: `
      <g>
        <!-- Techo de paja -->
        <polygon points="16,3 2,13 30,13" fill="#f59e0b" stroke="#1e293b" stroke-width="2.2" stroke-linejoin="round"/>
        <line x1="8" y1="7" x2="6" y2="13" stroke="#b45309" stroke-width="1.5"/>
        <line x1="16" y1="5" x2="16" y2="13" stroke="#b45309" stroke-width="1.5"/>
        <line x1="24" y1="7" x2="26" y2="13" stroke="#b45309" stroke-width="1.5"/>
        <!-- Caseta / Mostrador -->
        <rect x="6" y="13" width="20" height="12" fill="#fde047" stroke="#1e293b" stroke-width="2"/>
        <rect x="9" y="15" width="14" height="6" fill="#0284c7" stroke="#1e293b" stroke-width="1.5"/>
        <!-- Sombrillita de trago -->
        <path d="M22 8c2-2 5-2 6 0l-3 4z" fill="#ec4899" stroke="#1e293b" stroke-width="1"/>
      </g>
    `
  },
  {
    type: "sombrilla_descanso",
    categoria: "servicios",
    titulo: "Sombrillas y Reposeras",
    badgeLabel: "Descanso",
    defaultSize: 46,
    descripcion: "Sombrilla playera con reposera y sol radiante.",
    svgContent: `
      <g>
        <!-- Sol sonriente -->
        <circle cx="24" cy="7" r="4.5" fill="#facc15" stroke="#1e293b" stroke-width="1.8"/>
        <!-- Sombrilla -->
        <path d="M4 17c3-5 8-7 13-7s10 2 13 7H4z" fill="#38bdf8" stroke="#1e293b" stroke-width="2"/>
        <path d="M12 10c2 2 3 5 3 7H9c0-2 1-5 3-7z" fill="#f87171"/>
        <line x1="17" y1="10" x2="17" y2="27" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M7 27h12" stroke="#eab308" stroke-width="2.5" stroke-linecap="round"/>
      </g>
    `
  },
  {
    type: "banos_duchas",
    categoria: "servicios",
    titulo: "Baños y Duchas Públicas",
    badgeLabel: "Baños / Duchas",
    defaultSize: 44,
    descripcion: "Batería de servicios higiénicos y duchas de playa.",
    svgContent: `
      <g>
        <rect x="5" y="5" width="22" height="20" rx="3" fill="#67e8f9" stroke="#1e293b" stroke-width="2"/>
        <circle cx="16" cy="11" r="3.5" fill="#1e293b"/>
        <path d="M11 20v-3c0-2.5 2.5-3 5-3s5 .5 5 3v3" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <circle cx="21" cy="9" r="1.5" fill="#0284c7"/>
        <circle cx="23" cy="12" r="1.5" fill="#0284c7"/>
      </g>
    `
  },

  // --- NÁUTICA Y VEHÍCULOS ---
  {
    type: "bajada_vehiculos_nauticos",
    categoria: "nautica",
    titulo: "Bajada de Vehículos Náuticos / Trailer",
    badgeLabel: "Bajada Trailer",
    defaultSize: 52,
    descripcion: "Bajada habilitada para camionetas y trailers con botes, lanchas y motos de agua.",
    svgContent: `
      <g>
        <!-- Rampa / orilla -->
        <path d="M2 24l28-8v8H2z" fill="#fde047" stroke="#1e293b" stroke-width="2"/>
        <!-- Camioneta 4x4 con trailer -->
        <rect x="3" y="14" width="10" height="6" rx="1.5" fill="#38bdf8" stroke="#1e293b" stroke-width="1.8"/>
        <circle cx="5.5" cy="20.5" r="2" fill="#1e293b"/>
        <circle cx="11.5" cy="20.5" r="2" fill="#1e293b"/>
        <!-- Trailer con lancha -->
        <line x1="13" y1="18" x2="17" y2="17" stroke="#1e293b" stroke-width="2"/>
        <path d="M16 16l12-3-2 4h-9l-1-1z" fill="#f97316" stroke="#1e293b" stroke-width="1.8"/>
        <circle cx="22" cy="18" r="2" fill="#1e293b"/>
      </g>
    `
  },
  {
    type: "bajada_kayaks",
    categoria: "nautica",
    titulo: "Bajada Náutica / Kayaks",
    badgeLabel: "Kayaks",
    defaultSize: 48,
    descripcion: "Bajada peatonal para kayaks, tablas de SUP y botes ligeros.",
    svgContent: `
      <g>
        <!-- Kayak -->
        <path d="M3 18c6-3 18-3 26 0-7 4-19 4-26 0z" fill="#facc15" stroke="#1e293b" stroke-width="2"/>
        <ellipse cx="16" cy="18" rx="3.5" ry="2" fill="#1e293b"/>
        <!-- Remo doble -->
        <line x1="7" y1="11" x2="25" y2="25" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <ellipse cx="7" cy="11" rx="2" ry="3.5" transform="rotate(-30 7 11)" fill="#ef4444" stroke="#1e293b" stroke-width="1.5"/>
        <ellipse cx="25" cy="25" rx="2" ry="3.5" transform="rotate(-30 25 25)" fill="#ef4444" stroke="#1e293b" stroke-width="1.5"/>
      </g>
    `
  },
  {
    type: "prefectura_naval",
    categoria: "nautica",
    titulo: "Prefectura Nacional Naval",
    badgeLabel: "Prefectura",
    defaultSize: 48,
    descripcion: "Puesto de auxilio marítimo y control náutico costero.",
    svgContent: `
      <g>
        <!-- Ancla marinera estilo doodle -->
        <circle cx="16" cy="7" r="3.5" fill="#93c5fd" stroke="#1e293b" stroke-width="2"/>
        <line x1="16" y1="10" x2="16" y2="26" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
        <line x1="8" y1="14" x2="24" y2="14" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M6 19c3 6 17 6 20 0" stroke="#1e293b" stroke-width="3" stroke-linecap="round" fill="none"/>
        <polygon points="6,19 4,17 7,16" fill="#1e293b"/>
        <polygon points="26,19 28,17 25,16" fill="#1e293b"/>
      </g>
    `
  },

  // --- PASARELAS Y ACCESOS ---
  {
    type: "acceso_pasarela",
    categoria: "accesos",
    titulo: "Acceso por Pasarela de Madera",
    badgeLabel: "Pasarela",
    defaultSize: 48,
    descripcion: "Pasarela de madera sobreelevada para bajar a la playa protegiendo el cordón dunar.",
    svgContent: `
      <g>
        <!-- Tablones de madera escalonados -->
        <rect x="5" y="6" width="22" height="4" rx="1.5" fill="#fde68a" stroke="#1e293b" stroke-width="1.8"/>
        <rect x="5" y="13" width="22" height="4" rx="1.5" fill="#fde68a" stroke="#1e293b" stroke-width="1.8"/>
        <rect x="5" y="20" width="22" height="4" rx="1.5" fill="#fde68a" stroke="#1e293b" stroke-width="1.8"/>
        <!-- Postes laterales -->
        <line x1="8" y1="3" x2="8" y2="27" stroke="#b45309" stroke-width="2.5"/>
        <line x1="24" y1="3" x2="24" y2="27" stroke="#b45309" stroke-width="2.5"/>
      </g>
    `
  },
  {
    type: "acceso_universal",
    categoria: "accesos",
    titulo: "Acceso a Playa Universal / Rampa",
    badgeLabel: "Bajada Accesible",
    defaultSize: 48,
    descripcion: "Rampa accesible sin escalones para sillas de ruedas y cochecitos.",
    svgContent: `
      <g>
        <circle cx="18" cy="7" r="3" fill="#fde047" stroke="#1e293b" stroke-width="1.8"/>
        <circle cx="12" cy="19" r="6" fill="#93c5fd" stroke="#1e293b" stroke-width="2.5"/>
        <path d="M14 14h5l4 7M19 20l3 5" stroke="#1e293b" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    `
  },
  {
    type: "mar_al_alcance",
    categoria: "accesos",
    titulo: "Programa Mar al Alcance",
    badgeLabel: "Mar al Alcance",
    defaultSize: 48,
    descripcion: "Silla anfibia comunitaria para baño recreativo asistido e inclusivo.",
    svgContent: `
      <g>
        <!-- Olas -->
        <path d="M2 24c4-2 8 2 12 0s8 2 12 0" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" fill="none"/>
        <circle cx="16" cy="8" r="3.5" fill="#facc15" stroke="#1e293b" stroke-width="1.8"/>
        <!-- Ruedas anfibias inflables -->
        <circle cx="9" cy="20" r="3.5" fill="#38bdf8" stroke="#1e293b" stroke-width="2"/>
        <circle cx="23" cy="20" r="3.5" fill="#38bdf8" stroke="#1e293b" stroke-width="2"/>
        <path d="M13 16h7l3 4" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      </g>
    `
  },
  {
    type: "bajada_comun",
    categoria: "accesos",
    titulo: "Bajada Común a Playa",
    badgeLabel: "Bajada Común",
    defaultSize: 42,
    descripcion: "Sendero peatonal natural hacia la playa.",
    svgContent: `
      <g>
        <circle cx="16" cy="6" r="3" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.8"/>
        <path d="M16 10v7l4 6M16 17l-4 6" stroke="#1e293b" stroke-width="2.8" stroke-linecap="round"/>
        <path d="M5 26h22" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
      </g>
    `
  },
  {
    type: "playa_accesible_silla",
    categoria: "accesos",
    titulo: "Playa Accesible / Silla de Ruedas",
    badgeLabel: "Playa Accesible",
    defaultSize: 50,
    descripcion: "Playa accesible con rampa hacia el agua, pasarela plana y atención para personas en silla de ruedas o movilidad reducida.",
    svgContent: `
      <g>
        <!-- Rampa sobre la arena hacia el agua -->
        <path d="M2 24l28-5v7H2z" fill="#38bdf8" stroke="#1e293b" stroke-width="2"/>
        <!-- Sol radiante -->
        <circle cx="25" cy="6" r="3.5" fill="#facc15" stroke="#1e293b" stroke-width="1.5"/>
        <!-- Persona en silla de ruedas -->
        <circle cx="13" cy="8" r="3" fill="#fde047" stroke="#1e293b" stroke-width="1.8"/>
        <!-- Rueda de la silla -->
        <circle cx="11" cy="18" r="5" fill="#ffffff" stroke="#0284c7" stroke-width="2.5"/>
        <circle cx="11" cy="18" r="1.5" fill="#1e293b"/>
        <!-- Cuerpo y brazos impulsando -->
        <path d="M13 12h4l3 5M16 16l4 4" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Bandera verde de accesibilidad -->
        <line x1="22" y1="12" x2="22" y2="22" stroke="#1e293b" stroke-width="1.5"/>
        <polygon points="22,12 28,14 22,16" fill="#10b981" stroke="#1e293b" stroke-width="1.2"/>
      </g>
    `
  },
  {
    type: "ingreso_balneario",
    categoria: "accesos",
    titulo: "Ingreso / Portal del Balneario",
    badgeLabel: "Acceso Balneario",
    defaultSize: 52,
    descripcion: "Entrada principal al balneario desde Ruta Interbalnearia o avenida con cartel de bienvenida.",
    svgContent: `
      <g>
        <!-- Columnas del pórtico de entrada -->
        <line x1="5" y1="8" x2="5" y2="28" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
        <line x1="27" y1="8" x2="27" y2="28" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
        <!-- Techo a dos aguas de madera/teja -->
        <polygon points="16,3 2,9 30,9" fill="#f59e0b" stroke="#1e293b" stroke-width="2" stroke-linejoin="round"/>
        <!-- Cartel de bienvenida colgado -->
        <rect x="7" y="10" width="18" height="7" rx="1.5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
        <text x="16" y="15" font-size="4" font-weight="900" fill="#0284c7" text-anchor="middle" font-family="sans-serif">ACCESO</text>
        <!-- Detalles decorativos -->
        <circle cx="16" cy="22" r="3" fill="#facc15" stroke="#1e293b" stroke-width="1.5"/>
        <path d="M13 22h6M16 19v6" stroke="#0284c7" stroke-width="1.2"/>
      </g>
    `
  },

  // --- SEGURIDAD Y GUARDAVIDAS ---
  {
    type: "puesto_guardavidas",
    categoria: "seguridad",
    titulo: "Caseta de Guardavidas",
    badgeLabel: "Guardavidas",
    defaultSize: 52,
    descripcion: "Caseta de madera de guardavidas con torre en pilotes y bandera de playa.",
    svgContent: `
      <g>
        <!-- Caseta sobre pilotes estilo Florida doodle -->
        <rect x="7" y="9" width="18" height="11" rx="1.5" fill="#f87171" stroke="#1e293b" stroke-width="2"/>
        <polygon points="5,9 16,3 27,9" fill="#ef4444" stroke="#1e293b" stroke-width="2.2" stroke-linejoin="round"/>
        <!-- Pilotes de madera -->
        <line x1="10" y1="20" x2="8" y2="28" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="22" y1="20" x2="24" y2="28" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="9" y1="24" x2="23" y2="24" stroke="#1e293b" stroke-width="2"/>
        <!-- Ventana y salvavidas -->
        <rect x="13" y="11" width="6" height="5" fill="#fef08a" stroke="#1e293b" stroke-width="1.5"/>
        <circle cx="20" cy="15" r="2.5" fill="#ffffff" stroke="#ef4444" stroke-width="1.5"/>
        <!-- Mástil y bandera roja -->
        <line x1="16" y1="3" x2="16" y2="0" stroke="#1e293b" stroke-width="1.5"/>
        <polygon points="16,0 21,2 16,4" fill="#dc2626"/>
      </g>
    `
  },
  {
    type: "sin_guardavidas",
    categoria: "seguridad",
    titulo: "Zona Sin Guardavidas",
    badgeLabel: "Sin Guardavidas",
    defaultSize: 44,
    descripcion: "Zona costera sin cobertura de guardavidas. Precaución con las corrientes.",
    svgContent: `
      <g>
        <polygon points="16,3 3,26 29,26" fill="#fde047" stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round"/>
        <line x1="16" y1="11" x2="16" y2="18" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
        <circle cx="16" cy="22" r="1.8" fill="#1e293b"/>
      </g>
    `
  },
  {
    type: "policia_destacamento",
    categoria: "seguridad",
    titulo: "Policía / Seguridad",
    badgeLabel: "Policía",
    defaultSize: 46,
    descripcion: "Destacamento policial o patrullaje de seguridad.",
    svgContent: `
      <g>
        <path d="M16 2L6 6v9c0 6 10 11 10 11s10-5 10-11V6l-10-4z" fill="#38bdf8" stroke="#1e293b" stroke-width="2.2"/>
        <polygon points="16,9 18,13 22,14 19,17 20,21 16,19 12,21 13,17 10,14 14,13" fill="#facc15" stroke="#1e293b" stroke-width="1.2"/>
      </g>
    `
  },
  {
    type: "primeros_auxilios",
    categoria: "seguridad",
    titulo: "Primeros Auxilios / Desfibrilador",
    badgeLabel: "Primeros Auxilios",
    defaultSize: 44,
    descripcion: "Botiquín y equipo de reanimación cardíaca DEA.",
    svgContent: `
      <g>
        <rect x="4" y="8" width="24" height="18" rx="4" fill="#ef4444" stroke="#1e293b" stroke-width="2.2"/>
        <path d="M16 12v10M11 17h10" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M11 8V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" stroke="#1e293b" stroke-width="2" fill="none"/>
      </g>
    `
  },
  {
    type: "emergencia_medica",
    categoria: "seguridad",
    titulo: "Emergencia Médica / Ambulancia",
    badgeLabel: "Emergencia",
    defaultSize: 52,
    descripcion: "Servicio de urgencia médica móvil, paramédicos y traslado en ambulancia.",
    svgContent: `
      <g>
        <!-- Carrocería de ambulancia blanca -->
        <path d="M4 11h14v11H4z" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
        <path d="M18 14h6l4 4v4h-10z" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
        <!-- Ventanas -->
        <rect x="19" y="15" width="5" height="3" rx="0.5" fill="#38bdf8" stroke="#1e293b" stroke-width="1.2"/>
        <!-- Franja roja y Cruz Médica -->
        <rect x="4" y="16" width="14" height="3" fill="#ef4444"/>
        <path d="M10 13v6M7 16h6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
        <!-- Sirena azul destellante -->
        <polygon points="12,8 14,8 15,11 11,11" fill="#38bdf8" stroke="#1e293b" stroke-width="1.2"/>
        <line x1="10" y1="7" x2="8" y2="6" stroke="#facc15" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="16" y1="7" x2="18" y2="6" stroke="#facc15" stroke-width="1.5" stroke-linecap="round"/>
        <!-- Ruedas -->
        <circle cx="9" cy="22" r="3.2" fill="#1e293b"/>
        <circle cx="9" cy="22" r="1.2" fill="#ffffff"/>
        <circle cx="23" cy="22" r="3.2" fill="#1e293b"/>
        <circle cx="23" cy="22" r="1.2" fill="#ffffff"/>
      </g>
    `
  },
  {
    type: "estacion_bomberos",
    categoria: "seguridad",
    titulo: "Estación / Destacamento de Bomberos",
    badgeLabel: "Bomberos",
    defaultSize: 52,
    descripcion: "Destacamento de Bomberos con camión cisterna, escalera y combate de incendios costeros.",
    svgContent: `
      <g>
        <!-- Camión de bomberos rojo clásico -->
        <path d="M3 12h17v10H3z" fill="#dc2626" stroke="#1e293b" stroke-width="2"/>
        <path d="M20 15h5l4 3v4h-9z" fill="#dc2626" stroke="#1e293b" stroke-width="2"/>
        <!-- Ventana cabina -->
        <rect x="21" y="16" width="4.5" height="3" rx="0.5" fill="#e0f2fe" stroke="#1e293b" stroke-width="1.2"/>
        <!-- Escalera de rescate -->
        <line x1="4" y1="9" x2="18" y2="9" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
        <line x1="6" y1="8" x2="6" y2="10" stroke="#1e293b" stroke-width="1.2"/>
        <line x1="10" y1="8" x2="10" y2="10" stroke="#1e293b" stroke-width="1.2"/>
        <line x1="14" y1="8" x2="14" y2="10" stroke="#1e293b" stroke-width="1.2"/>
        <!-- Sirena destellante -->
        <circle cx="23" cy="13" r="2" fill="#facc15" stroke="#1e293b" stroke-width="1.2"/>
        <!-- Manguera / detalles amarillos -->
        <rect x="6" y="14" width="9" height="4" rx="1" fill="#fde047" stroke="#1e293b" stroke-width="1.2"/>
        <!-- Ruedas -->
        <circle cx="8" cy="22" r="3.2" fill="#1e293b"/>
        <circle cx="8" cy="22" r="1.2" fill="#ffffff"/>
        <circle cx="22" cy="22" r="3.2" fill="#1e293b"/>
        <circle cx="22" cy="22" r="1.2" fill="#ffffff"/>
      </g>
    `
  },

  // --- TRÁNSITO Y VELOCIDAD ---
  {
    type: "limite_velocidad_30",
    categoria: "vialidad",
    titulo: "Límite de Velocidad 30 km/h",
    badgeLabel: "Máx 30 km/h",
    defaultSize: 44,
    descripcion: "Cartel reglamentario de velocidad máxima permitida de 30 km/h para calles residenciales y ramblas.",
    svgContent: `
      <g>
        <!-- Poste de señalización -->
        <line x1="16" y1="20" x2="16" y2="29" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
        <!-- Disco reglamentario rojo/blanco -->
        <circle cx="16" cy="12" r="10.5" fill="#ef4444" stroke="#1e293b" stroke-width="2"/>
        <circle cx="16" cy="12" r="7.5" fill="#ffffff"/>
        <!-- Número 30 en negrita -->
        <text x="16" y="15.5" font-size="8" font-weight="900" fill="#1e293b" text-anchor="middle" font-family="'Nunito', sans-serif">30</text>
      </g>
    `
  },
  {
    type: "limite_velocidad_45",
    categoria: "vialidad",
    titulo: "Límite de Velocidad 45 km/h",
    badgeLabel: "Máx 45 km/h",
    defaultSize: 44,
    descripcion: "Cartel reglamentario de velocidad máxima de 45 km/h para avenidas principales del balneario.",
    svgContent: `
      <g>
        <!-- Poste de señalización -->
        <line x1="16" y1="20" x2="16" y2="29" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
        <!-- Disco reglamentario rojo/blanco -->
        <circle cx="16" cy="12" r="10.5" fill="#ef4444" stroke="#1e293b" stroke-width="2"/>
        <circle cx="16" cy="12" r="7.5" fill="#ffffff"/>
        <!-- Número 45 en negrita -->
        <text x="16" y="15.5" font-size="7.5" font-weight="900" fill="#1e293b" text-anchor="middle" font-family="'Nunito', sans-serif">45</text>
      </g>
    `
  },
  {
    type: "limite_velocidad_60",
    categoria: "vialidad",
    titulo: "Límite de Velocidad 60 km/h",
    badgeLabel: "Máx 60 km/h",
    defaultSize: 44,
    descripcion: "Cartel reglamentario de velocidad máxima de 60 km/h para accesos, conectores y Rutas.",
    svgContent: `
      <g>
        <!-- Poste de señalización -->
        <line x1="16" y1="20" x2="16" y2="29" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
        <!-- Disco reglamentario rojo/blanco -->
        <circle cx="16" cy="12" r="10.5" fill="#ef4444" stroke="#1e293b" stroke-width="2"/>
        <circle cx="16" cy="12" r="7.5" fill="#ffffff"/>
        <!-- Número 60 en negrita -->
        <text x="16" y="15.5" font-size="8" font-weight="900" fill="#1e293b" text-anchor="middle" font-family="'Nunito', sans-serif">60</text>
      </g>
    `
  },

  // --- NATURALEZA Y FAUNA ---
  {
    type: "fauna_delfin",
    categoria: "naturaleza",
    titulo: "Delfín / Tonina / Franciscana",
    badgeLabel: "Delfín",
    defaultSize: 48,
    descripcion: "Delfín franciscana o tonina saltando en el Río de la Plata.",
    svgContent: `
      <g>
        <path d="M4 19c6-8 15-9 22-2-4 1-8 4-10 8-3-4-8-6-12-6z" fill="#38bdf8" stroke="#1e293b" stroke-width="2" stroke-linejoin="round"/>
        <path d="M18 10c0-3 3-5 5-5-1 3-1 5 0 7" fill="#0284c7" stroke="#1e293b" stroke-width="1.5"/>
        <circle cx="8" cy="18" r="1.2" fill="#1e293b"/>
      </g>
    `
  },
  {
    type: "fauna_tortuga",
    categoria: "naturaleza",
    titulo: "Tortuga Marina",
    badgeLabel: "Tortuga Marina",
    defaultSize: 46,
    descripcion: "Tortuga marina verde o laúd en aguas costeras.",
    svgContent: `
      <g>
        <ellipse cx="16" cy="16" rx="7" ry="8" fill="#34d399" stroke="#1e293b" stroke-width="2"/>
        <circle cx="16" cy="6" r="3" fill="#fde047" stroke="#1e293b" stroke-width="1.8"/>
        <!-- Aletas -->
        <path d="M9 11L3 7M23 11l6-4M10 22l-5 4M22 22l5 4" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="16" cy="16" r="3" fill="#059669"/>
      </g>
    `
  },
  {
    type: "fauna_ballena",
    categoria: "naturaleza",
    titulo: "Cola de Ballena Franca Austral",
    badgeLabel: "Ballena Franca",
    defaultSize: 48,
    descripcion: "Avistamiento de la Ballena Franca Austral en su viaje invernal.",
    svgContent: `
      <g>
        <path d="M16 28c0-7 6-12 12-14-4-2-9-1-12 4-3-5-8-6-12-4 6 2 12 7 12 14z" fill="#93c5fd" stroke="#1e293b" stroke-width="2.2" stroke-linejoin="round"/>
        <circle cx="16" cy="22" r="1.8" fill="#1e293b"/>
      </g>
    `
  },
  {
    type: "vegetacion_psamofila",
    categoria: "naturaleza",
    titulo: "Monte y Vegetación Psamófila",
    badgeLabel: "Monte Psamófilo",
    defaultSize: 46,
    descripcion: "Pastos dibujantes, matorral espinoso y vegetación nativa fijadora de dunas.",
    svgContent: `
      <g>
        <line x1="16" y1="28" x2="16" y2="16" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M16 16c-2-5-7-8-11-7 1 5 6 8 11 7z" fill="#86efac" stroke="#1e293b" stroke-width="2"/>
        <path d="M16 13c2-5 7-8 11-7-1 5-6 8-11 7z" fill="#4ade80" stroke="#1e293b" stroke-width="2"/>
        <circle cx="16" cy="8" r="4" fill="#22c55e" stroke="#1e293b" stroke-width="2"/>
      </g>
    `
  },
  {
    type: "dunas_vivas",
    categoria: "naturaleza",
    titulo: "Cordón Dunar Vivo",
    badgeLabel: "Dunas Vivas",
    defaultSize: 46,
    descripcion: "Dunas móviles primarias que alimentan y protegen la costa.",
    svgContent: `
      <g>
        <path d="M3 24c4-5 9-7 15-2 5 4 8 3 11 0" stroke="#facc15" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <path d="M6 28c4-4 9-5 15-1" stroke="#eab308" stroke-width="3" stroke-linecap="round" fill="none"/>
        <circle cx="23" cy="9" r="4" fill="#fde047" stroke="#1e293b" stroke-width="1.8"/>
      </g>
    `
  },

  // --- CARTELES DE CONCIENCIA Y EDUCACIÓN ---
  {
    type: "cuidemos_naturaleza",
    categoria: "conciencia",
    titulo: "¡Cuidemos la Naturaleza!",
    badgeLabel: "Cuidá la Naturaleza",
    defaultSize: 44,
    descripcion: "Disfrutemos de la playa respetando la flora y fauna nativa.",
    svgContent: `
      <g>
        <path d="M16 28l-2-1.8C7 20 3 16 3 11c0-4 3-7 7-7 2.3 0 4.5 1 6 2.8 1.5-1.8 3.7-2.8 6-2.8 4 0 7 3 7 7 0 5-4 9-11 15.2L16 28z" fill="#4ade80" stroke="#1e293b" stroke-width="2.2"/>
        <path d="M16 11c2-3 5-1 5 2s-3 4-5 6" stroke="#1e293b" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      </g>
    `
  },
  {
    type: "no_vehiculos",
    categoria: "conciencia",
    titulo: "¡Prohibido Vehículos en Dunas y Playa!",
    badgeLabel: "Vehículos Prohibidos",
    defaultSize: 46,
    descripcion: "Prohibido circular con camionetas 4x4, motos o cuatriciclos en arena y dunas.",
    svgContent: `
      <g>
        <circle cx="16" cy="16" r="13" fill="#f87171" stroke="#1e293b" stroke-width="2.5"/>
        <rect x="9" y="13" width="14" height="6" rx="1.5" fill="#ffffff" stroke="#1e293b" stroke-width="1.5"/>
        <circle cx="12" cy="19.5" r="2" fill="#1e293b"/>
        <circle cx="20" cy="19.5" r="2" fill="#1e293b"/>
        <line x1="6" y1="26" x2="26" y2="6" stroke="#991b1b" stroke-width="3.5" stroke-linecap="round"/>
      </g>
    `
  },
  {
    type: "cielo_nocturno",
    categoria: "conciencia",
    titulo: "¡Todos Necesitamos Oscuridad!",
    badgeLabel: "Cielo Nocturno",
    defaultSize: 44,
    descripcion: "Cuidemos el cielo nocturno y evitemos luces que desorienten a tortugas y aves.",
    svgContent: `
      <g>
        <circle cx="16" cy="16" r="13" fill="#312e81" stroke="#1e293b" stroke-width="2.5"/>
        <path d="M21 19A9 9 0 1 1 12 9a7.5 7.5 0 0 0 9 10z" fill="#facc15" stroke="#1e293b" stroke-width="1.8"/>
        <circle cx="21" cy="7" r="1.5" fill="#fde047"/>
        <circle cx="24" cy="12" r="1" fill="#fde047"/>
      </g>
    `
  },
  {
    type: "llevate_residuos",
    categoria: "conciencia",
    titulo: "¡Llevate tus Residuos / Playa Limpia!",
    badgeLabel: "Playa Limpia",
    defaultSize: 44,
    descripcion: "Playa libre de plásticos y colillas. Llevate tus residuos de vuelta.",
    svgContent: `
      <g>
        <path d="M8 9l1.5 16a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2L24 9" fill="#6ee7b7" stroke="#1e293b" stroke-width="2"/>
        <line x1="5" y1="9" x2="27" y2="9" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M12 9V6a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 20 6v3" stroke="#1e293b" stroke-width="2" fill="none"/>
        <line x1="13" y1="14" x2="13" y2="21" stroke="#1e293b" stroke-width="1.8"/>
        <line x1="19" y1="14" x2="19" y2="21" stroke="#1e293b" stroke-width="1.8"/>
      </g>
    `
  },
  {
    type: "no_fuego",
    categoria: "conciencia",
    titulo: "¡Prohibido Fuego en Playa y Bosque!",
    badgeLabel: "Fuego Prohibido",
    defaultSize: 44,
    descripcion: "Edicto del Fuego: No encender fogatas en arena, dunas ni pinares.",
    svgContent: `
      <g>
        <circle cx="16" cy="16" r="13" fill="#ef4444" stroke="#1e293b" stroke-width="2.5"/>
        <path d="M16 8c1 4 4 5 4 8a4 4 0 0 1-8 0c0-3 2-4 4-8z" fill="#facc15" stroke="#1e293b" stroke-width="1.5"/>
        <line x1="6" y1="26" x2="26" y2="6" stroke="#7f1d1d" stroke-width="3.5" stroke-linecap="round"/>
      </g>
    `
  }
];

// Generador de Sticker Ilustrado con anclaje de precisión milimétrica en la base
function createStickerIconSVG(markerDef, options = {}) {
  const size = options.size || markerDef.defaultSize || 46;
  const label = options.label || markerDef.badgeLabel || "";
  const showLabel = options.showLabel !== undefined ? options.showLabel : true;

  // El sticker mide 32x32 internamente en el viewBox y se escala al tamaño deseado
  return `
    <div class="sticker-marker-root" style="width: ${size}px; height: ${size}px;">
      <div class="sticker-art-wrap" style="width: ${size}px; height: ${size}px;">
        <svg viewBox="0 0 32 32" class="sticker-svg">
          ${markerDef.svgContent}
        </svg>
      </div>
      ${showLabel && label ? `<div class="sticker-label-pill">${label}</div>` : ''}
    </div>
  `;
}
