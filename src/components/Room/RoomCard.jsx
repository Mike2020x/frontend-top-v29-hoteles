import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import { useHotel } from "../../context";
// import HotelMap from "../hotelMap/HotelMap";
import "./index.scss";

export default function RoomCard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hotel, setHotel] = useState("");
  const [checkIn, setCheckIn] = useState(getCurrentDate());
  const [checkOut, setCheckOut] = useState(getNextDay(getCurrentDate()));
  const [guests, setGuests] = useState(1);
  // const { state } = useHotel();
  // const { selectedHotel: hotelData } = state;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setHotel(searchParams.get("hotel") || "");
    setCheckIn(searchParams.get("checkIn") || getCurrentDate());
    setCheckOut(searchParams.get("checkOut") || getNextDay(getCurrentDate()));
    setGuests(parseInt(searchParams.get("guests")) || 1);
  }, [location.search]);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    if (name === "hotel") {
      setHotel(value);
    } else if (name === "checkIn") {
      setCheckIn(value);
      setCheckOut(getNextDay(value));
    } else if (name === "checkOut") {
      setCheckOut(value);
    } else if (name === "guests") {
      setGuests(value);
    }
  };

  const handleSearch = () => {
    if (!hotel) {
      alert("Por favor, ingrese el nombre o la ciudad del hotel.");
      return;
    }

    const searchParams = new URLSearchParams();
    searchParams.set("hotel", hotel);
    searchParams.set("checkIn", checkIn);
    searchParams.set("checkOut", checkOut);
    searchParams.set("guests", guests);

    navigate(`/hotel-list?search=${searchParams.toString()}`);
  };

  const handleSize = () => {};

  // Generar la URL de la imagen de la vista previa del mapa
  // const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(
  //   "Calle 113 Number 7-65, , Bogotá - Colombia"
  // )}&zoom=15&size=400x300&maptype=roadmap&markers=color:red%7C${encodeURIComponent(
  //   "Calle 113 Number 7-65, , Bogotá - Colombia"
  // )}&key=${import.meta.env.API_KEY}`;

  return (
    <div className="room-card" onClick={handleSize}>
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
          <h4>$251</h4>
        </div>
        <div className="room-card__information">
          <p>
            <FontAwesomeIcon icon={faCheck} /> Non Refundable
          </p>
          <h3>$230</h3>
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
          <select name="room" id="types">
            <option value="0">Room Type</option>
            <option value="1">Single Room</option>
            <option value="2">Double Room</option>
            <option value="3">Family Room</option>
            <option value="4">Suite Room</option>
          </select>
        </div>
        <div className="room-card__search-button">
          {hotel ? (
            <Link
              to={`/hotel-list?hotel=${hotel}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`}
            >
              <button className="room-card__search-button--link">
                Book This Now
              </button>
            </Link>
          ) : (
            <button
              className="room-card__search-button--button"
              onClick={handleSearch}
            >
              Book This Now
            </button>
          )}
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
