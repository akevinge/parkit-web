export class MapMarker {
  private marker: google.maps.Marker;
  public plusCode: string;

  constructor({
    position,
    map,
    plusCode,
  }: {
    position: google.maps.LatLngLiteral;
    map: google.maps.Map;
    plusCode: string;
  }) {
    this.marker = new google.maps.Marker({
      position,
      map,
      title: "test",
      animation: google.maps.Animation.DROP,
    });
    this.plusCode = plusCode;
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
