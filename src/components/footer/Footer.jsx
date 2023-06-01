import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook, faInstagram, faTwitter, faGoogle
} from '@fortawesome/free-brands-svg-icons'
import "./index.scss"

export default function Footer() {
  return (
  <>
    <footer className="footer">
      <h4>Contact Us</h4>
      <div className="footer__logo">
        <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
        <h3>RICA</h3>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sint sunt repellendus hic vitae laudantium quod...</p>
      <div className="footer__icons">
        <div><FontAwesomeIcon className="footer__icons--item" icon={faLocationPin} color="#4d4d4e" /> <span>A-32,Albany,Newyork</span></div>
        <div><FontAwesomeIcon className="footer__icons--item" icon={faPhone} color="#4d4d4e" /> <span>518-457-5181</span></div>
        <div><FontAwesomeIcon className="footer__icons--item" icon={faEnvelope} color="#4d4d4e" /> <span>contact@gmail.com</span> </div>
      </div>
      <div className="footer__usefull-links">
        <h4>Useful Links</h4>
        <ul>
          <li>Home</li>
          <li>Our Vehical</li>
          <li>Latest Video</li>
          <li>Services</li>
          <li>Booking Deal</li>
          <li>Emergency call</li>
          <li>Mobile App</li>
        </ul>
      </div>
      <div className="footer__about-links">
        <h4>About</h4>
        <ul>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Login</li>
          <li>Register</li>
          <li>Terms and </li>
          <li>Emergency call</li>
          <li>Mobile App</li>
        </ul>
      </div>
      <h4>Top Places</h4>
      <div className="footer__top-places">
        <img src="https://picsum.photos/200/200" alt="logo" className="footer__top-places--item" />
        <img src="https://picsum.photos/200/200" alt="logo" className="footer__top-places--item" />
        <img src="https://picsum.photos/200/200" alt="logo" className="footer__top-places--item" />
        <img src="https://picsum.photos/200/200" alt="logo" className="footer__top-places--item" />
        <img src="https://picsum.photos/200/200" alt="logo" className="footer__top-places--item" />
        <img src="https://picsum.photos/200/200" alt="logo" className="footer__top-places--item" />
      </div>
      <h4>New Topics</h4>
      <div className="footer__new-topics">
        <div className="footer__new-topics--item">
          <img src="https://picsum.photos/200/200" alt="topics" />
          <div className="footer__new-topics--text">
            <h4>Recent News</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugit nesciunt...</p>
          </div>
        </div>
        <div className="footer__new-topics--item">
          <img src="https://picsum.photos/200/200" alt="topics" />
          <div className="footer__new-topics--text">
            <h4>Recent News</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugit nesciunt...</p>
          </div>
        </div>
      </div>
      <div className="footer__social">
        <div className="footer__social--item">
          <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
        </div>
        <div className="footer__social--item">
          <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
        </div>
        <div className="footer__social--item">
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
        </div>
        <div className="footer__social--item">
          <FontAwesomeIcon icon={faGoogle} color="#4d4d4e" />
        </div>
      </div>
      <span className="copyright">Copyright 2023 make it real camp 💖</span>
    </footer >
    </>
  )
}
