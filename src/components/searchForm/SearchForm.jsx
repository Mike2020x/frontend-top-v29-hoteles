import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './index.scss';

export default function SearchForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const [hotel, setHotel] = useState('');
  const [checkIn, setCheckIn] = useState(getCurrentDate());
  const [checkOut, setCheckOut] = useState(getNextDay(getCurrentDate()));
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setHotel(searchParams.get('hotel') || '');
    setCheckIn(searchParams.get('checkIn') || getCurrentDate());
    setCheckOut(searchParams.get('checkOut') || getNextDay(getCurrentDate()));
    setGuests(parseInt(searchParams.get('guests')) || 1);
  }, [location.search]);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    if (name === 'hotel') {
      setHotel(value);
    } else if (name === 'checkIn') {
      setCheckIn(value);
      setCheckOut(getNextDay(value));
    } else if (name === 'checkOut') {
      setCheckOut(value);
    } else if (name === 'guests') {
      setGuests(value);
    }
  };

  const handleSearch = () => {

    if (!hotel) {
      alert('Por favor, ingrese el nombre o la ciudad del hotel.');
      return;
    }

    const searchParams = new URLSearchParams();
    searchParams.set('hotel', hotel);
    searchParams.set('checkIn', checkIn);
    searchParams.set('checkOut', checkOut);
    searchParams.set('guests', guests);

    navigate(`/hotel-list?search=${searchParams.toString()}`);
  };

  return (
    <div className='content__titles'>
      <h1>BOOK ROOMS, HOMES & APTS</h1>
      <div className='content__titles--search'>
        <div className='content__titles--box'>
          <div className='content__titles--mobileBox'>
            <div className='content__titles--border'>
              <h4>HOTEL</h4>
              <input
                type="text"
                className='location'
                name="hotel"
                value={hotel}
                onChange={handleInputChange}
                placeholder="Name or City"
              />
            </div>
            <div className="border__right1"></div>
            <div className='content__titles--border'>
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
          <div className='content__titles--mobileBox'>
            <div className='content__titles--border'>
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
            <div className='content__titles--border'>
              <h4>GUESTS</h4>
              <input
                className="choose_guest"
                placeholder={guests}
                type="number"
                min="1"
                max="5"
                name="guests"
                value={guests}
                onChange={handleInputChange}
              />
            </div>
            <div className="border__right2"></div>
          </div>
          <div className='content__titles--box search'>
            {hotel ? (
              <Link to={`/hotel-list?hotel=${hotel}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`}>
                <button>SEARCH</button>
              </Link>
            ) : (
              <button onClick={handleSearch}>SEARCH</button>
            )}
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
  return nextDay.toISOString().split('T')[0];
}
