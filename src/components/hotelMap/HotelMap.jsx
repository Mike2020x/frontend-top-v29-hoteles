import { useEffect, useRef } from "react";
import { useHotel } from "../../context";
import "./index.scss";
export default function HotelMap() {
  const mapRef = useRef(null);
  const map = useRef(null);
  const { state } = useHotel();
  const { selectedHotel: hotelData } = state;
  useEffect(() => {
    const loadMap = () => {
      const google = window.google;

      map.current = new google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 }, // Inicializar con coordenadas nulas
        zoom: 15,
      });

      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: hotelData?.address }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
          const location = results[0].geometry.location;
          map.current.setCenter(location);

          new google.maps.Marker({
            position: location,
            map: map.current,
          });
        }
      });
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.MAP_API_KEY}&libraries=places`;
    script.onload = loadMap;
    document.body.appendChild(script);

    return () => {
      if (map.current) {
        map.current.setMap(null);
      }
      document.body.removeChild(script);
    };
  }, [hotelData?.address]);
  return <div className="map" ref={mapRef}></div>;
}
