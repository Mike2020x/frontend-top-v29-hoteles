import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./index.scss";
import { titleImages } from "../../assets/images";
export default function SearchForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [hotel, setHotel] = useState("");
  const [checkIn, setCheckIn] = useState(getCurrentDate());
  const [checkOut, setCheckOut] = useState(getNextDay(getCurrentDate()));
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * titleImages.length);
      const randomImageUrl = titleImages[randomIndex];
      setBackgroundImage(randomImageUrl);
    }, 5000); // Intervalo de 5 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [isPaused]);

  const handleImageClick = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setHotel(searchParams.get("hotel") || "");
    setCheckIn(searchParams.get("checkIn") || getCurrentDate());
    setCheckOut(searchParams.get("checkOut") || getNextDay(getCurrentDate()));
    setGuests(parseInt(searchParams.get("guests")) || 1);
  }, [location.search]);

  const handleInputChange = (event) => {
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

  const handleSearch = (event) => {
    event.preventDefault();

    if (!hotel) {
      alert("Por favor, ingrese el nombre o la ciudad del hotel.");
      return;
    }

    if (guests < 1) {
      alert("No se puede ingresar valores menores a 1");
    } else if (guests > 10) {
      alert("No se puede ingresar más de 10 personas");
    } else {
      // Validación adicional antes de navegar
      navigate(
        `/hotel-list?hotel=${hotel}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`
      );
    }
  };

  return (
    <div
      className={`content__titles ${isPaused ? "paused" : ""}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
      onClick={handleImageClick}
    >
      <h1>BOOK ROOMS, HOMES & APTS</h1>
      <div className="content__titles--search">
        <div className="content__titles--box">
          <div className="content__titles--mobileBox">
            <div className="content__titles--border">
              <h4>HOTEL</h4>
              <input
                type="text"
                className="location"
                name="hotel"
                value={hotel}
                onChange={handleInputChange}
                placeholder="Name or City"
              />
            </div>
            <div className="border__right1"></div>
            <div className="content__titles--border">
              <h4>CHECK IN</h4>
              <input
                type="date"
                id="checkIn"
                className="search-for--input"
                name="checkIn"
                value={checkIn}
                min={getCurrentDate()} // Establecer la fecha mínima como la fecha actual
                onChange={handleInputChange}
              />
            </div>
            <div className="border__right2"></div>
          </div>
          <div className="content__titles--mobileBox">
            <div className="content__titles--border">
              <h4>CHECK OUT</h4>
              <input
                type="date"
                id="checkOut"
                className="search-for--input"
                name="checkOut"
                value={checkOut}
                min={checkIn} // Establecer la fecha mínima como el valor de check-in
                onChange={handleInputChange}
              />
            </div>
            <div className="border__right1"></div>
            <div className="content__titles--border">
              <h4>GUESTS</h4>
              <input
                className="choose_guest"
                placeholder={guests}
                type="number"
                min="1"
                max="10"
                name="guests"
                value={guests}
                onChange={handleInputChange}
              />
            </div>
            <div className="border__right2"></div>
          </div>
          <div className="content__titles--box search">
            <button onClick={handleSearch}>SEARCH</button>
          </div>
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
