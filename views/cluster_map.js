var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZ29vZGRheTIzNDU5IiwiYSI6ImNrbXFnb2l0ajBxNnEybnQ5M3p1YXBjZTQifQ.35ze5PJXpYxn2wTBx0m0nw';
var map = new mapboxgl.Map({
container: 'cluster-map',
style: 'mapbox://styles/mapbox/streets-v11'
});