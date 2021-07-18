import { Loader } from "@googlemaps/js-api-loader";
import { getSpots } from "../firebase/plusCodes";
import { decodePlusCode, getMapPlusCodes } from "../geocoder/openLocationCode";
import { MapMarker } from "./SpotMarker";

export class MapLoader {
  public map: google.maps.Map | undefined;
  private markers: MapMarker[] = [];
  private previousTimeoutId: ReturnType<typeof setTimeout> | undefined;

  constructor(cb: () => void) {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
      version: "weekly",
    });

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        loader
          .load()
          .then(() => {
            this.map = new google.maps.Map(
              document.getElementById("map") as HTMLElement,
              {
                center: {
                  lat: latitude,
                  lng: longitude,
                },
                zoom: 10,
              }
            );
            // const roadmapOverlay = new google.maps.ImageMapType({
            //   getTileUrl: function (coord, zoom) {
            //     // Using WMS tile numbering.
            //     return [
            //       "https://grid.plus.codes/grid/wms/",
            //       zoom,
            //       "/",
            //       coord.x,
            //       "/",
            //       coord.y,
            //       ".png",
            //     ].join("");
            //   },
            //   tileSize: new google.maps.Size(256, 256),
            // });
            // this.map.overlayMapTypes.push(roadmapOverlay);
            this.initListeners();
          })
          .then(cb);
      },
      (err) => {
        loader
          .load()
          .then(() => {
            this.map = new google.maps.Map(
              document.getElementById("map") as HTMLElement,
              {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
              }
            );
          })
          .then(cb);
      }
    );
    return this;
  }

  private initListeners() {
    this.map?.addListener("bounds_changed", () => {
      if (this.previousTimeoutId) {
        clearTimeout(this.previousTimeoutId);
      }
      this.previousTimeoutId = setTimeout(async () => {
        const zoom = this.map?.getZoom();
        if (zoom && zoom > 9) {
          const center = this.map?.getCenter()?.toJSON();
          const bounds = this.map?.getBounds()?.toJSON();
          if (center && bounds) {
            const x = ((await Promise.all(
              getMapPlusCodes({ center, bounds }).map(async (code) =>
                getSpots(code)
              )
            ).catch(() => [])) as Spot[])
              .reduce((combined, spots) => {
                return combined.concat(spots);
              }, [] as Spot[])
              .map((spot) => {
                const { latitudeCenter, longitudeCenter } = decodePlusCode(
                  spot.id
                );
                if (this.map) {
                  this.markers.push(
                    new MapMarker(
                      { lat: latitudeCenter, lng: longitudeCenter },
                      this.map
                    )
                  );
                }
              });
          }
        }
      }, 1000);
    });

    this.map?.addListener("zoom_changed", () => {
      const zoom = this.map?.getZoom();
      if (zoom && zoom <= 9) {
        this.markers.map((marker) => marker.marker.setMap(null));
      }
    });
  }
}
