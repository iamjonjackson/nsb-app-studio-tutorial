
MapForm.onshow=function(){

  if (typeof mapNSB == 'undefined') {
    mapNSB = L.map(mapContainer);
    mapNSB.setView([51.4977578,-0.1434954], 13);
    
    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapNSB);
    
    L.marker([51.4977578,-0.1434954]).addTo(mapNSB)
      .bindPopup("My City!")
      .openPopup();
    
  }

}
