export class MapMarker {
  marker: google.maps.Marker;

  constructor(position: google.maps.LatLngLiteral, map: google.maps.Map) {
    this.marker = new google.maps.Marker({ position, map, title: "test" });
  }
}
