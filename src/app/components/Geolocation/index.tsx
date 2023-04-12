import React, { FC, useEffect, useState } from "react";
import axios from "axios";

import { options, geoURL } from "../../../constants/tasks";

import styles from "./Geolocation.module.scss";

interface Geo {
  lat: null | number;
  lon: null | number;
}

const Geolocation: FC = () => {
  const [address, setAddress] = useState("");
  const [geo, setGeo] = useState<Geo>({ lat: null, lon: null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosition = (position: GeolocationPosition) => {
      setGeo({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    };

    navigator.geolocation.getCurrentPosition((position) =>
      getPosition(position)
    );
  }, []);

  useEffect(() => {
    if (geo.lat && geo.lon) {
      (async () => {
        try {
          const { data } = await axios.post(geoURL, geo, options);

          setAddress(data.suggestions[0].unrestricted_value);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [geo]);

  return (
    <div className={styles.geolocation}>
      <h2>Ваше местоположение:</h2>
      <p>{address}</p>
      {geo.lat && geo.lon && !isLoading ? (
        <p>
          Широта: {geo.lat}, Долгота: {geo.lon}
        </p>
      ) : (
        ""
      )}
      {isLoading ? "Загрузка..." : ""}
    </div>
  );
};

export default Geolocation;
