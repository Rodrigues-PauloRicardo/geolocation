const x = document.getElementById("demo");  

    function getLocation() {
      
      try {
        navigator.geolocation.getCurrentPosition(showPosition);
      } catch {
        x.innerHTML = err;
      }
    }

    function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
    }
    document.addEventListener('DOMContentLoaded', function(){

      var target = document.querySelector('#map');
      
      navigator.geolocation.getCurrentPosition(function(position) {
  
          var latitude   = position.coords.latitude;
          var longitude  = position.coords.longitude;
          var coordinate = new google.maps.LatLng(latitude, longitude);
  
          var optionsMap = {
                      center : coordinate,
                      zoom: 19,
                      mapTypeId: google.maps.MapTypeId.ROADMAP
          };
  
          var map = new google.maps.Map(target, optionsMap);
  
          var configMarker = {
                               position : coordinate,
                               map : map,
                               title: "Você está aqui!"
                              };
  
          var marker = new google.maps.Marker(configMarker);
  
      });
  });