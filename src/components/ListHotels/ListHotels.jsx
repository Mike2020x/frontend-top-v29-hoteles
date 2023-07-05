import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import calcularCostoReserva from "./calculateCost";
import fetchSearch from "./fetchSearch";
import Hotel from "../Hotel/Hotel";
import process from 'process';
import "./ListHotels.scss";

export default function ListHotels() {
  const location = useLocation();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const hotelSearch = searchParams.get("hotel")?.toLowerCase() || "";
    async function fetchHotels() {
      try {
        const searchIds = await fetchSearch(hotelSearch);
        const hotelsRelatedData = [];

        for (const id of searchIds) {
          const [hotelResponse, locationResponse, imageResponse] = await Promise.all([
            fetch(`${process.env.API_BASE_URL}/hotel/${id}`).then((response) => response.json()),
            fetch(`${process.env.API_BASE_URL}/location/${id}`).then((response) => response.json()),
            fetch(`${process.env.API_BASE_URL}/image/${id}`).then((response) => response.json()),
          ]);

          const { id: hotelId, hotel: title, about } = hotelResponse;
          const { city } = locationResponse;
          const { url: image } = imageResponse;

          const checkIn = new Date(searchParams.get("checkIn"));
          const checkOut = new Date(searchParams.get("checkOut"));
          const guests = Number(searchParams.get("guests"));
          const { costoTotal, precioPasado, precioConDescuento } = calcularCostoReserva(checkIn, checkOut, guests);
          const reviews = Math.ceil(Math.random() * 10000);

          hotelsRelatedData.push({
            id: hotelId,
            image,
            title,
            location: city,
            description: about,
            reviews,
            pastPrice: precioPasado,
            actualPrice: precioConDescuento,
            totalPrice: costoTotal,
          });
        }

        setHotels(hotelsRelatedData);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    }

    fetchHotels();
  }, [location.search]);

  return (
    <div className="content__listHotels">
      {hotels.map((hotel, index) => (
        <div className="content__listHotels--card" key={index}>
          <Hotel
            id={hotel.id}
            image={hotel.image}
            title={hotel.title}
            location={hotel.location}
            description={hotel.description}
            reviews={hotel.reviews}
            pastprice={hotel.pastPrice.toString()}
            actualprice={hotel.actualPrice.toString()}
          />
        </div>
      ))}
    </div>
  );
}
