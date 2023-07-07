import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import calcularCostoReserva from "./calculateCost";
import fetchSearch from "./fetchSearch";
import Hotel from "../Hotel/Hotel";
import Loading from "../loading/Loading";
import "./ListHotels.scss";
import { useHotel } from "../../context";

export default function ListHotels() {
  const location = useLocation();
  const { state, dispatch } = useHotel();

  useEffect(() => {
    async function fetchHotels() {
      try {
        const searchParams = new URLSearchParams(location.search);
        const hotelSearch = searchParams.get("hotel")?.toLowerCase();
        const checkIn = new Date(searchParams.get("checkIn"));
        const checkOut = new Date(searchParams.get("checkOut"));
        const guests = Number(searchParams.get("guests"));

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
              const { hotel, about } = hotelData;
              const { city, address } = locationData;
              const { url } = imageData;
              const {
                precioPasado,
                precioConDescuento,
                costoTotal,
              } = calcularCostoReserva(checkIn, checkOut, guests);
              const ratings = Math.ceil(Math.random() * 10000).toString();

              return {
                hotelId: id,
                image: url,
                title: hotel,
                location: city,
                address,
                description: about,
                reviews: ratings,
                pastPrice: precioPasado.toString(),
                actualPrice: precioConDescuento.toString(),
                cost: costoTotal.toString(),
              };
            })
          );

          dispatch({ type: "SET_HOTELS", payload: hotelsRelatedData });
        }
      } catch (error) {
        console.error("Error fetching hotel names:", error);
      } finally {
        dispatch({ type: "LOADING", payload: false });
      }
    }

    fetchHotels();
  }, [dispatch, location.search]);

  const handleHotelClick = (hotel) => {
    dispatch({ type: "SELECT_HOTEL", payload: hotel });
    dispatch({ type: "LOADING", payload: true });
  };

  if (state.loading) {
    return <Loading />;
  }

  return (
    <div className="content__listHotels">
      {state.hotels.map((hotel, index) => {
        return (
          <div className="content__listHotels--card" key={index}>
            <Hotel
              hotelId={hotel.hotelId}
              image={hotel.image}
              title={hotel.title}
              location={hotel.location}
              description={hotel.description}
              reviews={hotel.reviews}
              pastPrice={hotel.pastPrice}
              actualPrice={hotel.actualPrice}
              onClick={() => handleHotelClick(hotel)}
            />
          </div>
        );
      })}
    </div>
  );
}
