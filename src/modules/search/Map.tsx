import { FC, useEffect, useState, useRef } from "react";
import { MapLoader } from "../../services/google-maps/MapLoader";
import { MapMenu } from "./MapMenu";

export const Map: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    new MapLoader(() => setLoading(false));
  }, []);

  return (
    <div style={{ height: "100%", position: "relative" }}>
      <MapMenu />
      <div id="map" style={{ height: "100%" }}></div>
    </div>
  );
};
