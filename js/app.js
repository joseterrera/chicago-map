 var infowindow = null;
// Google Maps
function initialize() {
    var mapOptions = {
      center: { lat: 41.882702, lng: -87.619394},
      zoom: 13
    };
    var mapElement = document.getElementById('map-canvas');

    var map = new google.maps.Map(mapElement, mapOptions);
   
 

var ViewModel = function() {
  //self = this is used so you can always have a reference to the object ViewModel, so you can access its methods and properties
  var self = this;
  self.initialLocations = [
    new point("Dollop", 41.877124, -87.629006 ),
    new point("Magnificent Mile", 41.894809, -87.624214 ),
    new point("Willis Towers", 41.878876, -87.635915 ),
    new point("Millennium Park", 41.882702, -87.619394 )
  ]

  self.query = ko.observable('');
  self.locationsList = ko.computed(function() {
        var search = self.query().toLowerCase();
         return ko.utils.arrayFilter(self.initialLocations, function(location) {
            //if a location matches a search the variable will save it.
            //With this variable I filter the search
            var match = location.name.toLowerCase().indexOf(search) >= 0;
            location.isVisible(match);
            return match;
    });
  });

//this is part of the ViewModel, it will modify the view depending on what 
//I type on the search
  function point(name, lat, lng) {
    this.name = name;
    this.lat = lat;
    this.lng = lng;

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        title: name,
        map: map,
        animation: google.maps.Animation.DROP
    });
    // isVisible stems off from point: since it is an observable
    //I can observe it constantly and allow it to act when I change t
    //the value. So, the marker will show or not depending on the search.
    this.isVisible = ko.observable(false);
    //subscribe reacts to changes on the view model
    //the subscribe function will check if false changes to true.
    this.isVisible.subscribe(function(currentState) {
      if (currentState) {
        marker.setMap(map);
      } else {
        marker.setMap(null);
      }
    });

    this.isVisible(true);

    infowindow = new google.maps.InfoWindow({
      content: '<div><h3>' + marker.title + '</h3>' +
        '</div>' +'<button class=" forFlickr btn btn-info">pictures</button>'
  });


  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

};

ko.applyBindings(new ViewModel());

 }

google.maps.event.addDomListener(window, 'load', initialize);















