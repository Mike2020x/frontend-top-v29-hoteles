import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../loading/Loading";
import calcularCostoReserva from "./calculateCost";
import fetchSearch from "./fetchSearch";
import Hotel from "../Hotel/Hotel";
import "./ListHotels.scss";
import { useHotel } from "../../context";

export default function ListHotels() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useHotel();
  const { hotels, selectedHotel, error } = state;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const hotelSearch = searchParams.get("hotel")?.toLowerCase();

    fetchHotels(hotelSearch, searchParams, dispatch, setLoading);
  }, [dispatch, location.search]);

  const handleHotelClick = (hotel) => {
    dispatch({ type: "SELECT_HOTEL", payload: hotel });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="contentlist__Hotels">
      {hotels.map((hotel) => (
        <div className="contentlist__Hotels--card" key={hotel.hotelId}>
          <Hotel
            HotelId={hotel.hotelId}
            image={hotel.image}
            title={hotel.title}
            location={hotel.location}
            description={hotel.description}
            reviews={hotel.reviews}
            pastprice={hotel.precioPasado}
            actualprice={hotel.precioConDescuento}
            onClick={() => handleHotelClick(hotel)}
          />
        </div>
      ))}
      {selectedHotel && (
        <div>
          {/* Renderizar aquí el componente del hotel seleccionado */}
          <h2>{selectedHotel.title}</h2>
          <p>{selectedHotel.description}</p>
          {/* etc. */}
        </div>
      )}
    </div>
  );
}

async function fetchHotels(hotelSearch, searchParams, dispatch, setLoading) {
  try {
    const searchIds = await fetchSearch(hotelSearch);
    const hotelPromises = searchIds.map((id) =>
      fetchHotelData(id, searchParams)
    );
    dispatch({ type: "SET_HOTELS", payload: hotelPromises });
    setLoading(false);
  } catch (error) {
    dispatch({ type: "SET_ERROR", payload: error });
    setLoading(false);
  }
}

async function fetchHotelData(id, searchParams) {
  try {
    const [hotelResponse, locationResponse, imageResponse] = await Promise.all([
      fetch(`${import.meta.env.API_BASE_URL}/api/hotel/${id}`).then(
        (response) => response.json()
      ),
      fetch(`${import.meta.env.API_BASE_URL}/api/location/${id}`).then(
        (response) => response.json()
      ),
      fetch(`${import.meta.env.API_BASE_URL}/api/image/${id}`).then(
        (response) => response.json()
      ),
    ]);

    const { id: hotelId, hotel: title, about } = hotelResponse;
    const { city, address } = locationResponse;
    const { url: image } = imageResponse;

    const checkIn = new Date(searchParams.get("checkIn"));
    const checkOut = new Date(searchParams.get("checkOut"));
    const guests = Number(searchParams.get("guests"));
    const { costoTotal, precioPasado, precioConDescuento } =
      calcularCostoReserva(checkIn, checkOut, guests);

    const reviews = Math.ceil(Math.random() * 10000).toString();

    return {
      hotelId,
      image,
      title,
      location: city,
      address,
      description: about,
      reviews,
      precioPasado,
      precioConDescuento,
      costoTotal,
    };
  } catch (error) {
    console.error("Error fetching hotel data:", error);
    return null;
  }
}
