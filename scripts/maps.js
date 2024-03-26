function GoogleMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
      center: new google.maps.LatLng(55.490046, -3.698290), zoom: 15
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }