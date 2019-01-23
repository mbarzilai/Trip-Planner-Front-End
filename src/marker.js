const mapboxgl = require('mapbox-gl');


function marker(type, coords) {
  type = type.toLowerCase();
  const markerDomEl = document.createElement('div'); // Create a new, detached DIV
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  switch (type) {
    case 'activity':
      markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
      break;
    case 'hotel':
      markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
      break;
    case 'restaurant':
      markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
      break;
    default:
      markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
      break;
  }

  return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
}

module.exports = marker;
