var map;

var locations = [
  { name: "Main Library", coords: { lat: 55.942716, lng: -3.189161 }},
  { name: "Appleton Tower", coords: { lat: 55.944374, lng: -3.187020 }},
  { name: "David Hume Tower", coords: { lat: 55.943183, lng: -3.186562 }},
  { name: "7 Bristo Square", coords: { lat: 55.945773, lng:  -3.187638 }},
  { name: "Forrest Hill", coords: { lat: 55.946044, lng: -3.192024 }},
  { name: "Informatics Forum", coords: { lat: 55.944769, lng: -3.187271 }},
  { name: "Health Center", coords: { lat: 55.945813, lng: -3.188056 }},
  { name: "International Student Center", coords: { lat: 55.942580, lng: -3.187794}},
  { name: "Teviot Row House", coords: { lat: 55.944887, lng: -3.188599 }},
  { name: "Potterrow", coords: { lat: 55.946593, lng: -3.187396}}
];

// var activeMarker;
var activeWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.9445188, lng: -3.1892413},
    zoom: 16
  });
}

function updateMap(mapIndex) {
  removeCurrentMarker();
  var currentLocation = locations[mapIndex]
  // var marker = new google.maps.Marker({
  //   position: currentLocation.coords,
  //   map: map,
  //   title: 'Hello World!'
  // });

  var infowindow = new google.maps.InfoWindow({
    content: currentLocation.name,
    position: currentLocation.coords
  });
  infowindow.open(map);

  // activeMarker = marker;
  activeWindow = infowindow;
}

function removeCurrentMarker() {
  // if (activeMarker != null) {
  //   activeMarker.setMap(null);
  // }
  if (activeWindow != null) {
    activeWindow.close();
  }
}

$(document).ready(function() {
  $(".map-location").click(function() {
    console.log($(this).data("map-index"));
    updateMap($(this).data("map-index"));
  });
})