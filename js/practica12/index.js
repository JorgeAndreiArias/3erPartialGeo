function initMap() {
    var coordenadas = { lat: 21.152639, lng: -101.711598 }

    var propiedades = {
        center: coordenadas,
        zoom: 12
    };

    // MAPA 1

    var map1 = new google.maps.Map(document.getElementById("map1"), propiedades);
    var marker = new google.maps.Marker({
        position: coordenadas,
        map: map1
    });

    marker.addListener('click', function(){
        map1.setZoom(8);
        map1.setCenter(marker.getPosition());
    });

    // MAPA 2
    var map2 = new google.maps.Map(document.getElementById("map2"), propiedades);
    var marker2 = new google.maps.Marker({
        position: coordenadas,
        map: map2
    });

    map2.addListener('center_changed', function(){
        window.setTimeout( function(){
            map2.panTo(marker2.getPosition());
        },3000);
    });

    // MAPA 3
    var map3 = new google.maps.Map(document.getElementById("map3"), propiedades);

    var infoWindow = new google.maps.InfoWindow({
        content: 'Cambia el zoom',
        position: coordenadas
    });

    infoWindow.open(map3);

    map3.addListener('zoom_changed', function(){
        infoWindow.setContent('Zoom' + map3.getZoom());
    });

    // MAPA 4
    var map4 = new google.maps.Map(document.getElementById("map4"), propiedades);

    map4.addListener('click', function(e){
        console.log(e.latLng);
        establecerMarcador(e.latLng);
    });

    function establecerMarcador(latLng){
        var marker3 = new google.maps.Marker({
            position:latLng,
            map:map4
        });

        map4.panTo(latLng);
    }

    // MAPA 5
    var map5 = new google.maps.Map(document.getElementById("map5"), propiedades);

    var infoWindow2 = new google.maps.InfoWindow({
        content: 'Haz click para obtener las coordenadas',
        position: coordenadas
    });

    infoWindow2.open(map5);
    map5.addListener('click', function(e){
        infoWindow2.close();
        infoWindow2 = new google.maps.InfoWindow({ position: e.latLng });
        infoWindow2.setContent(e.latLng.toString());
        infoWindow2.open(map5);

    });

    // MAPA 6
    var map6 = new google.maps.Map(document.getElementById("map6"), propiedades);

    google.maps.event.addDomListener(map6, 'click', function(){
        window.alert('Se hizo zoom en el mapa');
    });

    var boton = document.getElementById('btnCentrar');
    google.maps.event.addDomListener(boton, 'click', function(){
        map6.panTo(coordenadas);
    });
}
