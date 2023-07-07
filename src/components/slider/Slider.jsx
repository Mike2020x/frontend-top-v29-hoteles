import { useState } from 'react';
import PropTypes from 'prop-types';
import Hotel from '../Hotel/Hotel';
import { useHotel } from '../../context';
import './index.scss';

const HotelsSlider = ({ hotels, id }) => {
  const { dispatch } = useHotel();
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredHotels = hotels.filter((hotel) => hotel.hotelId !== id);
  const visibleHotels = getVisibleHotels();

  function getVisibleHotels() {
    const prevIndex = (currentIndex - 1 + filteredHotels.length) % filteredHotels.length;
    const nextIndex = (currentIndex + 1) % filteredHotels.length;

    return [
      filteredHotels[prevIndex],
      filteredHotels[currentIndex],
      filteredHotels[nextIndex]
    ];
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredHotels.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredHotels.length) % filteredHotels.length);
  };

  const handleHotelClick = (hotel) => {
    dispatch({ type: "SELECT_HOTEL", payload: hotel });
  };

  return (
    <div className="hotels-slider">
      <div className="slider-container">
        {visibleHotels.map((hotel) => (
          <div key={hotel.hotelId} className="hotel-card">
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
            />
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={handlePrev}>&lt;</button>
      <button className="next-button" onClick={handleNext}>&gt;</button>
    </div>
  );
};

HotelsSlider.propTypes = {
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      hotelId: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reviews: PropTypes.string.isRequired,
      pastPrice: PropTypes.string.isRequired,
      actualPrice: PropTypes.string.isRequired,
    })
  ).isRequired,
  id: PropTypes.number.isRequired,
};

export default HotelsSlider;
