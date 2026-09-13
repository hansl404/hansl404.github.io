// City-center coordinates are approximate; no location data is collected.
(() => {
  const language = () => document.documentElement.lang === 'ko' ? 'ko' : document.documentElement.lang === 'zh-CN' ? 'zh-CN' : 'en';
  const labels = {
    en: { lived: 'Lived in', visited: 'Visited', all: 'places', select: 'Select a pin or a city below.' },
    ko: { lived: '살아본 곳', visited: '방문한 곳', all: '곳', select: '핀이나 아래 도시를 선택해 보세요.' },
    'zh-CN': { lived: '住过', visited: '去过', all: '个地方', select: '请选择一个标记或下方的城市。' }
  };
  const host = document.getElementById('travel-map');
  const status = document.getElementById('map-status');
  if (!host || !window.L || !window.portfolioWorld || !window.portfolioPlaces) {
    if (status) status.textContent = 'Map unavailable. Explore all places in the city list below.';
    return;
  }
  const places = window.portfolioPlaces;
  const map = L.map(host, {
    scrollWheelZoom: false, minZoom: 1, maxZoom: 9,
    maxBounds: [[-80, -195], [85, 195]], maxBoundsViscosity: 0.8,
    zoomSnap: 0.25, attributionControl: true
  });
  map.attributionControl.setPrefix('<a href="https://leafletjs.com">Leaflet</a>');
  L.geoJSON(window.portfolioWorld, {
    style: { color: '#3c5066', weight: 0.7, fillColor: '#1d2b3b', fillOpacity: 1 },
    interactive: false, attribution: '<a href="https://www.naturalearthdata.com/">Natural Earth</a>'
  }).addTo(map);
  const layer = L.layerGroup().addTo(map);
  const markers = places.map(place => {
    const marker = L.marker([place.lat, place.lng], {
      icon: L.divIcon({ className: `travel-pin ${place.kind}-pin`, html: '<span></span>', iconSize: [24, 24], iconAnchor: [12, 12] }),
      title: `${place.name} — ${labels[language()][place.kind]}`,
      zIndexOffset: place.kind === 'lived' ? 1000 : 0,
      alt: place.name, keyboard: true, riseOnHover: true
    });
    const popup = document.createElement('div');
    const label = document.createElement('strong');
    label.textContent = place.name;
    const type = document.createElement('p');
    type.textContent = labels[language()][place.kind];
    popup.append(label, type);
    marker.bindPopup(popup);
    return marker;
  });
  let activeFilter = 'all';
  const selected = () => places.map((p, i) => ({ ...p, index: i })).filter(p => activeFilter === 'all' || p.kind === activeFilter);
  function resetView() {
    const bounds = L.latLngBounds(selected().map(p => [p.lat, p.lng]));
    map.fitBounds(bounds.pad(0.14), { padding: [24, 28], maxZoom: 4, animate: false });
  }
  function filter(kind) {
    activeFilter = kind;
    map.closePopup();
    layer.clearLayers();
    const visible = selected();
    visible.forEach(p => layer.addLayer(markers[p.index]));
    document.querySelectorAll('[data-map-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mapFilter === kind)));
    const currentLabels = labels[language()];
    status.textContent = `${visible.length} ${kind === 'lived' ? currentLabels.lived : kind === 'visited' ? currentLabels.visited : currentLabels.all} · ${currentLabels.select}`;
    resetView();
  }
  function updatePopupLabels() {
    const currentLabels = labels[language()];
    places.forEach((place, index) => {
      markers[index].options.title = `${place.name} — ${currentLabels[place.kind]}`;
      const popup = document.createElement('div');
      const label = document.createElement('strong');
      label.textContent = place.name;
      const type = document.createElement('p');
      type.textContent = currentLabels[place.kind];
      popup.append(label, type);
      markers[index].bindPopup(popup);
    });
    filter(activeFilter);
  }
  document.addEventListener('portfolio-language-change', updatePopupLabels);
  document.querySelectorAll('[data-map-filter]').forEach(button => button.addEventListener('click', () => filter(button.dataset.mapFilter)));
  document.getElementById('map-reset').addEventListener('click', resetView);
  document.querySelectorAll('[data-place]').forEach(button => button.addEventListener('click', () => {
    const index = Number(button.dataset.place);
    if (!layer.hasLayer(markers[index])) filter('all');
    map.setView([places[index].lat, places[index].lng], 6, { animate: false });
    markers[index].openPopup();
    host.scrollIntoView({ behavior: 'auto', block: 'center' });
    host.focus({ preventScroll: true });
  }));
  filter('all');
  // Keep the framing usable after orientation changes or responsive resizing.
  let width = host.clientWidth;
  new ResizeObserver(() => {
    if (host.clientWidth !== width) { width = host.clientWidth; map.invalidateSize(); resetView(); }
  }).observe(host);
})();
