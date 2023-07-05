import { createContext, useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import calcularCostoReserva from "./calculateCost";
import fetchSearch from "./fetchSearch";
import Hotel from "../Hotel/Hotel";
import "./ListHotels.scss";

const initialState = {
  hotels: [],
  selectedHotel: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_HOTELS":
      return {
        ...state,
        hotels: action.payload,
      };
    case "SELECT_HOTEL":
      return {
        ...state,
        selectedHotel: action.payload,
      };
    default:
      return state;
  }
}

export const StateContext = createContext();

export default function ListHotels() {
  const location = useLocation();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { hotels, selectedHotel } = state;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const hotelSearch = searchParams.get("hotel")?.toLowerCase() || "";

    async function fetchHotels() {
      try {
        const searchIds = await fetchSearch(hotelSearch);
        const hotelPromises = searchIds.map(async (id) => {
          try {
            const [hotelResponse, locationResponse, imageResponse] =
              await Promise.all([
                fetch(
                  `https://backend-top-v29-hoteles.onrender.com/api/hotel/${id}`
                ).then((response) => response.json()),
                fetch(
                  `https://backend-top-v29-hoteles.onrender.com/api/location/${id}`
                ).then((response) => response.json()),
                fetch(
                  `https://backend-top-v29-hoteles.onrender.com/api/image/${id}`
                ).then((response) => response.json()),
              ]);

            const { id: hotelId, hotel: title, about } = hotelResponse;
            const { city, address } = locationResponse;
            const { url: image } = imageResponse;

            const checkIn = new Date(searchParams.get("checkIn"));
            const checkOut = new Date(searchParams.get("checkOut"));
            const guests = Number(searchParams.get("guests"));
            const { costoTotal, precioPasado, precioConDescuento } =
              calcularCostoReserva(checkIn, checkOut, guests);
            console.log(costoTotal, precioPasado, precioConDescuento);
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
            return null; // Devuelve null en caso de error para filtrar más adelante
          }
        });

        const hotelsRelatedData = await Promise.all(hotelPromises);
        const filteredHotels = hotelsRelatedData.filter(
          (hotel) => hotel !== null
        ); // Filtra los hoteles que tuvieron errores
        dispatch({ type: "SET_HOTELS", payload: filteredHotels });
      } catch (error) {
        console.error("Error fetching search ids:", error);
      }
    }

    fetchHotels();
  }, [location.search]);

  // Callback para manejar el clic en un hotel
  const handleHotelClick = (hotel) => {
    dispatch({ type: "SELECT_HOTEL", payload: hotel });
  };

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="contentlist__Hotels">
        {hotels.map((hotel) => (
          <div className="content__listHotels--card" key={hotel.hotelId}>
            <Hotel
              HotelId={hotel.hotelId}
              image={hotel.image}
              title={hotel.title}
              location={hotel.location}
              description={hotel.description}
              reviews={hotel.reviews}
              pastprice={hotel.precioPasado}
              actualprice={hotel.precioConDescuento}
              onClick={() => handleHotelClick(hotel)} // Pasar la función de devolución de llamada
            />
          </div>
        ))}
        {selectedHotel && (
          <div>
            {/* Renderizar aquí el componente del hotel seleccionado */}
          </div>
        )}
      </div>
    </StateContext.Provider>
  );
}
