// Capas oficiales e ilustradas del Municipio de La Floresta (Canelones, Uruguay)
// Faja Costera desde Arroyo Solís Chico a Arroyo Solís Grande hasta la Ruta Interbalnearia

// Puntos detallados de la ribera costera
const coastline_coords = [
  [-55.7142, -34.7663], // Boca Solís Chico
  [-55.7050, -34.7645],
  [-55.6980, -34.7628],
  [-55.6932, -34.7621], // Las Vegas
  [-55.6826, -34.7616], // La Floresta
  [-55.6791, -34.7620], // Hotel Casino La Floresta
  [-55.6738, -34.7624], // Calle Negra
  [-55.6686, -34.7645], // Costa Azul
  [-55.6622, -34.7673], // Sarandí
  [-55.6594, -34.7695],
  [-55.6534, -34.7762], // Club Costa Azul
  [-55.6440, -34.7771], // Bello Horizonte
  [-55.6381, -34.7755], // Guazuvirá Nuevo
  [-55.6260, -34.7735],
  [-55.6133, -34.7716], // Guazuvirá Viejo
  [-55.6005, -34.7717], // San Luis
  [-55.5939, -34.7736], // San Luis Timón
  [-55.5775, -34.7826], // San Luis Este
  [-55.5675, -34.7837], // Los Titanes
  [-55.5618, -34.7846], // La Tuna
  [-55.5545, -34.7894], // Araminda
  [-55.5468, -34.7891], // Santa Lucía del Este
  [-55.5381, -34.7920],
  [-55.5307, -34.7956], // Corralitos
  [-55.5059, -34.7941], // Biarritz
  [-55.4999, -34.7948], // Cuchilla Alta
  [-55.4870, -34.7975], // El Galeón / Sierra del Mar
  [-55.4768, -34.7958], // Santa Ana
  [-55.4644, -34.7942],
  [-55.4516, -34.7932], // Balneario Argentino
  [-55.4437, -34.7919],
  [-55.4194, -34.7902], // Jaureguiberry
  [-55.4118, -34.7896],
  [-55.4080, -34.7902],
  [-55.4005, -34.7890]  // Boca Solís Grande
];

// Eje de la Ruta Interbalnearia Líber Seregni
const interbalnearia_coords = [
  [-55.7115, -34.7577], // Puente Solís Chico
  [-55.7030, -34.7562],
  [-55.6960, -34.7550], // Entrada Las Vegas
  [-55.6880, -34.7542],
  [-55.6790, -34.7538], // Intercambiador La Floresta (Ruta 35)
  [-55.6690, -34.7550],
  [-55.6560, -34.7580], // Entrada Costa Azul
  [-55.6420, -34.7600], // Entrada Bello Horizonte
  [-55.6250, -34.7640], // Entrada Guazuvirá
  [-55.5970, -34.7660], // Entrada San Luis
  [-55.5800, -34.7700],
  [-55.5680, -34.7740], // Entrada Los Titanes / La Tuna
  [-55.5520, -34.7770], // Entrada Araminda
  [-55.5350, -34.7810], // Entrada Santa Lucía del Este
  [-55.5180, -34.7825],
  [-55.5030, -34.7830], // Entrada Cuchilla Alta / Biarritz
  [-55.4850, -34.7845], // Entrada El Galeón
  [-55.4720, -34.7850], // Entrada Santa Ana
  [-55.4450, -34.7845], // Entrada Balneario Argentino
  [-55.4190, -34.7810], // Entrada Jaureguiberry
  [-55.4060, -34.7825],
  [-55.3950, -34.7850]  // Puente Solís Grande
];

// Faja Costera Polygon
const faja_costera_poly = [
  ...coastline_coords,
  [-55.3980, -34.7880],
  [-55.3950, -34.7850],
  ...[...interbalnearia_coords].reverse(),
  [-55.7125, -34.7600],
  [-55.7135, -34.7630],
  coastline_coords[0]
];

// Franja Dorada de Playa (Sand Ribbon) ~ 120 metros de ancho
const sand_ribbon_poly = [
  ...coastline_coords,
  [-55.4020, -34.7878],
  ...coastline_coords.map(pt => [pt[0], pt[1] + 0.0018]).reverse(),
  coastline_coords[0]
];

// Cursos de agua interiores
const arroyos_floresta = [
  {
    nombre: "Arroyo Solís Chico",
    coords: [
      [-55.7142, -34.7663], [-55.7130, -34.7620], [-55.7115, -34.7577],
      [-55.7080, -34.7450], [-55.7000, -34.7200]
    ]
  },
  {
    nombre: "Arroyo Sarandí",
    coords: [
      [-55.6700, -34.7650], [-55.6710, -34.7580], [-55.6730, -34.7520]
    ]
  },
  {
    nombre: "Arroyo del Bagre",
    coords: [
      [-55.6500, -34.7760], [-55.6520, -34.7680], [-55.6530, -34.7590]
    ]
  },
  {
    nombre: "Arroyo La Tuna",
    coords: [
      [-55.5618, -34.7846], [-55.5640, -34.7780], [-55.5680, -34.7720]
    ]
  },
  {
    nombre: "Arroyo de la Coronilla",
    coords: [
      [-55.5250, -34.7930], [-55.5230, -34.7860], [-55.5210, -34.7800]
    ]
  },
  {
    nombre: "Arroyo Solís Grande",
    coords: [
      [-55.4005, -34.7890], [-55.3980, -34.7870], [-55.3950, -34.7850],
      [-55.3900, -34.7750], [-55.3850, -34.7600]
    ]
  }
];

// Lista de Balnearios de La Floresta con coordenadas e información
const balnearios = [
  { nombre: "Las Vegas", lat: -34.760, lng: -55.694, km: "km 51", desc: "Playa agreste junto a la desembocadura de Solís Chico." },
  { nombre: "La Floresta", lat: -34.760, lng: -55.680, km: "km 52-54", desc: "Balneario histórico fundado en 1909, rambla arbolada, Hotel Casino." },
  { nombre: "Costa Azul", lat: -34.768, lng: -55.661, km: "km 55", desc: "Playa rocosa y arenosa, Club Costa Azul y gran vida comunitaria." },
  { nombre: "Bello Horizonte", lat: -34.775, lng: -55.642, km: "km 57", desc: "Tranquilidad, bosques de pinos y extensas arenas." },
  { nombre: "Guazuvirá Nuevo", lat: -34.773, lng: -55.635, km: "km 58", desc: "Cordón dunar activo y fuerte compromiso vecinal con la conservación." },
  { nombre: "Guazuvirá Viejo", lat: -34.770, lng: -55.613, km: "km 60", desc: "Pesca artesanal, dunas vírgenes y monte psamófilo." },
  { nombre: "San Luis", lat: -34.772, lng: -55.596, km: "km 62", desc: "Gran curva de playa, bajadas tradicionales y gastronomía." },
  { nombre: "Los Titanes", lat: -34.781, lng: -55.568, km: "km 64", desc: "Club social y deportivo, actividades náuticas y recreativas." },
  { nombre: "La Tuna", lat: -34.782, lng: -55.561, km: "km 65", desc: "Playa agreste, pasarelas de madera y arroyo meandriforme." },
  { nombre: "Araminda", lat: -34.786, lng: -55.553, km: "km 66", desc: "Punta de rocas, pozas marinas y gran pesquero costero." },
  { nombre: "Santa Lucía del Este", lat: -34.789, lng: -55.538, km: "km 68", desc: "Aguas oceánicas claras, barrancas arboladas y calas." },
  { nombre: "Biarritz", lat: -34.792, lng: -55.508, km: "km 70", desc: "Dunas suaves y entorno natural agreste." },
  { nombre: "Cuchilla Alta", lat: -34.793, lng: -55.498, km: "km 72", desc: "Famoso por su chorro natural de agua dulce y las barrancas más altas de Canelones." },
  { nombre: "El Galeón / Sierra del Mar", lat: -34.795, lng: -55.485, km: "km 73", desc: "Playa de arenas gruesas y vegetación marítima." },
  { nombre: "Santa Ana", lat: -34.793, lng: -55.468, km: "km 74", desc: "Bosques de pinos y eucaliptos que bajan hasta el mar." },
  { nombre: "Balneario Argentino", lat: -34.791, lng: -55.447, km: "km 75", desc: "Playas abiertas y amplias fajas de dunas vivas." },
  { nombre: "Jaureguiberry", lat: -34.787, lng: -55.414, km: "km 78-80", desc: "Ecoparque, escuela sustentable y desembocadura del Solís Grande." }
];

const COSTA_LAYERS = {
  fajaCosteraGeoJSON: {
    type: "Feature",
    properties: {
      name: "Faja Costera Municipio de La Floresta",
      descripcion: "Faja costera entre el Río de la Plata y la Ruta Interbalnearia Líber Seregni, desde Arroyo Solís Chico a Arroyo Solís Grande."
    },
    geometry: {
      type: "Polygon",
      coordinates: [faja_costera_poly]
    }
  },
  sandRibbonGeoJSON: {
    type: "Feature",
    properties: { name: "Franja de Playa y Dunas" },
    geometry: {
      type: "Polygon",
      coordinates: [sand_ribbon_poly]
    }
  },
  interbalneariaGeoJSON: {
    type: "Feature",
    properties: { name: "Ruta Interbalnearia General Líber Seregni" },
    geometry: {
      type: "LineString",
      coordinates: interbalnearia_coords
    }
  },
  arroyos: arroyos_floresta,
  balnearios: balnearios
};
