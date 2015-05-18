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



///a partir de aca 

// esto es lo que hice con apis. esta basado en uno que hice antes.
// por ahi me podrias tirar unas pistas.
// dos preguntas: 
// 1. el flickrsecret lo vi por ahi, pero no se si tengo que agregarlo a la api string.
// 2. como agrego las fotos al mapa si el html del mapa esta en el ViewModel?
// 3. alguna otra cosa ves que este mal encaminada o a corregir..



var flickrKey = 'b67c65fb6ee83a3db0f50a89c48c606';
var flickrSecret = 'edc2b64dc4718b93';

var infoWindow = null;

$(document).ready(function(){
    var flickrAPI = "http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b67c65fb6ee83a3db0f50a89c48c606&user_id=joseterrera&has_geo=1&extras=geo&format=json&jsoncallback=?";
    var placesAPI = $(this).text();
    var flickrOptions = {
      tags: placesAPI,
      format:"json"
    };
    function displayPhotos(data) {
      var photosHTML;
      $.each(data.items, function(i, photo) {
            photosHTML = "<h4>" + venue.name + "</h3>";
            photoHTML += '<p class="img-responsive">';
            photoHTML += '<a href="' + photo.link + ' " class="image">';
            photoHTML += '<img src=" 'photo.media.m + '"></a></p>';
      });
  
      $('#photos').html(photosHTML);
   
     
      
    }

    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  });
}); //end ready
















