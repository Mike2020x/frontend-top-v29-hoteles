import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook, faInstagram, faTwitter, faGoogle
} from '@fortawesome/free-brands-svg-icons'
import "./index.scss"

export default function Footer() {
  return (
    <footer className="footer">
      <h3>Contact Us</h3>
      <img src="https://picsum.photos/100/50" alt="logo" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sint sunt repellendus hic vitae laudantium quod, alias, quidem voluptas dolorum omnis sequi. Officiis necessitatibus expedita quos in fuga quo eaque.</p>
      <div className="footer__icons">
        <div className="footer__icons--item"><FontAwesomeIcon icon={faLocationPin} color="#4d4d4e" /> <span>A-32,Albany,Newyork</span></div>
        <div className="footer__icons--item"><FontAwesomeIcon icon={faPhone} color="#4d4d4e" /> <span>518-457-5181</span></div>
        <div className="footer__icons--item"><FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" /> <span>contact@gmail.com</span> </div>
      </div>
      <div className="footer__usefull-links">
        <h3>Useful Links</h3>
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
        <h3>Useful Links</h3>
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
      <h3>Top Places</h3>
      <div className="footer__top-places">

        <img src="https://picsum.photos/200/200" alt="logo" className="footer__top-places--item" />
        <img src="https://picsum.photos/200/200" alt="logo" className="footer__top-places--item" />
        <img src="https://picsum.photos/200/200" alt="logo" className="footer__top-places--item" />
        <img src="https://picsum.photos/200/200" alt="logo" className="footer__top-places--item" />
        <img src="https://picsum.photos/200/200" alt="logo" className="footer__top-places--item"/>
        <img src="https://picsum.photos/200/200" alt="logo" className="footer__top-places--item"/>
      </div>
      <div className="footer__new-topics">
        <div className="new-topics--title"><h3>New Topics</h3></div>
        <div className="footer__new-topics--item">
          <img src="https://picsum.photos/200/200" alt="topics" />
          <h4>Recent News</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugit nesciunt eveniet, vitae hic consequuntur veniam deserunt ut. Veniam officiis recusandae molestiae voluptatum suscipit optio numquam repellendus, ullam rerum sint.</p>
        </div>
        <div className="footer__new-topics--item">
          <img src="https://picsum.photos/200/200" alt="topics" />
          <h4>Recent News</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugit nesciunt eveniet, vitae hic consequuntur veniam deserunt ut. Veniam officiis recusandae molestiae voluptatum suscipit optio numquam repellendus, ullam rerum sint.</p>
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
  )
}
