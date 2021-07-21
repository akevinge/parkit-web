import { Loader } from "@googlemaps/js-api-loader";
import { useSpotStore } from "../../modules/search/useSpotStore";
import { getSpots } from "../firebase/plusCodes";
import { decodePlusCode, getMapPlusCodes } from "../open-loc/openLocationCode";
import { MapMarker } from "./SpotMarker";

const { setSpots } = useSpotStore.getState();

export class MapLoader {
  public map: google.maps.Map | undefined;
  private markers: MapMarker[] = [];
  private previousTimeoutId: ReturnType<typeof setTimeout> | undefined;
  private searchBox: google.maps.places.SearchBox | undefined;
  private readonly zoomThreshold = 10;

  constructor(cb: () => void) {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
      version: "weekly",
      libraries: ["places"],
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
                zoom: this.zoomThreshold,
                fullscreenControl: false,
                mapTypeControlOptions: {
                  position: google.maps.ControlPosition.TOP_RIGHT,
                },
              }
            );
            this.initMapListeners();
            this.initSearchBox();
            this.initSearchBoxListeners();
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
                center: { lat: 40.7128, lng: -74.006 },
                zoom: this.zoomThreshold,
              }
            );
            this.initMapListeners();
            this.initSearchBox();
            this.initSearchBoxListeners();
          })
          .then(cb);
      }
    );

    return this;
  }

  private initSearchBox() {
    const searchInput = document.getElementById("search-box") as
      | HTMLInputElement
      | undefined;
    if (searchInput) {
      this.searchBox = new google.maps.places.SearchBox(searchInput);
    } else {
      this.initSearchBox();
    }
  }

  private initSearchBoxListeners() {
    this.searchBox?.addListener("places_changed", () => {
      if (this.searchBox && this.map) {
        const places = this.searchBox.getPlaces();

        if (
          !places ||
          !places.length ||
          !places[0].geometry?.location?.toJSON()
        )
          return;

        this.map.panTo(places[0].geometry.location.toJSON());
        this.map.setZoom(this.zoomThreshold);
      }
    });
  }

  private deleteAllMarkers() {
    for (const marker of this.markers) {
      marker.hideMarker();
    }
    this.markers = [];
    setSpots([]);
  }

  private unloadMarkers() {
    const bounds = this.map?.getBounds()?.toJSON();
    const zoom = this.map?.getZoom();
    if (bounds && zoom && zoom < 14) {
      this.markers = this.markers.filter((marker) => {
        const isVisible = marker.isVisible(bounds);
        if (!isVisible) {
          marker.hideMarker();
        }
        return isVisible;
      });
    }
  }

  private initMapListeners() {
    this.map?.addListener("bounds_changed", () => {
      this.unloadMarkers();
      if (this.previousTimeoutId) {
        clearTimeout(this.previousTimeoutId);
      }
      this.previousTimeoutId = setTimeout(async () => {
        const zoom = this.map?.getZoom();
        if (zoom && zoom >= 10) {
          const center = this.map?.getCenter()?.toJSON();
          const bounds = this.map?.getBounds()?.toJSON();
          if (center && bounds) {
            const spots = ((await Promise.all(
              getMapPlusCodes({ center, bounds }).map(async (code) =>
                getSpots(code)
              )
            ).catch(() => [])) as Spot[]).reduce((combined, spots) => {
              return combined.concat(spots);
            }, [] as Spot[]);

            spots.map((spot) => {
              // prevent duplicate markers
              if (!this.markers.find((marker) => marker.plusCode === spot.id)) {
                const { latitudeCenter, longitudeCenter } = decodePlusCode(
                  spot.id
                );
                if (this.map) {
                  this.markers.push(
                    new MapMarker({
                      position: { lat: latitudeCenter, lng: longitudeCenter },
                      map: this.map,
                      plusCode: spot.id,
                    })
                  );
                }
              }
            });

            setSpots(spots);
          }
        }
      }, 500);
    });

    this.map?.addListener("zoom_changed", () => {
      const zoom = this.map?.getZoom();
      if (zoom) {
        if (zoom < this.zoomThreshold) {
          this.deleteAllMarkers();
        }
        if (zoom > 15) {
          this.map?.setMapTypeId(google.maps.MapTypeId.HYBRID);
        } else {
          this.map?.setMapTypeId(google.maps.MapTypeId.ROADMAP);
        }
      }
    });
  }
}
