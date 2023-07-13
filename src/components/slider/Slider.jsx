import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Hotel from "../Hotel/Hotel";
import { useHotel } from "../../context";
import "./index.scss";

const HotelsSlider = ({ hotels, id }) => {
  const { dispatch } = useHotel();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width >= 1150) {
        setColumns(3);
      } else if (width >= 930) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    updateColumns();

    window.addEventListener("resize", updateColumns);

    return () => {
      window.removeEventListener("resize", updateColumns);
    };
  }, []);

  const filteredHotels = hotels.filter((hotel) => hotel.hotelId !== id);
  const visibleHotels = getVisibleHotels();

  function getVisibleHotels() {
    const startIndex = currentIndex % filteredHotels.length;
    return filteredHotels.slice(startIndex, startIndex + columns);
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + columns);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - columns);
  };

  const handleHotelClick = (hotel) => {
    dispatch({ type: "SELECT_HOTEL", payload: hotel });
  };

  return (
    <div className="hotels-slider">
      <div className="slider-container">
        {visibleHotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
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
      {filteredHotels.length > columns && (
        <div className="hotels-slider__buttons">
          <button className="prev-button" onClick={handlePrev}>
            &lt;
          </button>
          <button className="next-button" onClick={handleNext}>
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

HotelsSlider.propTypes = {
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      hotelId: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string,
      reviews: PropTypes.string,
      pastPrice: PropTypes.string,
      actualPrice: PropTypes.string,
    })
  ),
  id: PropTypes.string,
};

export default HotelsSlider;
