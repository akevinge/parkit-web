import { useState } from "react";
import { FC, useEffect } from "react";
import { MapLoader } from "../../services/google-maps/MapLoader";

export const SearchMap: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const map = new MapLoader(() => setLoading(false));
  }, []);

  return <div id="map" style={{ height: "100%" }}></div>;
};
