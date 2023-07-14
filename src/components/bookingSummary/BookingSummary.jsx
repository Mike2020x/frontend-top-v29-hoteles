import "./index.scss"
import { useHotel } from "../../context";
//import { useLocation } from "react-router-dom";


export default function BookingSummary() {
  const { state } = useHotel();
  const { selectedRooms: rooms, selectedHotel } = state;

  return (<div className="summary">
    <h2>Booking Summary</h2>
    <div className="summary__selectedhotel-info">
      <img src={selectedHotel.image} width="80%" alt="selectedhotel-img" />
      <div className="summary__selectedhotel-info--text">
        <h3>{selectedHotel.title}</h3>
        <p>{rooms.address}</p>
      </div>
    </div>
    <div className="summary__check">
      <div>
        <h4>Check In</h4>
        <date>{selectedHotel.checkIn.toISOString().split('T')[0]}</date>
        <h4>Check In time</h4>
        <time>2:00 pm</time>
      </div>
      <div>
        <h4>Check Out</h4>
        <date>{selectedHotel.checkOut.toISOString().split('T')[0]}</date>
        <h4>Check Out time</h4>
        <time>12:00 pm</time>
      </div>
    </div>
    <div className="summary__details">
      <p>{`${Number(selectedHotel.guests)} Guests, ${selectedHotel.days} Night`}</p>
      <a href="#">Edit</a>
    </div>
    <div className='summary__payment-detail'>
      <h3>Payment Details</h3>
      <div className="summary__payment-detail--container">
        <div>
          <p>Base Price</p>
          <p>Promo Discount</p>
          <p>Tax & Service Fees</p>
        </div>
        <div>
          <p>{`$${selectedHotel.priceNight}`}</p>
          <p>{`$${selectedHotel.discount}`}</p>
          <p>{`$${selectedHotel.taxes}`}</p>
          <div>
          </div>
        </div>
      </div>
      <div className="summary__payment-detail--amount">
        <p>Payable Amount</p>
        <p>{`$${selectedHotel.cost}`}</p></div>
    </div>
  </div>

  )
}
