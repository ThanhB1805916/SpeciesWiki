// Initialize and add the map
function initMap(mapData) {
  if (!mapData) {
    console.log("mapData is undefined");
    return;
  }

  const options = {
    zoom: mapData.zoom, // The larger the zoom number, the bigger the zoom
    center: mapData.center, // Where the map will be centered
  };

  const map = new google.maps.Map(document.getElementById("map"), options);

  // Loop through markers
  mapData.markers?.forEach((m) => {
    addMarker(m);
  });

  function addMarker({ position, icon, content }) {
    const marker = new google.maps.Marker({
      position: position,
      map: map,
    });

    if (icon) {
      marker.setIcon(icon);
    }

    if (content) {
      const infoWindow = new google.maps.InfoWindow({
        content: content,
      });

      marker.addListener("click", () => {
        infoWindow.open(mapData, marker);
      });
    }
  }
}
