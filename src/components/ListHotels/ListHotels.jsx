import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import calcularCostoReserva from "./calculateCost";
import fetchSearch from "./fetchSearch";
import Hotel from "../Hotel/Hotel";
import "./ListHotels.scss";
import { useHotel } from "../../context";

export default function ListHotels() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const hotelSearch = searchParams.get("hotel")?.toLowerCase();
  const checkIn = new Date(searchParams.get("checkIn"));
  const checkOut = new Date(searchParams.get("checkOut"));
  const guests = Number(searchParams.get("guests"));
  const { state, dispatch } = useHotel();
  let cost = []

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

              return {
                title: name,
                description: about,
                location: city,
                image: url,
              };
            })
          );

          dispatch({ type: "SET_HOTELS", payload: hotelsRelatedData });
        }
      } catch (error) {
        console.error("Error fetching hotels names:", error);
      }
    }

    fetchHotels();
  }, [dispatch, hotelSearch]);

  const hotels = state.hotels;

  return (
    <div className="content__listHotels">
      {hotels.map((hotel, index) => {
        const { costoTotal, precioPasado, precioConDescuento } =
          calcularCostoReserva(checkIn, checkOut, guests);
        cost.push(costoTotal)
        const reviews = Math.ceil(Math.random() * 10000);

        return (
          <div className="content__listHotels--card" key={index}>
            <Hotel
              image={hotel.image}
              title={hotel.title}
              location={hotel.location}
              description={hotel.description}
              reviews={reviews}
              pastprice={precioPasado.toString()}
              actualprice={precioConDescuento.toString()}
            />
          </div>
        );
      })}
    </div>
  );
}
