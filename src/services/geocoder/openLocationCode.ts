import OpenLocationCode from "open-location-code-typescript";

export const getMapPlusCodes = ({
  center,
  bounds,
}: {
  center: google.maps.LatLngLiteral;
  bounds: google.maps.LatLngBoundsLiteral;
}) => {
  return Object.keys(bounds)
    .map((key) => {
      return OpenLocationCode.encode(
        key === "east" || key === "west"
          ? center.lat
          : bounds[key as keyof google.maps.LatLngBoundsLiteral],
        key === "north" || key === "south"
          ? center.lng
          : bounds[key as keyof google.maps.LatLngBoundsLiteral]
      ).substr(0, 4);
    })
    .reduce(
      (unqAr, code) => {
        if (!unqAr.includes(code)) {
          unqAr.push(code);
        }
        return unqAr;
      },
      [OpenLocationCode.encode(center.lat, center.lng).substr(0, 4)]
    );
};

export const decodePlusCode = (code: string) => OpenLocationCode.decode(code);
