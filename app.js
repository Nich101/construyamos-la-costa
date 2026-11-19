// Costas Vivas · Constructor Gamificado de Mapas Costeros
// Municipio de La Floresta (Canelones, Uruguay)
// Stickers ilustrados (Doodle Art) con anclaje matemático de alta precisión

document.addEventListener('DOMContentLoaded', () => {
  // Estado de la aplicación
  let map;
  let activeTileLayer;
  let currentMapStyle = 'illustrated'; // 'illustrated' o 'satellite'
  let placedMarkers = []; // Inicia 100% VACÍO, sin íconos previos
  let activeFilterCat = 'all';
  let placingMarkerType = null;
  let isAdminMode = true; // Modo Administrador por defecto
  let activePlacementSize = 48; // Tamaño activo para nuevos stickers (S, M, L, XL)
  let soundEnabled = true;
  let labelsAlwaysVisible = false; // Control de visualización de etiquetas

  // Audio sintetizado Web Audio API (efectos de sonido lúdicos sin archivos externos)
  let audioCtx = null;
  function playPopSound(freq = 520, duration = 0.08) {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + duration);
      gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  // Proveedores de mapa base temáticos (100% libres de API key y sin marcas de agua)
  const TILE_PROVIDERS = {
    illustrated: () => L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors · Municipio de La Floresta'
    }),
    callejero_antiguo: () => L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors · Callejero de Época'
    }),
    pirate: () => L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap · Estilo Pergamino Pirata'
    }),
    satellite: () => L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: '© Esri, Maxar, Earthstar Geographics'
    }),
    topo: () => L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: '© Esri, HERE, Garmin, Intermap'
    })
  };

  // Límites para mantener el foco en la faja costera del Municipio de La Floresta
  const FLORESTA_BOUNDS = L.latLngBounds(
    [-34.84, -55.75], // Sudoeste (Solís Chico y orilla)
    [-34.72, -55.37]  // Noreste (Solís Grande e Interbalnearia)
  );

  // 1. Inicialización del Mapa
  function initMap() {
    // SIN NINGÚN POLÍGONO EN EL MAPA (Lienzo 100% limpio y despejado)
    map = L.map('map', {
      center: [-34.778, -55.565],
      zoom: 12,
      minZoom: 11,
      maxZoom: 19,
      maxBounds: FLORESTA_BOUNDS,
      maxBoundsViscosity: 0.85,
      zoomControl: false
    });

    // Control de zoom
    L.control.zoom({ position: 'topleft' }).addTo(map);

    // Cargar mapa base inicial
    setMapStyle('illustrated');

    // Manejo de zoom para evitar colisiones de etiquetas cuando se aleja el mapa
    updateZoomCompactMode();
    map.on('zoomend', updateZoomCompactMode);

    // Configurar eventos de arrastrar y soltar
    setupMapEvents();

    // Cargar autoguardado previo si existe
    loadAutoSave();
  }

  // Al alejar el mapa (zoom < 14), oculta etiquetas de texto para evitar el empastado visto en la captura
  function updateZoomCompactMode() {
    const mapEl = document.getElementById('map');
    if (!mapEl) return;
    if (labelsAlwaysVisible) {
      mapEl.classList.remove('zoom-compact-mode');
    } else if (map.getZoom() < 14) {
      mapEl.classList.add('zoom-compact-mode');
    } else {
      mapEl.classList.remove('zoom-compact-mode');
    }
  }

  // 2. Alternar entre Estilos y Temáticas de Mapa Base
  function setMapStyle(style) {
    if (!TILE_PROVIDERS[style]) return;
    currentMapStyle = style;

    if (activeTileLayer) {
      map.removeLayer(activeTileLayer);
    }
    activeTileLayer = TILE_PROVIDERS[style]();
    activeTileLayer.addTo(map);
    activeTileLayer.bringToBack();

    const container = document.getElementById('mapCanvasArea');
    if (container) {
      container.className = 'map-canvas-area map-style-' + style;
    }

    const select = document.getElementById('selectBasemap');
    if (select && select.value !== style) {
      select.value = style;
    }

    const styleNames = {
      illustrated: 'Cómic Costero Ilustrado 🎨',
      callejero_antiguo: 'Callejero de Época (Plano Retro) 🏛️',
      pirate: 'Mapa Pirata del Tesoro 🏴‍☠️',
      satellite: 'Satélite Real de Alta Resolución 🛰️',
      topo: 'Topográfico & Relieve 🧭'
    };
    showToast(`Fondo: ${styleNames[style] || style}`, '🗺️');
  }

  // 3. Renderizar Inventario Vertical de Stickers Ilustrados
  function renderDockInventory() {
    const grid = document.getElementById('dockInventory');
    if (!grid) return;
    grid.innerHTML = '';

    const searchInput = document.getElementById('dockSearchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

    const filtered = MARKER_CATALOG.filter(m => {
      const matchCat = (activeFilterCat === 'all' || m.categoria === activeFilterCat);
      const matchSearch = (!searchTerm || 
        m.titulo.toLowerCase().includes(searchTerm) || 
        m.badgeLabel.toLowerCase().includes(searchTerm) || 
        m.descripcion.toLowerCase().includes(searchTerm)
      );
      return matchCat && matchSearch;
    });

    filtered.forEach(m => {
      const card = document.createElement('div');
      card.className = 'game-item-card';
      card.draggable = true;
      card.dataset.markerType = m.type;

      card.innerHTML = `
        <div class="game-item-avatar">
          <svg viewBox="0 0 32 32">
            ${m.svgContent}
          </svg>
        </div>
        <div class="game-item-name">${m.titulo}</div>
        <div class="game-item-tag">${m.badgeLabel}</div>
        <div class="game-drag-badge">✋ Arrastrar</div>
      `;

      card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', m.type);
        e.dataTransfer.effectAllowed = 'copy';
        playPopSound(440, 0.05);
      });

      card.addEventListener('click', () => {
        placingMarkerType = m.type;
        playPopSound(500, 0.06);
        showToast(`Hacé clic en la playa o calle para colocar "${m.titulo}"`, '🎯');
        document.getElementById('map').style.cursor = 'crosshair';
      });

      grid.appendChild(card);
    });
  }

  // 4. Configurar eventos de colocación (Drag & Drop y Clic)
  function setupMapEvents() {
    const mapDiv = document.getElementById('map');

    mapDiv.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    });

    mapDiv.addEventListener('drop', (e) => {
      e.preventDefault();
      if (!isAdminMode) return;

      const markerType = e.dataTransfer.getData('text/plain');
      if (!markerType) return;

      const rect = mapDiv.getBoundingClientRect();
      const containerPoint = L.point(e.clientX - rect.left, e.clientY - rect.top);
      const latlng = map.containerPointToLatLng(containerPoint);

      createPlacedMarker(markerType, latlng, { size: activePlacementSize });
    });

    map.on('click', (e) => {
      if (placingMarkerType && isAdminMode) {
        createPlacedMarker(placingMarkerType, e.latlng, { size: activePlacementSize });
        placingMarkerType = null;
        mapDiv.style.cursor = '';
      }
    });
  }

  // 5. Crear Marcador en el Mapa con Anclaje Fijo a la Coordenada Real
  function createPlacedMarker(type, latlng, customProps = {}) {
    const def = MARKER_CATALOG.find(m => m.type === type);
    if (!def) return;

    const id = 'marker_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
    const size = customProps.size || def.defaultSize || activePlacementSize;
    const title = customProps.title || def.titulo;
    const badge = customProps.badge !== undefined ? customProps.badge : def.badgeLabel;
    const notes = customProps.notes || '';

    // Generar sticker con anclaje exacto en la base de la ilustración
    const divIcon = createDoodleStickerIcon(def, size, badge);

    const marker = L.marker([latlng.lat, latlng.lng], {
      icon: divIcon,
      draggable: isAdminMode,
      zIndexOffset: 1000
    });

    const markerData = {
      id,
      type,
      title,
      badge,
      notes,
      size,
      lat: latlng.lat,
      lng: latlng.lng,
      leafletMarker: marker,
      def
    };

    marker.on('dragend', (e) => {
      const newPos = e.target.getLatLng();
      markerData.lat = newPos.lat;
      markerData.lng = newPos.lng;
      playPopSound(560, 0.07);
      saveAutoSave();
    });

    marker.on('click', () => {
      playPopSound(600, 0.08);
      showMarkerInPlaceCard(markerData);
    });

    marker.addTo(map);
    placedMarkers.push(markerData);

    playPopSound(720, 0.1);
    updatePlacedCount();
    renderPlacedList();
    saveAutoSave();

    showToast(`"${def.titulo}" colocado en el mapa`, '🎨');
    return markerData;
  }

  // Generador de ícono con anclaje en el centro inferior de la ilustración [size/2, size]
  function createDoodleStickerIcon(def, size, badge) {
    const totalHeight = size + 16;
    return L.divIcon({
      className: 'leaflet-doodle-sticker',
      html: createStickerIconSVG(def, { size, label: badge, showLabel: true }),
      iconSize: [size, totalHeight],
      iconAnchor: [size / 2, size] // ¡Ancla exactamente en el pie del sticker!
    });
  }

  // 6. Tarjeta Flotante In-Place con controles de tamaño y eliminación
  function showMarkerInPlaceCard(m) {
    const content = `
      <div style="min-width: 220px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
          <div style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <svg viewBox="0 0 32 32" style="width: 32px; height: 32px;">${m.def.svgContent}</svg>
          </div>
          <div>
            <div style="font-family: var(--font-game); font-size: 0.95rem; font-weight: 700; color: #1e293b; line-height: 1.1;">
              ${m.title}
            </div>
            <div style="font-size: 0.68rem; font-weight: 800; color: #0284c7;">
              ${m.badge}
            </div>
          </div>
        </div>

        <p style="font-size: 0.75rem; color: #475569; margin-bottom: 8px; line-height: 1.25;">
          ${m.notes || m.def.descripcion}
        </p>

        ${isAdminMode ? `
        <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 6px; border-top: 1.5px dashed #cbd5e1;">
          <div style="display: flex; align-items: center; gap: 4px;">
            <span style="font-size: 0.7rem; font-weight: 800; color: #64748b;">Tamaño:</span>
            <button class="game-btn" style="padding: 2px 7px; font-size: 0.75rem;" onclick="window.resizePlacedMarker('${m.id}', -6)">-</button>
            <span style="font-size: 0.75rem; font-weight: 800; color: #0284c7;">${m.size}px</span>
            <button class="game-btn" style="padding: 2px 7px; font-size: 0.75rem;" onclick="window.resizePlacedMarker('${m.id}', +6)">+</button>
          </div>
          <button class="game-btn game-btn-danger" style="padding: 2px 8px; font-size: 0.7rem;" onclick="window.deletePlacedMarker('${m.id}')">
            🗑️
          </button>
        </div>
        ` : ''}
      </div>
    `;

    L.popup({ className: 'game-marker-card-popup', offset: [0, -m.size] })
      .setLatLng([m.lat, m.lng])
      .setContent(content)
      .openOn(map);
  }

  // Funciones de redimensionamiento y borrado
  window.resizePlacedMarker = function(markerId, delta) {
    const m = placedMarkers.find(item => item.id === markerId);
    if (!m) return;
    const newSize = Math.max(26, Math.min(88, m.size + delta));
    m.size = newSize;
    m.leafletMarker.setIcon(createDoodleStickerIcon(m.def, m.size, m.badge));
    playPopSound(500 + delta * 20, 0.05);
    renderPlacedList();
    saveAutoSave();
    showMarkerInPlaceCard(m);
  };

  window.deletePlacedMarker = function(markerId) {
    const idx = placedMarkers.findIndex(m => m.id === markerId);
    if (idx !== -1) {
      map.closePopup();
      map.removeLayer(placedMarkers[idx].leafletMarker);
      placedMarkers.splice(idx, 1);
      playPopSound(320, 0.09);
      updatePlacedCount();
      renderPlacedList();
      saveAutoSave();
      showToast('Elemento eliminado', '🗑️');
    }
  };

  // 7. Lista de Elementos en el Cajón Inferior del Dock
  function renderPlacedList() {
    const list = document.getElementById('dockPlacedList');
    if (!list) return;
    list.innerHTML = '';

    if (placedMarkers.length === 0) {
      list.innerHTML = `
        <div style="text-align: center; padding: 1.5rem 0.5rem; color: #94a3b8; font-size: 0.75rem;">
          <div style="font-size: 1.6rem; margin-bottom: 0.2rem;">🏖️</div>
          El mapa está vacío.<br>Tomá stickers de la caja y arrastralos al mapa.
        </div>
      `;
      return;
    }

    placedMarkers.forEach(m => {
      const item = document.createElement('div');
      item.className = 'placed-mini-item';
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 6px; overflow: hidden;">
          <div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <svg viewBox="0 0 32 32" style="width: 20px; height: 20px;">${m.def.svgContent}</svg>
          </div>
          <span style="font-family: var(--font-game); font-size: 0.75rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${m.title} (${m.size}px)
          </span>
        </div>
        <div style="display: flex; gap: 3px;">
          <button class="game-btn" style="padding: 1px 5px; font-size: 0.7rem;" title="Reducir" onclick="window.resizePlacedMarker('${m.id}', -6)">-</button>
          <button class="game-btn" style="padding: 1px 5px; font-size: 0.7rem;" title="Aumentar" onclick="window.resizePlacedMarker('${m.id}', +6)">+</button>
          <button class="game-btn" style="padding: 1px 5px; font-size: 0.65rem;" title="Enfocar" onclick="window.focusPlacedMarker('${m.id}')">🎯</button>
        </div>
      `;
      list.appendChild(item);
    });
  }

  window.focusPlacedMarker = function(markerId) {
    const m = placedMarkers.find(item => item.id === markerId);
    if (!m) return;
    map.setView([m.lat, m.lng], 16, { animate: true });
    showMarkerInPlaceCard(m);
  };

  function updatePlacedCount() {
    const count = placedMarkers.length;
    const badge = document.getElementById('placedCountBadge');
    const label = document.getElementById('placedCount');
    if (badge) badge.textContent = count;
    if (label) label.textContent = count;
  }

  // 8. Barra Inferior de Balnearios (17 balnearios)
  function renderBalneariosBar() {
    const bar = document.getElementById('gameBalneariosBar');
    if (!bar) return;
    bar.innerHTML = '<span style="font-family: var(--font-game); font-size: 0.75rem; font-weight: 700; color: #0284c7; white-space: nowrap;">Balnearios:</span>';

    COSTA_LAYERS.balnearios.forEach(b => {
      const pill = document.createElement('button');
      pill.className = 'balneario-game-pill';
      pill.textContent = b.nombre;
      pill.addEventListener('click', () => {
        map.setView([b.lat, b.lng], 15, { animate: true });
        playPopSound(480, 0.06);
        showToast(`Vista de ${b.nombre} (${b.km})`, '📍');
      });
      bar.appendChild(pill);
    });
  }

  // 9. Alternar Modo Administrador / Modo Vista
  const btnToggleMode = document.getElementById('btnToggleMode');
  if (btnToggleMode) {
    btnToggleMode.addEventListener('click', () => {
      isAdminMode = !isAdminMode;
      if (isAdminMode) {
        document.body.classList.remove('mode-viewer');
        btnToggleMode.innerHTML = '👑 Modo Administrador';
        btnToggleMode.className = 'game-btn game-btn-primary';
        showToast('Modo Administrador activado', '👑');
      } else {
        document.body.classList.add('mode-viewer');
        btnToggleMode.innerHTML = '👁️ Modo Vista';
        btnToggleMode.className = 'game-btn';
        showToast('Modo Vista activado', '👁️');
      }

      placedMarkers.forEach(m => {
        if (m.leafletMarker.dragging) {
          if (isAdminMode) m.leafletMarker.dragging.enable();
          else m.leafletMarker.dragging.disable();
        }
      });
    });
  }

  // 10. Alternar Etiquetas Siempre / Compactas
  const btnToggleLabels = document.getElementById('btnToggleLabels');
  if (btnToggleLabels) {
    btnToggleLabels.addEventListener('click', () => {
      labelsAlwaysVisible = !labelsAlwaysVisible;
      btnToggleLabels.innerHTML = labelsAlwaysVisible ? '🏷️ Etiquetas: On' : '🏷️ Etiquetas: Auto';
      updateZoomCompactMode();
      showToast(labelsAlwaysVisible ? 'Etiquetas siempre visibles' : 'Etiquetas compactas en vista general', '🏷️');
    });
  }

  // 11. Sonido Sí/No
  const btnSound = document.getElementById('btnToggleSound');
  if (btnSound) {
    btnSound.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      btnSound.textContent = soundEnabled ? '🔊' : '🔇';
      showToast(soundEnabled ? 'Sonidos activados' : 'Sonidos desactivados', '🎵');
    });
  }

  // 12. Vaciar Mapa
  const btnClear = document.getElementById('btnClearMap');
  if (btnClear) {
    btnClear.addEventListener('click', () => {
      if (placedMarkers.length === 0) return;
      if (confirm('¿Vaciar todo el mapa?')) {
        map.closePopup();
        placedMarkers.forEach(m => map.removeLayer(m.leafletMarker));
        placedMarkers = [];
        updatePlacedCount();
        renderPlacedList();
        saveAutoSave();
        showToast('Mapa vaciado', '🗑️');
      }
    });
  }

  // 13. Selector de Tamaño Previo (S, M, L, XL)
  document.querySelectorAll('.size-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activePlacementSize = parseInt(btn.dataset.size, 10);
      playPopSound(520, 0.04);
    });
  });

  // 14. Selector de Estilos de Fondo de Mapa Base
  const selectBasemap = document.getElementById('selectBasemap');
  if (selectBasemap) {
    selectBasemap.addEventListener('change', (e) => {
      setMapStyle(e.target.value);
      playPopSound(540, 0.05);
    });
  }

  // 14.5 Selector de Tema Visual: siempre enciende por defecto en Estética Simple y Clara
  function initTheme() {
    const defaultTheme = 'clean';
    document.body.setAttribute('data-theme', defaultTheme);
    const selectTheme = document.getElementById('selectTheme');
    if (selectTheme) {
      selectTheme.value = defaultTheme;
      selectTheme.addEventListener('change', (e) => {
        const theme = e.target.value;
        document.body.setAttribute('data-theme', theme);
        playPopSound(660, 0.06);
        const themeNames = {
          clean: 'Estética Simple y Clara ✨',
          gaming: 'Gaming (Lúdico) 🎮',
          canelones: 'Institucional Canelones 🌿',
          dark: 'Modo Oscuro 🌙'
        };
        showToast(`Tema: ${themeNames[theme] || theme}`, '🎨');
      });
    }
  }

  // 15. Búsqueda y Filtros de Categoría
  const searchInput = document.getElementById('dockSearchInput');
  if (searchInput) searchInput.addEventListener('input', renderDockInventory);

  document.querySelectorAll('.dock-cat-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.dock-cat-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilterCat = btn.dataset.cat;
      playPopSound(460, 0.04);
      renderDockInventory();
    });
  });

  // Autoguardado en LocalStorage
  function saveAutoSave() {
    try {
      const data = {
        marcadores: placedMarkers.map(m => ({
          type: m.type,
          title: m.title,
          badge: m.badge,
          notes: m.notes,
          size: m.size,
          lat: m.lat,
          lng: m.lng
        }))
      };
      localStorage.setItem('costa_floresta_game_v2', JSON.stringify(data));
    } catch (e) {}
  }

  function loadAutoSave() {
    try {
      const saved = localStorage.getItem('costa_floresta_game_v2');
      if (saved) {
        const data = JSON.parse(saved);
        if (data.marcadores && data.marcadores.length > 0) {
          data.marcadores.forEach(pm => {
            createPlacedMarker(pm.type, { lat: pm.lat, lng: pm.lng }, {
              title: pm.title,
              badge: pm.badge,
              notes: pm.notes,
              size: pm.size
            });
          });
        }
      }
    } catch (e) {}
  }

  function showToast(text, icon = '✨') {
    const t = document.getElementById('toastNotice');
    if (!t) return;
    document.getElementById('toastIcon').textContent = icon;
    document.getElementById('toastText').textContent = text;
    t.classList.add('show');
    clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(() => {
      t.classList.remove('show');
    }, 2800);
  }

  // Inicialización
  initTheme();
  initMap();
  renderDockInventory();
  renderBalneariosBar();
  renderPlacedList();
});
