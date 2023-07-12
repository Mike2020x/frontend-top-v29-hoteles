import { useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useHotel } from "../../context";
import Loading from "../loading/Loading";
import "./index.scss";

const API_KEY = import.meta.env.API_KEY;
const mapOptions = {
  apiKey: API_KEY,
};

export default function HotelMap() {
  const { state, dispatch } = useHotel();
  const { loading } = state;

  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapsApiKey,
    googleMapsApiKey: mapOptions.apiKey,
    preventGoogleFontsLoading: true,
  });

  useEffect(() => {
    if (!isLoaded) {
      dispatch({ type: "LOADING", payload: true });
    } else {
      dispatch({ type: "LOADING", payload: false });
    }
  }, [isLoaded, loading, dispatch]);

  if (loading) {
    return <Loading />;
  }

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 4.624335,
    lng: -74.063644,
  };

  return (
    <div className="HotelMapContainer">
      <div className="map">
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
        )}
      </div>
    </div>
  );
}
