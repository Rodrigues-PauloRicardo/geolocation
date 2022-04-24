const x = document.getElementById("demo");  

let dataAtual = new Date();
//let dia = dataAtual.getDate();
//let mes = (dataAtual.getMonth() + 1);
//let ano = dataAtual.getFullYear();



    function getLocation() {
        var radio = document.getElementsByName("radiobutton");

                var marechalLatitude = -29.81433;
                var marechalLongitude = -51.14550;
              //  let horas = dataAtual.getHours();
                //let minutos = dataAtual.getMinutes();

        for(var i = 0; i < radio.length; i++){
            if (radio[i].checked && radio[i].value === 'marechal'){                
        //    alert ('Alerta Marechal')
        }if (radio[i].checked && radio[i].value === 'vanessa'){
      //  alert ('Alerta Vanessa')
    }if (radio[i].checked && radio[i].value === 'valmir'){
    //alert ('Alerta Valmir')
}
        }    
      
      try {
        navigator.geolocation.getCurrentPosition(showPosition);
      } catch {
        x.innerHTML = err;
      }
    }

    function showPosition(position) {
      alert("Sua Latitude: " + position.coords.latitude + 
      "<br>Sua Longitude: " + position.coords.longitude);       
    }
    
    document.addEventListener('DOMContentLoaded', function(){

      var target = document.querySelector('#map');
      
      navigator.geolocation.getCurrentPosition(function(position) {
  
          var latitude   = position.coords.latitude;
          var longitude  = position.coords.longitude;
          var coordinate = new google.maps.LatLng(latitude, longitude);

         // var marechalLatitude = -29.81433;
          let horas = dataAtual.getHours();

          if (latitude < -29.815696554805946 && longitude < -51.146654182388644 && horas >=8 || horas <=12){
            alert('ATENÇÃO Equipamento fora da Localização Especificada')
        }  

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


 function saveDataToLocalStorage(){
  let email = document.querySelector("#email").value;
  localStorage.setItem("arquivo1", email);
  if(email ===''){
    alert('Adicione um email válido')
  } else{
    alert('Seu e-mail: ' + email + ' foi salvo com sucesso!' );
  }
}

function showLocalStorageData() { 
  alert("O último email salvo é: " + localStorage.getItem("arquivo1"));
}

