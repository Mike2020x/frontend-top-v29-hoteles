import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function contactInfoComponent() {
  return (
    <div className="">

      <h3>CONTACT INFO</h3>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dicta explicabo error sunt! Error sed quasi quia, officia laboriosam quae repellendus officiis deleniti vero, dolor doloremque recusandae suscipit sint incidunt.</p>
      <p>145896258</p>
      <p>contact@seaview.com</p>

      <div className="footer__social--item">
        <FontAwesomeIcon icon={faFacebook} color="#ff0000" />
      </div>
      <div className="footer__social--item">
        <FontAwesomeIcon icon={faInstagram} color="#ff0000" />
      </div>
      <div className="footer__social--item">
        <FontAwesomeIcon icon={faTwitter} color="#ff0000" />
      </div>
      <div className="footer__social--item">
        <FontAwesomeIcon icon={faGoogle} color="#ff0000" />
      </div>

      <strong>CheckIn: 2:00 PM</strong>
      <strong>CheckOut: 12:00 PM</strong>
    </div>
  )
}
