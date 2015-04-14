var flickrApiKey = '5df1326a589735e874291785f5f04bb6';
var flickrSecret = 'a9c091137c1e827b';



var restaurantLocations = [
  {name: "Dollop",lat: 41.877124, lng: -87.629006 },
    {name: "Magnificent Mile",lat: 41.894809, lng: -87.624214 },
    {name: "Willis Towers",lat: 41.878876, lng: -87.635915 },
    {name: "Millennium Park",lat: 41.882702, lng: -87.619394 }
    ];

function viewModel() {
	var self = this;
	self.restaurantLocations= ko.observableArray(restaurantLocations),
	self.query = ko.observable(""),

	self.search = function(value) {
        viewModel(self.restaurantLocations).removeAll();
        for(var x in self.restaurantLocations) {
          if(self.restaurantLocations[x].name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
            viewModel(self.restaurantLocations).push(self.restaurantLocations[x]);
          }
        }
      }
    };

    viewModel.self.query.subscribe(viewModel(self.search));


ko.applyBindings(new viewModel);






// function viewModel() {
// 	var self = this;

// 	self.query = ko.observable("");
// 	self.locations = ko.observableArray(initialLocations);

// 	self.computedSearch = ko.computed(function() {
//     return ko.utils.arrayFilter(self.locations(), function(item) {
//         return item.name.toLowerCase().indexOf(self.query().toLowerCase()) >= 0;
//     });
// });

// };







 function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = { 
          center: { lat: 41.894809, lng: -87.624214 },
          zoom: 13, 
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        function Marker(position, title, marker) {
            var self = this;
            self.position = position;
            self.title = title;
            self.marker = marker;
        }


   
      }




      google.maps.event.addDomListener(window, 'load', initialize);


