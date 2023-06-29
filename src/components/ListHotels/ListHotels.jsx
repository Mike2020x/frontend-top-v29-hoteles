import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import calcularCostoReserva from "./calculateCost";
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

  const { costoTotal, precioPasado, precioConDescuento } = calcularCostoReserva(
    checkIn,
    checkOut,
    guests
  );
  console.log("Costo de la reserva:", costoTotal);

  useEffect(() => {
    async function fetchHotels() {
      try {
        const response = await fetch(
          `https://backend-top-v29-hoteles.onrender.com/api/hotel`
        );
        if (response.ok) {
          const data = await response.json();
          const hotelFilter = data.filter((element) =>
            element.hotel.toLowerCase().includes(hotelSearch)
          );

          // const updatedHotels = filteredHotels.map((element) => {
          //   const { image, hotel, location, about } = element;
          //   const { url } = image;
          //   const { city } = location;
          //   return {
          //     image: url,
          //     hotel: hotel,
          //     location: city,
          //     about: about,
          //     pastprice: "",
          //     actualprice: "",
          //   };
          // });
          console.log(hotelFilter);
          setHotels(hotelFilter);
        }
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    }

    fetchHotels();
  }, [hotelSearch]);

  return (
    <>
      <div className="content__listHotels">
        {hotels.map((hotel, index) => {
          let azar = Math.ceil(Math.random() * 100);
          return (
            <div className="content__listHotels--card" key={index}>
              <Hotel
                image={hotel.image}
                title={hotel.hotel}
                location={hotel.location}
                description={hotel.about}
                pastprice={precioPasado + azar}
                actualprice={precioConDescuento + azar}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
