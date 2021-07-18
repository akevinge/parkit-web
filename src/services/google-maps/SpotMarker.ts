export class MapMarker {
  marker: google.maps.Marker;

  constructor(position: google.maps.LatLngLiteral, map: google.maps.Map) {
    this.marker = new google.maps.Marker({ position, map, title: "test" });
    this.initListeners();
  }

  public hideMarker() {
    this.marker.setMap(null);
  }

  private initListeners() {
    this.marker.addListener("visible_changed", () => {
      console.log(this.marker.getVisible());
    });
  }

  public isVisible({
    north,
    south,
    east,
    west,
  }: google.maps.LatLngBoundsLiteral): boolean {
    const position = this.marker.getPosition()?.toJSON();
    if (!position) return false;
    if (
      (position.lat > north || position.lat < south) &&
      (position.lng > east || position.lng < west)
    ) {
      return false;
    }
    return true;
  }
}
