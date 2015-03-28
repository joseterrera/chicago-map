 function initialize() {
        var mapOptions = {
          center: { lat: 41.882702, lng: -87.619394},
          zoom: 15
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);


var Location = function(name, lat, lng) {
	this.name = name;
	this.lat = lat;
	this.lng = lng;
}


function ViewModel() {
	var self = this;
	self.locations = [
		new Location("Dollop", 41.877124, -87.629006),
		new Location("Magnificent Mile", 41.894809, -87.624214 ),
		new Location("Willis Towers", 41.878876, -87.635915 ),
		new Location("Millennium Park", 41.882702, -87.619394)
		]
};

  ko.applyBindings(ViewModel);






