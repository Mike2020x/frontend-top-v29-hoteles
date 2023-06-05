import "./index.scss"

export default function BookingSummary() {
  return (<div className="summary">
    <h2>Booking Summary</h2>
    <div className="summary__hotel-info">
      <img src="https://picsum.photos/200/200" alt="hotel-img" />
      <div className="summary__hotel-info--text">
        <h3>Sea view Hotel</h3>
        <p>Mina Road,Bur Dubai,Dubai</p>
      </div>
    </div>
    <div className="summary__check">
      <div>
        <h4>Check In</h4>
        <date>Tue,18 sep 2019</date>
        <h4>Check In time</h4>
        <time>2:00 pm</time>
      </div>
      <div>
        <h4>Check Out</h4>
        <date>Tue,18 sep 2019</date>
        <h4>Check Out time</h4>
        <time>12:00 pm</time>
      </div>
    </div>
    <div className="summary__details">
      <p>2 Guest, 1 Deluxe Room,3 Night </p>
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
          <p>$2510</p>
          <p>$250</p>
          <p>$150</p>
          <div>
          </div>
        </div>
      </div>
      <div className="summary__payment-detail--amount">
        <p>Payable Amount</p>
        <p>$2410</p></div>
    </div>
  </div>

  )
}
