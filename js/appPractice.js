var vm;


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

  function point(name, lat, lng) {
    this.name = name;
    this.lat = lat;
    this.lng = lng;
  }
  vm = new ViewModel();
ko.applyBindings(vm);

};
}




var latApi = vm.initialLocations;


// //this is part of the ViewModel, it will modify the view depending on what 
// //I type on the search
//   function point(name, lat, lng) {
//     this.name = name;
//     this.lat = lat;
//     this.lng = lng;

//     var marker = new google.maps.Marker({
//         position: new google.maps.LatLng(lat, lng),
//         title: name,
//         map: map,
//         animation: google.maps.Animation.DROP
//     });

//     //this is the local function of point that has access to the variable in the local marker.
//     this.open = function() {
//       google.maps.event.trigger(marker,'click');
//     };
//     // isVisible stems off from point: since it is an observable
//     //I can observe it constantly and allow it to act when I change t
//     //the value. So, the marker will show or not depending on the search.
//     this.isVisible = ko.observable(false);
//     //subscribe reacts to changes on the view model
//     //the subscribe function will check if false changes to true.
//     this.isVisible.subscribe(function(currentState) {
//       if (currentState) {
//         marker.setMap(map);
//       } else {
//         marker.setMap(null);
//       }
//     });

//     this.isVisible(true);

//     //create new infoWindow
//    infowindow = new google.maps.InfoWindow();

    
//      google.maps.event.addListener(marker, 'click', function() {
//       infowindow.setContent('<div><h3>' + marker.title + '</h3>' +
//  '</div>' +'<button onclick="apiInfoWindow()" class="forFlickr btn btn-info">pictures</button>');
//       infowindow.open(map,marker);
//   });

//   }; //end point
// }; //end ViewModel

// vm = new ViewModel();
// ko.applyBindings(vm);

//  }