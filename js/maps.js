// google.maps.event.addDomListener(window, 'load', init);
//      function init() {
//        var mapOptions = {
//          zoom: 16,
//          scrollwheel: false,
//          center: new google.maps.LatLng(53.1976028,50.1096154),
//          zoomControl: true,
//          zoomControlOptions: {
//            style: google.maps.MapTypeControlStyle.VERTICAL_BAR,
//            position: google.maps.ControlPosition.LEFT_CENTER
//          },
//          styles: [{"featureType": "water", "stylers": [{"color": "#46bcec"},{"visibility": "on"}]},{"featureType": "landscape", "stylers": [{"color": "#f2f2f2"}]},{"featureType": "road", "stylers": [{"saturation": -100},{"lightness": 45}]},{"featureType": "road.highway", "stylers": [{"visibility": "simplified"}]},{"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]},{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"}]},{"featureType": "transit", "stylers": [{"visibility": "off"}]},{"featureType": "poi", "stylers": [{"visibility": "off"}]}],disableDefaultUI: true
//        };
//        var mapElement = document.getElementById('map_canvas');
//        var map = new google.maps.Map(mapElement, mapOptions);
//        var image = 'img/marker.png';
//        var myLatLng = new google.maps.LatLng(53.1980334,50.1071692);
//        var mapMarker = new google.maps.Marker({
//          position: myLatLng,
//          map: map,
//          icon: image,
//          title: 'DOBRO'
//        });
//      }


function initialize() {

    var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(54.3061, 48.3937),
      scrollwheel: false,
      panControl: false,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_CENTER
      },
      scaleControl: false,
      // mapTypeControlOptions: {
      //   mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
      // },

      styles: [
        {
          featureType: "all",
          elementType: "all",
          stylers: [
            { saturation: -100 }
          ]
        }
      ],
    };


    var mapElement = document.getElementById('gmap');
    var map = new google.maps.Map(mapElement, mapOptions);
    var image = 'i/geo-pin.png';

    var myLatLng = new google.maps.LatLng(54.2957, 48.3771);
    var mapMarker = new google.maps.Marker({
     position: myLatLng,
     map: map,
     icon: image,
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
