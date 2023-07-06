import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import calcularCostoReserva from "./calculateCost";
import fetchSearch from "./fetchSearch";
import Hotel from "../Hotel/Hotel";
import Loading from "../loading/Loading";
import "./ListHotels.scss";
import { useHotel } from "../../context";

export default function ListHotels() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useHotel();

  useEffect(() => {
    async function fetchHotels() {
      try {
        if (hotelSearch) {
          const searchIds = await fetchSearch(hotelSearch);
          const hotelsRelatedData = await Promise.all(
            searchIds.map(async (id) => {
              const [hotelResponse, locationResponse, imageResponse] =
                await Promise.all([
                  fetch(`${import.meta.env.VITE_BASE_URL}/api/hotel/${id}`),
                  fetch(`${import.meta.env.VITE_BASE_URL}/api/location/${id}`),
                  fetch(`${import.meta.env.VITE_BASE_URL}/api/image/${id}`),
                ]);
              const hotelData = await hotelResponse.json();
              const locationData = await locationResponse.json();
              const imageData = await imageResponse.json();
              const name = hotelData.hotel;
              const about = hotelData.about;
              const city = locationData.city;
              const url = imageData.url;
              const costos = calcularCostoReserva(checkIn, checkOut, guests);
              const costoTotal = costos.costoTotal;
              const precioPasado = costos.precioPasado;
              const precioConDescuento = costos.precioConDescuento;
              const ratings = Math.ceil(Math.random() * 10000).toString();

              return {
                hotelId: id, // Corregido: 'H' en 'hotelId' debe estar en minúscula
                image: url,
                title: name,
                location: city,
                description: about,
                reviews: ratings,
                pastPrice: precioPasado.toString(), // Corregido: 'P' en 'pastPrice' debe estar en mayúscula
                actualPrice: precioConDescuento.toString(), // Corregido: 'A' en 'actualPrice' debe estar en mayúscula
                cost: costoTotal.toString(),
              };
            })
          );

          dispatch({ type: "SET_HOTELS", payload: hotelsRelatedData });
        }
      } catch (error) {
        console.error("Error fetching hotel names:", error); // Corregido: "hotels" -> "hotel" en el mensaje de error
      } finally {
        setLoading(false);
      }
    }

    const searchParams = new URLSearchParams(location.search);
    const hotelSearch = searchParams.get("hotel")?.toLowerCase();
    const checkIn = new Date(searchParams.get("checkIn"));
    const checkOut = new Date(searchParams.get("checkOut"));
    const guests = Number(searchParams.get("guests"));


    fetchHotels();
  }, [dispatch]);

  const hotels = state.hotels;

  const handleHotelClick = (hotel) => {
    dispatch({ type: "SELECT_HOTEL", payload: hotel });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="content__listHotels">
      {hotels.map((hotel, index) => {
        return (
          <div className="content__listHotels--card" key={index}>
            <Hotel
              hotelId={hotel.hotelId} // Corregido: 'H' en 'hotelId' debe estar en minúscula
              image={hotel.image}
              title={hotel.title}
              location={hotel.location}
              description={hotel.description}
              reviews={hotel.reviews}
              pastPrice={hotel.pastPrice} // Corregido: 'P' en 'pastPrice' debe estar en mayúscula
              actualPrice={hotel.actualPrice} // Corregido: 'A' en 'actualPrice' debe estar en mayúscula
              onClick={() => handleHotelClick(hotel)}
            />
          </div>
        );
      })}
    </div>
  );
}
