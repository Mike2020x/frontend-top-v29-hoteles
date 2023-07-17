import { useEffect, useRef, useState } from "react";
import { useHotel } from "../../context";
import calcularCostoReserva from "../ListHotels/calculateCost";
import Hotel from "../Hotel/Hotel";
import Loading from "../loading/Loading";

export default function Hotels() {
  const { state, dispatch } = useHotel();
  const [currentPage, setCurrentPage] = useState(1);
  const firstHotelRef = useRef(null); // Referencia al primer hotel

  useEffect(() => {
    async function fetchHotels() {
      try {
        const checkIn = new Date(getCurrentDate());
        const checkOut = new Date(getNextDay(getCurrentDate()));
        // Verificar si hay datos en el LocalStorage
        const hotelsFromLocalStorage = localStorage.getItem("hotels");
        if (hotelsFromLocalStorage) {
          const localHotels = JSON.parse(hotelsFromLocalStorage);
          dispatch({ type: "SET_HOTELS", payload: localHotels });
        } else {
          // Si no hay datos en el LocalStorage, hacer la llamada a la API
          const response = await fetch(
            `${import.meta.env.VITE_BASE_URL}/api/hotel`
          );

          const hotels = await response.json();

          const resultHotels = hotels.map((hotel) => {
            const {
              duracionEstadia,
              numeroHabitaciones,
              costoAdicionalPorPersona,
              precioBasePorNoche,
              personasAdicionales,
              costoAdicional,
              descuentoEstadiaLarga,
              costoBasePorNoche,
              total,
              impuesto,
              precioPasado,
              descuento,
              precioActual,
            } = calcularCostoReserva(checkIn, checkOut, 1);
            const imageUrl = hotel.image[0].url;
            const locationCity = hotel.location[0].city;
            const locationAddress = hotel.location[0].address;
            const ratings = Math.ceil(Math.random() * 10000);

            return {
              hotelId: hotel.id,
              image: imageUrl,
              title: hotel.hotel,
              location: locationCity,
              address: locationAddress,
              description: hotel.about,
              reviews: ratings,
              days: duracionEstadia,
              numRooms: numeroHabitaciones,
              costAdditionalPerson: costoAdicionalPorPersona,
              priceBaseNight: precioBasePorNoche,
              additionalPerson: personasAdicionales,
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
              guests: 1,
              types: "",
            };
          });

          dispatch({ type: "SET_HOTELS", payload: resultHotels });

          // Guardar los datos en el LocalStorage
          const dataHotels = JSON.stringify(resultHotels);
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

function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
}

function getNextDay(dateString) {
  const currentDate = new Date(dateString);
  const nextDay = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
  return nextDay.toISOString().split("T")[0];
}
