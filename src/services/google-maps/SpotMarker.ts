const svgMarker = {
  path:
    "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
  fillColor: "blue",
  fillOpacity: 0.6,
  strokeWeight: 0,
  rotation: 0,
  scale: 2,
  anchor: new google.maps.Point(15, 30),
};

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
