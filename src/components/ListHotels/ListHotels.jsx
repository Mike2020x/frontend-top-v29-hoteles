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
  const { dispatch } = useHotel();
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const searchParams = new URLSearchParams(location.search);
      const hotelSearch = searchParams.get("hotel")?.toLowerCase();
      const hotels = await fetchHotels(
        hotelSearch,
        searchParams,
        dispatch,
        setLoading
      );
      setList(hotels);
    };

    fetchData();
  }, [dispatch, location.search]);

  const handleHotelClick = (hotel) => {
    dispatch({ type: "SELECT_HOTEL", payload: hotel });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="contentlist__Hotels">
      {list.map((hotel) => (
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
    </div>
  );
}

async function fetchHotels(hotelSearch, searchParams, dispatch, setLoading) {
  try {
    const searchIds = await fetchSearch(hotelSearch);
    const hotelPromises = searchIds.map((id) =>
      fetchHotelData(id, searchParams)
    );
    const hotels = await Promise.all(hotelPromises);
    dispatch({ type: "SET_HOTELS", payload: hotels });
    return hotels;
  } catch (error) {
    console.error("Error fetching hotel promises:", error);
    return [];
  } finally {
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
