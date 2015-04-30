// Google Maps
function initialize() {
    var mapOptions = {
      center: { lat: 41.882702, lng: -87.619394},
      zoom: 15
    };
    var mapElement = document.getElementById('map-canvas');

    var map = new google.maps.Map(mapElement, mapOptions);
    //had marker in here first 
     function Marker(position, title, marker) {
      var self = this;
      self.position = position;
      self.title = title;
      self.marker = marker;
}

var initialLocations = [

    {name: "Dollop",lat: 41.877124, lng: -87.629006 },
    {name: "Magnificent Mile",lat: 41.894809, lng: -87.624214 },
    {name: "Willis Towers",lat: 41.878876, lng: -87.635915 },
    {name: "Millennium Park",lat: 41.882702, lng: -87.619394 }
]

function addMarker(loc) {
    return new google.maps.Marker({
      position: loc.position,
      map: map,
      title: loc.title
    });
  }

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

for (var i = 0; i < initialLocations.length; i++) {
    var marker = new Marker(initialLocations[i].position, initialLocations[i].title, addAMarker(initialLocations[i]) );
    self.locationsList.push(marker);
  }
};

ko.applyBindings(new ViewModel());

}

google.maps.event.addDomListener(window, 'load', initialize);











