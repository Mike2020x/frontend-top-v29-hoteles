import { useState } from "react";
import "./ForgotPassword.scss";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar la solicitud de restablecimiento de contraseña
    console.log("Submit form");
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="forgot-password">
      <div className="forgot-password__wrapper">
        <div className="forgot-password__content">
          <div className="forgot-password__image-container">
            <img
              className="forgot-password__image"
              src="/hotel-booking-mir.jpg"
              alt="ocean and houses panorama"
            />
          </div>
          <h2 className="forgot-password__title">Forgot Password?</h2>
          <p className="forgot-password__description">
            Enter your email address to reset your password.
          </p>
          <form className="forgot-password__form" onSubmit={handleSubmit}>
            <input
              className="forgot-password__input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              required
            />
            <button className="forgot-password__button" type="submit">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
