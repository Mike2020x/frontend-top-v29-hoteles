import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHotel } from "../../context";
import calcularCostoHotel from "./calculateCostHotels";
import Hotel from "../Hotel/Hotel";
import Loading from "../loading/Loading";
import "./Hotels.scss";

export default function Hotels() {
  const navigate = useNavigate();
  const { state, dispatch } = useHotel();
  const [currentPage, setCurrentPage] = useState(1);
  const firstHotelRef = useRef(null); // Referencia al primer hotel

  useEffect(() => {
    async function fetchHotels() {
      try {
        // Verificar si hay datos en el LocalStorage
        const hotelsFromLocalStorage = localStorage.getItem("hotels");
        if (hotelsFromLocalStorage) {
          const hotels = JSON.parse(hotelsFromLocalStorage);
          dispatch({ type: "SET_HOTELS", payload: hotels });
        } else {
          // Si no hay datos en el LocalStorage, hacer la llamada a la API
          const response = await fetch(
            `${import.meta.env.VITE_BASE_URL}/api/hotel`
          );
          const hotels = await response.json();
          dispatch({ type: "SET_HOTELS", payload: hotels });

          // Guardar los datos en el LocalStorage
          const dataHotels = JSON.stringify(hotels);
          localStorage.setItem("hotels", dataHotels);
        }
      } catch (error) {
        console.error("Error al obtener los hoteles:", error);
      } finally {
        dispatch({ type: "LOADING", payload: false });
      }
    }
    fetchHotels();
  }, [dispatch]);

  const handleHotelClick = (hotel) => {
    dispatch({ type: "SELECT_HOTEL", payload: hotel });
    dispatch({ type: "LOADING", payload: true });
    navigate(`/hotel-single?hotel=${hotel}`);
  };

  if (state.loading) {
    return <Loading height="100vh" />;
  }

  const startIndex = (currentPage - 1) * 9;
  const endIndex = startIndex + 9;
  const dataHotels = state.hotels.slice(startIndex, endIndex);
  const totalPages = Math.ceil(state.hotels.length / 9);

  const handlePageChange = (page) => {
    setCurrentPage(page);

    // Desplazarse al primer hotel cuando cambie el conjunto de datos
    if (firstHotelRef.current) {
      firstHotelRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="content__listHotels">
        {dataHotels.map((hotel, index) => {
          let info = calcularCostoHotel();
          return (
            <div className="content__listHotels--card" key={index}>
              <Hotel
                hotelId={hotel.id}
                image={hotel.image[0].url}
                title={hotel.hotel}
                location={hotel.location.city}
                description={hotel.about}
                reviews={info.reviews}
                pastPrice={info.precioPasado}
                actualPrice={info.precioActual}
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
