import { useState, useEffect } from "react";
import { titleImages } from "../../assets/images"; // Asegúrate de que la ruta sea correcta
import "./index.scss";

export default function BookingSuccess() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * titleImages.length);
      const randomImageUrl = titleImages[randomIndex];
      console.log("Selected Image URL:", randomImageUrl); // Agregamos el console.log
      setBackgroundImage(randomImageUrl);
    }, 5000); // Intervalo de 5 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [isPaused]);

  const handleImageClick = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  return (
    <div className="success">
      <div
        className={`content__summary ${isPaused ? "paused" : ""}`}
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        onClick={handleImageClick}
      />
      <h1 className="success__title">
        Payment Successful ! Get Ready For Comfortable Stay.
      </h1>
      <p className="success__text">
        Thank you for your payment. We have received your Payment Successfully.
        Your transaction ID is -SHJG12155215-,You Will get an Email Invoice
        Soon!
      </p>
      <button className="success__btn">Download Invoice</button>
    </div>
  );
}
