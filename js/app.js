var infowindow,
    latApi,
    vm,
    map;

//(41.875523, -87.631747) 41.154228, -88.649831  41.862313, -87.616688
// Google Maps
function initialize() {
  var mapOptions = {
    center: { lat: 41.862313, lng: -87.616688},
    zoom: 13
  };

  var mapElement = document.getElementById('map-canvas');

  map = new google.maps.Map(mapElement, mapOptions);

  vm = new ViewModel();
  ko.applyBindings(vm);

  latApi = vm.initialLocations;



 }//end initialize



function ViewModel() {
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
  //created a function in the viewmodel so I can access it in the data-bind (html),
  //and from here call the function point so it shows
  self.listClick = function() {
        this.open();
    };

}; //end ViewModel

//point will modify the view depending on what
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

  var latLng = marker.getPosition(); // returns LatLng object
  map.setCenter(latLng); // setCenter takes a LatLng object
  //this is the local function of point that has access to the variable in the local marker.
  this.open = function() {
    google.maps.event.trigger(marker,'click');
  };
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

  //create new infoWindow
 infowindow = new google.maps.InfoWindow({
        minWidth: 50, //width of your infoWindow
        arrowSize: 3 //set your desired size
 });


   google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent('<div class="info-container"><h3>' + marker.title + '</h3>' +
  '</div>' +'<button onclick="apiInfoWindow(event)" data-location="'+marker.title+'" class="forFlickr btn btn-info">pictures</button>');
      infowindow.open(map,marker);
  });

}; //end point

google.maps.event.addDomListener(window, 'resize', initialize);
google.maps.event.addDomListener(window, 'load', initialize);



var flickrKey = '5b67c65fb6ee83a3db0f50a89c48c606';
var $forFlickr = $('.forFlickr');
var photosHTML;
var flickrRequestTimeout = setTimeout(function(){
  photosHTML = 'failed to load resources';
}, 8000);

function apiInfoWindow(event) {
  //extract the value of each data-location and insert it on string..
  var place = event.target.attributes['data-location'].value;


    $.ajax({
        dataType: "jsonp",
        url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5b67c65fb6ee83a3db0f50a89c48c606&text="+place+"&safe_search=1&per_page=5&format=json&jsoncallback=?",
        success: displayPhotos,
        error: function (xhr, ajaxOptions, thrownError) {
            alert('failed');
            alert(xhr.responseText);
            alert(xhr.status);
            alert(ajaxOptions);
            alert(thrownError);
        }
    });

  function displayPhotos(data) {
    photosHTML = '';
    console.log(data);
    data.photos.photo
      .filter(function(photo){
        return photo.ispublic === 1;
      })
      .forEach(function(photo) {
        photosHTML += "<div class='info-container'><img src='https://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+".jpg class='img-thumbnail'></div>";
      });

    $('.forFlickr').html(photosHTML);

   console.log(photosHTML);

   clearTimeout(flickrRequestTimeout);

  };//end displayPhotos

}; //end apiWindow
















