import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useHotel } from "../../context";
import cleanExpiredSearches from "./localStorage";
import calcularCostoReserva from "./calculateCost";
import fetchSearch from "./fetchSearch";
import Hotel from "../Hotel/Hotel";
import Loading from "../loading/Loading";
import "./ListHotels.scss";

export default function ListHotels() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state, dispatch } = useHotel();
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const firstHotelRef = useRef(null); // Referencia al primer hotel

  useEffect(() => {
    async function fetchHotels() {
      try {
        cleanExpiredSearches();
        const searchParams = new URLSearchParams(location.search);
        const hotelSearch = searchParams.get("hotel")?.toLowerCase();
        const checkIn = new Date(searchParams.get("checkIn"));
        const checkOut = new Date(searchParams.get("checkOut"));
        const guests = Number(searchParams.get("guests"));

        if (hotelSearch) {
          // Verificar si ya existe una búsqueda en el Local Storage
          const storedSearches = localStorage.getItem("searches");
          let searches = storedSearches ? JSON.parse(storedSearches) : [];

          const existingSearch = searches.find((search) => {
            // Comparar los valores de búsqueda
            return (
              search.hotelSearch === hotelSearch &&
              search.checkIn === checkIn.toString() &&
              search.checkOut === checkOut.toString() &&
              search.guests === guests
            );
          });

          if (existingSearch) {
            // Cargar datos desde el Local Storage
            const hotelsRelatedData = existingSearch.hotelsRelatedData;
            dispatch({ type: "SET_HOTELS", payload: hotelsRelatedData });
            const slicedData = hotelsRelatedData.slice(0, 6);
            setData(slicedData);
          } else {
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
                  duracionEstadia,
                  numeroHabitaciones,
                  costoAdicionalPorPersona,
                  precioBasePorNoche,
                  mensaje,
                  costoAdicional,
                  descuentoEstadiaLarga,
                  costoBasePorNoche,
                  total,
                  impuesto,
                  precioPasado,
                  descuento,
                  precioActual,
                } = calcularCostoReserva(checkIn, checkOut, guests);
                const ratings = Math.ceil(Math.random() * 10000);

                return {
                  hotelId: id,
                  image: url,
                  title: hotel,
                  location: city,
                  address,
                  description: about,
                  reviews: ratings,
                  days: duracionEstadia,
                  numRooms: numeroHabitaciones,
                  costAdditionalPerson: costoAdicionalPorPersona,
                  priceBaseNight: precioBasePorNoche,
                  message: mensaje,
                  costAdditional: costoAdicional,
                  discountStay: descuentoEstadiaLarga,
                  costBaseNight: costoBasePorNoche,
                  total: total,
                  taxes: impuesto,
                  pastPrice: precioPasado,
                  discount: descuento,
                  actualPrice: precioActual,
                  checkIn,
                  checkOut,
                  guests
                };
              })
            );

            // Guardar los parámetros de búsqueda y los resultados en el Local Storage
            searches.push({
              hotelSearch: hotelSearch,
              checkIn: checkIn.toString(),
              checkOut: checkOut.toString(),
              guests: guests,
              hotelsRelatedData: hotelsRelatedData,
            });

            localStorage.setItem("searches", JSON.stringify(searches));

            dispatch({ type: "SET_HOTELS", payload: hotelsRelatedData });
            const slicedData = hotelsRelatedData.slice(0, 6);
            setData(slicedData);
          }
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
    navigate(`/hotel-single?checkIn=${hotel.checkIn}&checkOut=${hotel.checkOut}&guests=${hotel.guests}`);
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
