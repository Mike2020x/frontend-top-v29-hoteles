import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import "./index.scss";
export default function ContactInfo() {
  return (
    <div className="contact-info">
      <h3>CONTACT INFO</h3>
      <div><FontAwesomeIcon className="icons--item" icon={faLocationDot} color="#4d4d4e" /> <span>A-32,Albany,Newyork</span></div>
      <div><FontAwesomeIcon className="icons--item" icon={faPhone} color="#4d4d4e" /> <span>518-457-5181</span></div>
      <div><FontAwesomeIcon className="icons--item" icon={faEnvelope} color="#4d4d4e" /> <span>contact@gmail.com</span> </div>
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
      <strong>CheckIn: 2:00 PM</strong>
      <strong>CheckOut: 12:00 PM</strong>
    </div>

  )
}
