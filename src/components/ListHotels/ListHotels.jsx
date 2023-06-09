import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useHotel } from "../../context";

import calcularCostoReserva from "./calculateCost";
import fetchSearch from "./fetchSearch";
import Hotel from "../Hotel/Hotel";
import Loading from "../loading/Loading";
import "./ListHotels.scss";

export default function ListHotels() {
  const location = useLocation();
  const navigate = useNavigate()
  const { state, dispatch } = useHotel();
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const firstHotelRef = useRef(null); // Referencia al primer hotel

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
              const { precioPasado, precioConDescuento, costoTotal, duracionEstadia, descuento, impuesto, precioBasePorNoche } =
                calcularCostoReserva(checkIn, checkOut, guests);
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
                days: duracionEstadia.toString(),
                discount: descuento.toString(),
                taxes: impuesto.toString(),
                priceNight: precioBasePorNoche.toString(),
                checkIn,
                checkOut,
                guests,
              };
            })
          );

          dispatch({ type: "SET_HOTELS", payload: hotelsRelatedData });
          const slicedData = hotelsRelatedData.slice(0, 6);
          setData(slicedData);
        }
      } catch (error) {
        console.error("Error fetching hotels:", error);
      } finally {
        dispatch({ type: "LOADING", payload: false });
      }
    }

    fetchHotels();
  }, [dispatch, location.search]);

  const handleHotelClick = (hotel) => {
    dispatch({ type: "SELECT_HOTEL", payload: hotel });
    dispatch({ type: "LOADING", payload: true });

    const searchParams = new URLSearchParams();
    searchParams.set("checkIn", hotel.checkIn);
    searchParams.set("checkOut", hotel.checkOut);
    searchParams.set("guests", hotel.guests);

    navigate(`/hotel-single?search=${searchParams.toString()}`);
  };

  if (state.loading) {
    return <Loading height="35vh" />;
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);

    const startIndex = (page - 1) * 6;
    const endIndex = startIndex + 6;
    const slicedData = state.hotels.slice(startIndex, endIndex);
    setData(slicedData);
    // Desplazarse al primer hotel cuando cambie el conjunto de datos
    if (firstHotelRef.current) {
      firstHotelRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const totalPages = Math.ceil(state.hotels.length / 6);

  return (
    <>
      <div className="content__listHotels">
        {data.map((hotel, index) => {
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
                ref={index === 0 ? firstHotelRef : null} // Establecer la referencia al primer hotel
              />
            </div>
          );
        })}
      </div>
      <div className="content__listHotels--buttons">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? "active" : ""}
            >
              {page}
            </button>
          )
        )}
      </div>
    </>
  );
}
