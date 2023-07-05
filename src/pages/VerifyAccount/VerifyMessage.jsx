import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import "./index.scss";

const VerifyMessage = () => {
  const { email } = useParams();

  return (
    <div className="verify-message">
      <img
        className="verify-message__image"
        src="/hotel-booking-mir.jpg"
        alt="ocean and houses panorama"
      />
      <div className="verify-message__content">
        <h2 className="verify-message__title">Verify Your Email Address</h2>
        <div className="verify-message__info">
          <p>The verification link has been resent!</p>
        </div>
        <p className="verify-message__info-text">A verification link has been sent to:</p>
        <h3 className="verify-message__email">{email}</h3>
        <p className="verify-message__instructions">
          Please click the button in the message to confirm your email address.
        </p>
      </div>
    </div>
  );
};

VerifyMessage.propTypes = {
  email: PropTypes.string,
};

export default VerifyMessage;
