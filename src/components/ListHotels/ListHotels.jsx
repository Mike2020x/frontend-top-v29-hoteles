import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import calcularCostoReserva from "./calculateCost";
import fetchSearch from "./fetchSearch";
import Hotel from "../Hotel/Hotel";
import "./ListHotels.scss";

export default function ListHotels() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const hotelSearch = searchParams.get("hotel").toLowerCase();
  const checkIn = new Date(searchParams.get("checkIn"));
  const checkOut = new Date(searchParams.get("checkOut"));
  const guests = Number(searchParams.get("guests"));
  const [hotels, setHotels] = useState([]);
  const costs = []

  useEffect(() => {
    async function fetchHotels() {
      try {
        // Obtener los IDs de búsqueda
        const searchIds = await fetchSearch(hotelSearch);

        // Obtener las propiedades relacionadas para cada hotel
        const hotelsRelatedData = await Promise.all(
          searchIds.map(async (id) => {
            const hotelResponse = await fetch(
              `https://backend-top-v29-hoteles.onrender.com/api/hotel/${id}`
            );
            const hotelData = await hotelResponse.json();
            const name = hotelData.hotel;
            const about = hotelData.about;

            const locationResponse = await fetch(
              `https://backend-top-v29-hoteles.onrender.com/api/location/${id}`
            );
            const locationData = await locationResponse.json();
            const city = locationData.city;

            const imageResponse = await fetch(
              `https://backend-top-v29-hoteles.onrender.com/api/image/${id}`
            );
            const imageData = await imageResponse.json();
            const url = imageData.url;

            return {
              title: name,
              description: about,
              location: city,
              image: url,
            };
          })
        );

        setHotels(hotelsRelatedData);
      } catch (error) {
        console.error("Error fetching hotels names:", error);
      }
    }

    fetchHotels();
  }, [hotelSearch]);

  return (
    <>
      <div className="content__listHotels">
        {hotels.map((hotel, index) => {
          let { costoTotal, precioPasado, precioConDescuento } =
            calcularCostoReserva(checkIn, checkOut, guests);
          costs.push(costoTotal)
          let reviews = Math.ceil(Math.random() * 10000)
          return (
            <div className="content__listHotels--card" key={index}>
              <Hotel
                image={hotel.image} // Obtener la primera imagen del hotel
                title={hotel.title}
                location={hotel.location} // Obtener la primera ubicación del hotel
                description={hotel.description}
                reviews={reviews}
                pastprice={precioPasado.toString()}
                actualprice={precioConDescuento.toString()}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
