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
  { name: "Potterrow", coords: { lat: 55.946885, lng: -3.187546 }}
];

var activeWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.9445188, lng: -3.1892413},
    zoom: 16
  });
}

function updateMap(mapIndex) {
  removeCurrentWindow();
  var currentLocation = locations[mapIndex]
  var infowindow = new google.maps.InfoWindow({
    content: windowContent(currentLocation),
    position: currentLocation.coords
  });
  infowindow.open(map);
  activeWindow = infowindow;
}

function removeCurrentWindow() {
  if (activeWindow != null) {
    activeWindow.close();
  }
}

function windowContent(location) {
  return location.name + "<br><a target='_blank' href='https://www.google.com/maps/dir/Current+Location/" + location.coords.lat.toString() + "," + location.coords.lng.toString() +"'>Get directions</a>"
}

$(document).ready(function() {
  $(".map-location").click(function() {
    var mapLocation = $(this);
    $('html, body').animate({
      scrollTop: $("#map-scroll-to").offset().top - 10
    }, 500);
    setTimeout(function(){
      updateMap($(mapLocation).data("map-index"));
    }, 500);
  });
})