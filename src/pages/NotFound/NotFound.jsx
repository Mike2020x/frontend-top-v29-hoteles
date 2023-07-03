import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./index.scss";

const useInterval = (callback, delay) => {
  const savedCallback = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const NotFound = () => {
  const [randomImage, setRandomImage] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://backend-top-v29-hoteles.onrender.com/api/image"
      );
      const data = await response.json();

      const randomIndex = Math.floor(Math.random() * data.length);
      const randomImageUrl = data[randomIndex].url;
      setRandomImage(randomImageUrl);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useInterval(fetchData, 5000); // Cambiar cada 5 segundos

  return (
    <div className="not-found">
      <h2 className="not-found__title">
        <strong>404 NOT FOUND</strong>
      </h2>
      <div className="not-found__content">
        <div className="not-found__image">
          <img src={randomImage} alt="hotels images random" />
        </div>
        <div className="not-found__text">
          <h1>Hotel Booking MIR Not Found</h1>
          <div className="not-found__message">
            <p className="not-found__message-line">
              We are sorry, but the booking you are looking for could not be
              found.
            </p>
            <p className="not-found__message-line">
              Please check your booking details or contact our support team for
              further assistance.
            </p>
          </div>
          <button className="not-found__button">
            <Link to="/">BACK TO HOMEPAGE</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
