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

        </div>
      </form>
    </div>
  )
}
