const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker')

mapboxgl.accessToken =
  'pk.eyJ1IjoibWJhcnppbGFpIiwiYSI6ImNqcjluaDdncDBpeWY0M21tcDhkYXZlaXcifQ.7hPmGmZ9tK29wEHw2-zCTA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const marker1 = buildMarker('hotel', [-87.641, 41.895])
const marker2 = buildMarker('activity', [-86.641, 40.895])
const marker3 = buildMarker('restaurant', [-88.655, 42.223])

marker1.addTo(map);
marker2.addTo(map);
marker3.addTo(map);
