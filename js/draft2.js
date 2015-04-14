	a project for udacity
Key:
5df1326a589735e874291785f5f04bb6

Secret:
a9c091137c1e827b


https://api.flickr.com/services/feeds/photos_public.gne


$(document).ready(function() {


 $('button').click(function () {
    // highlight the button
    // not AJAX, just cool looking
    $("button").removeClass("selected");
    $(this).addClass("selected");

    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      $.each(data.items, function(i, photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + ' " class="image">;
        photoHTML += '<img src=" 'photo.media.m + '"></a></li>';
      
      });
      
      photoHTML += '</ul>';
      $('#photos').html(photosHTML);
   
     
    }//end each
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click

}); //