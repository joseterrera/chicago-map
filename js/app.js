var Locations = function(data) {
    this.title = data.title;
    this.lat = data.lat;
    this.lng = data.lng;
}


var initialLocations = [

    {title: "Dollop",lat: 41.877124, lng: -87.629006 },
    {title: "Magnificent Mile",lat: 41.894809, lng: -87.624214 },
    {title: "Willis Towers",lat: 41.878876, lng: -87.635915 },
    {title: "Millennium Park",lat: 41.882702, lng: -87.619394 }
]



var ViewModel = function() {
    //this trick allows "this" to be still be the viewModel
  var self = this;

  this.locationsList = ko.observableArray(initialLocations);

  for (var i = 0; i < initialLocations.length; i++) {
                var marker = new Locations(initialLocations[i].position, initialLocations[i].title, createMarker(initialLocations[i]));
                self.locations.push(marker);
 

  }
}

ko.applyBindings(new ViewModel());


  function createMarker(loc) {
            return new google.maps.Marker({
                position: loc.position,
                map: map,
                title: loc.title
            });
        }
var map;
 function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = { 
          center: new google.maps.LatLng(41.894809, -87.624214),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
      map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);
