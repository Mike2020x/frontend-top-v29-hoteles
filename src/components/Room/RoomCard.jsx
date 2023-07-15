import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useHotel } from "../../context";
import calcularCostoRoom from "../ListHotels/calculateCostRoom";
import "./index.scss";

export default function RoomCard() {
  const [checkIn, setCheckIn] = useState(getCurrentDate());
  const [checkOut, setCheckOut] = useState(getNextDay(getCurrentDate()));
  const [guests, setGuests] = useState(1);
  const [types, setTypes] = useState("Single Room");

  const { state, dispatch } = useHotel();
  const { selectedHotel, selectedRooms } = state;

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    if (name === "types") {
      setTypes(value);
      console.log("types actual: ", value);
    } else if (name === "checkIn") {
      setCheckIn(value);
      setCheckOut(getNextDay(value));
    } else if (name === "checkOut") {
      setCheckOut(value);
    } else if (name === "guests") {
      setGuests(value);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (!guests) {
      alert("Por favor, ingrese la cantidad de personas.");
      return;
    }

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
    } = calcularCostoRoom(
      checkIn,
      checkOut,
      guests,
      types,
      selectedHotel.priceBaseNight
    );

    const updatedHotel = {
      ...selectedHotel,
      days: duracionEstadia,
      numRooms: numeroHabitaciones,
      costAdditionalPerson: costoAdicionalPorPersona,
      priceBaseNight: precioBasePorNoche,
      message: personasAdicionales,
      costAdditional: costoAdicional,
      discountStay: descuentoEstadiaLarga,
      costBaseNight: costoBasePorNoche,
      total: total,
      taxes: impuesto,
      pastPrice: precioPasado,
      discount: descuento,
      actualPrice: precioActual,
    };

    dispatch({ type: "SELECT_HOTEL", payload: updatedHotel });
    console.log(updatedHotel)
    const updatedRooms = {
      ...selectedRooms,
      pastPrice: precioPasado,
      actualPrice: precioActual,
    };

    dispatch({ type: "SELECT_ROOMS", payload: updatedRooms });
    console.log(updatedRooms)
  };

  return (
    <div className="room-card">
      <Link to="/hotel-map">
        <div className="room-card__image">
          <img src="/google-map.jpg" alt="Google Map" />
        </div>
      </Link>
      <div>
        <div className="room-card__information">
          <h3>Deluxe Rate</h3>
          <p>Per Night</p>
        </div>
        <div className="room-card__information">
          <p>
            <FontAwesomeIcon icon={faCheck} /> Room Only
          </p>
          <h4>{selectedHotel.pastPrice}</h4>
        </div>
        <div className="room-card__information">
          <p>
            <FontAwesomeIcon icon={faCheck} /> Non Refundable
          </p>
          <h3>{selectedHotel.actualPrice}</h3>
        </div>
      </div>
      <div className="room-card__search">
        <div className="room-card__search-inputs">
          <input
            type="date"
            id="checkIn"
            className="room-card__search-input"
            name="checkIn"
            value={checkIn}
            placeholder="Check In"
            min={getCurrentDate()} // Establecer la fecha mínima como la fecha actual
            onChange={handleInputChange}
          />
          <input
            type="date"
            id="checkOut"
            className="room-card__search-input"
            name="checkOut"
            value={checkOut}
            placeholder="Check Out"
            min={checkIn} // Establecer la fecha mínima como el valor de check-in
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="room-card__search-input"
            name="guests"
            value={guests}
            placeholder="Rooms & Guests"
            onChange={handleInputChange}
          />
          <select name="types" id="types" value={types} onChange={handleInputChange}>
            <option value="Single Room">Type Room</option>
            <option value="Single Room">Single Room</option>
            <option value="Double Room">Double Room</option>
            <option value="Family Room">Family Room</option>
          </select>
        </div>
        <div className="room-card__search-button">
          <button
            className="room-card__search-button--button"
            onClick={handleSearch}
            type="button"
          >
            Book This Now
          </button>
        </div>
      </div>
    </div>
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
