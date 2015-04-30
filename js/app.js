// Google Maps
function initialize() {
    var mapOptions = {
      center: { lat: 41.882702, lng: -87.619394},
      zoom: 15
    };
    var mapElement = document.getElementById('map-canvas');

    var map = new google.maps.Map(mapElement, mapOptions);
    //had marker in here first 
 }

google.maps.event.addDomListener(window, 'load', initialize);



var Location = function(name, lat, lng) {
  this.name = name;
  this.lat = lat;
  this.lng = lng;

 // var marker = new google.maps.Marker({
 //      position: new google.maps.LatLng(lat, lng),
 //      title: name,
 //      map: map,
 //      draggable: true
 //  });

}
$(function(){


var initialLocations = [

    {name: "Dollop",lat: 41.877124, lng: -87.629006 },
    {name: "Magnificent Mile",lat: 41.894809, lng: -87.624214 },
    {name: "Willis Towers",lat: 41.878876, lng: -87.635915 },
    {name: "Millennium Park",lat: 41.882702, lng: -87.619394 }
]

var ViewModel = function() {
  var self = this;
  self.locationsList = ko.observableArray(initialLocations);
  self.query = ko.observable('');
  self.locationsList = ko.computed(function() {
        var search = self.query().toLowerCase();
         return ko.utils.arrayFilter(self.locationsList(), function(location) {
            return location.name.toLowerCase().indexOf(search) >= 0;
        });
      });
};






ko.applyBindings(new ViewModel());

});







