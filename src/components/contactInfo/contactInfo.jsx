import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types"
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

export default function ContactInfo({ address, email, phone }) {

  return (
    <div className="contact-info">
      <h3>CONTACT INFO</h3>
      <div>
        <FontAwesomeIcon
          className="icons--item"
          icon={faLocationDot}
          color="#4d4d4e"
        /> <span className="information">{address}</span>
      </div>
      <div>
        <FontAwesomeIcon
          className="icons--item"
          icon={faPhone}
          color="#4d4d4e"
        /> <span className="information">{phone}</span>
      </div>
      <div>
        <FontAwesomeIcon
          className="icons--item"
          icon={faEnvelope}
          color="#4d4d4e"
        /> <span className="information">{email}</span>
      </div>
      <div className="social">
        <div className="social--item">
          <FontAwesomeIcon icon={faFacebook} color="#ff0000" />
        </div>
        <div className="social--item">
          <FontAwesomeIcon icon={faInstagram} color="#ff0000" />
        </div>
        <div className="social--item">
          <FontAwesomeIcon icon={faTwitter} color="#ff0000" />
        </div>
        <div className="social--item">
          <FontAwesomeIcon icon={faGoogle} color="#ff0000" />
        </div>
      </div>
      <strong>Check-In: 2:00pm </strong>
      <strong>Check-Out: 12:00pm </strong>
    </div>
  );
}

ContactInfo.propTypes = {
  address: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};
