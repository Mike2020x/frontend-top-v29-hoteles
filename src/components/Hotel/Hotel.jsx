import React from 'react';
import Star from "../star/Star";
import PropTypes from "prop-types";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Hotel.scss";

const Hotel = React.forwardRef(function Hotel(
  {
    hotelId,
    image,
    title,
    location,
    description,
    reviews,
    pastPrice,
    actualPrice,
    onClick,
  },
  ref
) {
  return (
    <>
      <Link to="/hotel-single" onClick={onClick}>
        <div id={hotelId} className="content__hotelCard" ref={ref}>
          <img src={image} className="content__hotelCard--image" alt={image} />
          <div className="content__hotelCard--space">
            <div className="content__hotelCard--location">
              <h2>{title}</h2>
              <div>
                <h4>
                  <FontAwesomeIcon icon={faLocationDot} /> {location}
                </h4>
              </div>
            </div>
            <div className="content__hotelCard--description">
              <p>{description}</p>
            </div>
            <div className="content__hotelCard--stars">
              <Star />
              <div className="content__hotelCard--reviews">
                <h4>{`${reviews} reviews`}</h4>
              </div>
            </div>
            <div className="content__hotelCard--priceService">
              <div className="content__hotelCard--priceHotel">
                <h3>
                  <del>${pastPrice}</del>
                </h3>
                <h2>${actualPrice}</h2>
              </div>
              <div className="content__hotelCard--priceHotel">
                <button>Swimming</button>
                <button>Parking</button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
});

Hotel.propTypes = {
  hotelId: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  reviews: PropTypes.number,
  pastPrice: PropTypes.number,
  actualPrice: PropTypes.number,
  onClick: PropTypes.func,
};

export default Hotel;
