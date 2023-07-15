import "./index.scss";
import { useHotel } from "../../context";
import { useLocation } from "react-router-dom";

export default function BookingSummary() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get("title");
  const { state } = useHotel();
  const { selectedRooms: rooms, selectedHotel } = state;

  return (
    <div className="summary">
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
          <date>{selectedHotel.checkIn.toISOString().split("T")[0]}</date>
          <h4>Check In time</h4>
          <time>2:00 pm</time>
        </div>
        <div>
          <h4>Check Out</h4>
          <date>{selectedHotel.checkOut.toISOString().split("T")[0]}</date>
          <h4>Check Out time</h4>
          <time>12:00 pm</time>
        </div>
      </div>
      <div className="summary__details">
        <p>Length of stay: {selectedHotel.days}</p>
        <p>Number of rooms: {selectedHotel.numRooms}</p>
        <p>Additional guests: {selectedHotel.additionalPerson}</p>
        <p>Type Room: {selectedHotel.types}</p>
        <p>{`${Number(selectedHotel.guests)} Guest, 1 ${title}, ${
          selectedHotel.days
        } Night`}</p>
      </div>
      <div className="summary__payment-detail">
        <h3>Payment Details</h3>
        <div className="summary__payment-detail--container">
          <div>
            <p>Base price per night</p>
            <p>Additional cost per guest</p>
            <p>
              Total additional cost for{" "}
              {` ${selectedHotel.additionalPerson} `}
              {selectedHotel.additionalPerson === 1 ? "guest" : "guests"}
            </p>
            <p>Long stay discount</p>
            <p>Basic cost per night</p>
            <p>{" "}</p>
            <p>Total</p>
            <p>Tax & Service Fees</p>
            <p>Past price</p>
            <p>Promo Discount</p>
            <p>Actual price</p>
          </div>
          <div>
            <p>{`$${selectedHotel.priceBaseNight}`}</p>
            <p>{`$${selectedHotel.costAdditionalPerson}`}</p>
            <p>{`$${selectedHotel.costAdditional}`}</p>
            <p>{`$${selectedHotel.discountStay}`}</p>
            <p>{" "}</p>
            <p>{`$${selectedHotel.costBaseNight}`}</p>
            <p>{`+ $${selectedHotel.total}`}</p>
            <p>{`+ $${selectedHotel.taxes}`}</p>
            <p><s>{`$${selectedHotel.pastPrice}`}</s></p>
            <p>{`- $${selectedHotel.discount}`}</p>
            <p>{`$${selectedHotel.actualPrice}`}</p>
          </div>
        </div>
        <div className="summary__payment-detail--amount">
          <p>Payable Amount</p>
          <p>{`$${selectedHotel.actualPrice}`}</p>
        </div>
      </div>
    </div>
  );
}
