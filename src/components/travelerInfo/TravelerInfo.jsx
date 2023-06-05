import { Link } from "react-router-dom"
import PhoneNumberInput from "../phoneInput/PhoneNumberInput"
import "./index.scss"

export default function TravelerInfo() {
  return (
    <div className="info">
      <h2>Traveler Information</h2>
      <form>
        <div className="info__full-name">
          <div className="info__full-name--item">
            <label htmlFor="name">First Name</label>
            <input type="text" id="name" placeholder="First Name" />
          </div>
          <div className="info__full-name--item">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Last Name" />
          </div>
        </div>
        <div className="info__email">
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="Enter Email" id="email" />
          <span>Booking information will be sent to this email</span>
        </div>
        <div className="info__contact">
          <label htmlFor="number">Contact Info</label>
          <PhoneNumberInput />
        </div>
        <div className="info__request">
          <label htmlFor="req">Especial Request</label>
          <textarea name="request" id="req" cols="30" rows="10" placeholder="e.g.. early check-in,airport transfer" />
        </div>
        <div className="info__coupon">
          <label htmlFor="code">Have a Coupon Code?</label>
          <div className="info__coupon--item"><input type="text" id="code" placeholder="PROMO CODE" />
            <button className="info__coupon--btn">APPLY</button>
          </div>
        </div>
        <Link to="/checkout"><input className="info__pay-btn" type="submit" value="PAY NOW" /></Link>
      </form>
    </div>
  )
}
